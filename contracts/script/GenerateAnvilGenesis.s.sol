// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import {PoolManager} from "@uniswap/v4-core/contracts/PoolManager.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolModifyPositionTest} from "@uniswap/v4-core/contracts/test/PoolModifyPositionTest.sol";
import {PoolSwapTest} from "@uniswap/v4-core/contracts/test/PoolSwapTest.sol";
import {PoolDonateTest} from "@uniswap/v4-core/contracts/test/PoolDonateTest.sol";
import {MockERC20} from "solmate/test/utils/mocks/MockERC20.sol";

contract GenerateAnvilGenesisScript is Script {
    
    // 0x565506c573abfe24eb6abb7c0d8c809ace1f638d
    address MANAGER = address(uint160(uint256(keccak256(abi.encode("poolmanager")))));
    
    // 0xaf7ccf0ff7ef054a1db43330f5431958ab4a9441
    address SWAPROUTER = address(uint160(uint256(keccak256(abi.encode("swaprouter")))));
    
    // 0x3079c0319f8734239eb06765666468f7b76eb505
    address LPROUTER = address(uint160(uint256(keccak256(abi.encode("lprouter")))));
    
    // 0x4fa6c7a3a9b84f2a8340d4d33190f84e307b085c
    address DONATEROUTER = address(uint160(uint256(keccak256(abi.encode("donaterouter")))));
    
    // 0x2dafbdf11a8cf84c372539a38d781d8248399ae3
    address TOKEN0 = address(uint160(uint256(keccak256(abi.encode("token0")))));
    
    // 0xa8ceafb1940244f2f022ff8440a42411b4f07fc4
    address TOKEN1 = address(uint160(uint256(keccak256(abi.encode("token1")))));

    function setUp() public {}

    function run() public {
        vm.broadcast();
        PoolManager manager = new PoolManager(500_000);

        anvilCopyCode(address(manager), MANAGER);

        // Additional helpers for interacting with the pool
        vm.startBroadcast();
        PoolSwapTest swapRouter = new PoolSwapTest(IPoolManager(MANAGER));
        PoolModifyPositionTest lpRouter = new PoolModifyPositionTest(IPoolManager(MANAGER));
        PoolDonateTest donateRouter = new PoolDonateTest(IPoolManager(MANAGER));
        vm.stopBroadcast();

        anvilCopyCode(address(swapRouter), SWAPROUTER);
        anvilCopyCode(address(lpRouter), LPROUTER);
        anvilCopyCode(address(donateRouter), DONATEROUTER);

        // Deploy test tokens
        MockERC20 token0 = new MockERC20("Token0", "T0", 18);
        MockERC20 token1 = new MockERC20("Token1", "T1", 18);
        anvilCopyCode(address(token0), TOKEN0);
        anvilCopyCode(address(token1), TOKEN1);

        generateGenesis();
    }

    function generateGenesis() internal {
        // {
        //     "gasLimit": "0x0000000000000000000000000000000000000000000000000000000000e4e1c0",
        //     "difficulty": "0x1",
        //     "alloc": {
        //         "0x123": {
        //             "balance": "0x0",
        //             "code": "0x608..."
        //         },
        //         "0x456": {
        //             "balance": "0x0",
        //             "code": "0x608..."
        //         }
        //     }
        // }
        vm.serializeString("root", "gasLimit", "0xe4e1c0");
        vm.serializeString("root", "difficulty", "0x1");

        vm.serializeString("token0", "balance", "0x0");
        string memory token0Child = vm.serializeString("token0", "code", vm.toString(TOKEN0.code));
        string memory token0 = vm.serializeString("alloc", vm.toString(TOKEN0), token0Child);
        vm.serializeString("root", "alloc", token0);

        vm.serializeString("token1", "balance", "0x0");
        string memory token1Child = vm.serializeString("token1", "code", vm.toString(TOKEN1.code));
        string memory token1 = vm.serializeString("alloc", vm.toString(TOKEN1), token1Child);
        vm.serializeString("root", "alloc", token1);

        vm.serializeString("poolmanager", "balance", "0x0");
        string memory poolManagerChild = vm.serializeString("poolmanager", "code", vm.toString(MANAGER.code));
        string memory poolManager = vm.serializeString("alloc", vm.toString(MANAGER), poolManagerChild);
        vm.serializeString("root", "alloc", poolManager);

        vm.serializeString("swaprouter", "balance", "0x0");
        string memory swapRouterChild = vm.serializeString("swaprouter", "code", vm.toString(SWAPROUTER.code));
        string memory swapRouter = vm.serializeString("alloc", vm.toString(SWAPROUTER), swapRouterChild);
        vm.serializeString("root", "alloc", swapRouter);

        vm.serializeString("lprouter", "balance", "0x0");
        string memory lpRouterChild = vm.serializeString("lprouter", "code", vm.toString(LPROUTER.code));
        string memory lpRouter = vm.serializeString("alloc", vm.toString(LPROUTER), lpRouterChild);
        vm.serializeString("root", "alloc", lpRouter);

        vm.serializeString("donaterouter", "balance", "0x0");
        string memory donateRouterChild = vm.serializeString("donaterouter", "code", vm.toString(DONATEROUTER.code));
        string memory donateRouter = vm.serializeString("alloc", vm.toString(DONATEROUTER), donateRouterChild);
        string memory root = vm.serializeString("root", "alloc", donateRouter);
        
        vm.writeJson(root, "genesis.json");
    }

    function anvilCopyCode(address source, address destination) internal {
        // courtesy of horsefacts
        // https://github.com/farcasterxyz/contracts/blob/de8aa0723a5c83b5682fd6d3a1123ea5fced179e/script/Deploy.s.sol#L54
        string[] memory command = new string[](5);
        command[0] = "cast";
        command[1] = "rpc";
        command[2] = "anvil_setCode";
        command[3] = vm.toString(destination);
        command[4] = vm.toString(source.code);
        vm.ffi(command);
    }
}
