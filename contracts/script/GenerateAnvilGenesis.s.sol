// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import {PoolManager} from "@uniswap/v4-core/contracts/PoolManager.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolModifyPositionTest} from "@uniswap/v4-core/contracts/test/PoolModifyPositionTest.sol";
import {PoolSwapTest} from "@uniswap/v4-core/contracts/test/PoolSwapTest.sol";
import {PoolDonateTest} from "@uniswap/v4-core/contracts/test/PoolDonateTest.sol";

contract GenerateAnvilGenesisScript is Script {

    address MANAGER = address(uint160(uint256(keccak256(abi.encode("poolmanager")))));
    address SWAPROUTER = address(uint160(uint256(keccak256(abi.encode("swaprouter")))));
    address LPROUTER = address(uint160(uint256(keccak256(abi.encode("lprouter")))));
    address DONATEROUTER = address(uint160(uint256(keccak256(abi.encode("donaterouter")))));

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
