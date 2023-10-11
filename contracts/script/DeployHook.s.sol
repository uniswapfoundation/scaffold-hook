// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
import {PoolManager} from "@uniswap/v4-core/contracts/PoolManager.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolModifyPositionTest} from "@uniswap/v4-core/contracts/test/PoolModifyPositionTest.sol";
import {PoolSwapTest} from "@uniswap/v4-core/contracts/test/PoolSwapTest.sol";
import {PoolDonateTest} from "@uniswap/v4-core/contracts/test/PoolDonateTest.sol";
import {HookMiner} from "../test/utils/HookMiner.sol";

contract DeployHookScript is Script {
    address constant CREATE2_DEPLOYER = address(0x4e59b44847b379578588920cA78FbF26c0B4956C);
    PoolManager manager = PoolManager(payable(vm.envAddress("POOL_MANAGER_ADDR")));

    function setUp() public {}

    function run() public {
        bytes memory constructorArgs = abi.encode(address(manager));

        // hook contracts must have specific flags encoded in the address
        uint160 flags = uint160(
            Hooks.BEFORE_SWAP_FLAG | Hooks.AFTER_SWAP_FLAG | Hooks.BEFORE_MODIFY_POSITION_FLAG
                | Hooks.AFTER_MODIFY_POSITION_FLAG
        );

        // Mine a salt that will produce a hook address with the correct flags
        bytes memory creationCode = vm.getCode(vm.envString("HOOK_CONTRACT"));
        (address hookAddress, bytes32 salt) =
            HookMiner.find(CREATE2_DEPLOYER, flags, 0, creationCode, constructorArgs);

        // Deploy the hook using CREATE2
        bytes memory bytecode = abi.encodePacked(creationCode, constructorArgs);
        vm.startBroadcast();
        address deployedHook;
        assembly {
            deployedHook := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
        }
        vm.stopBroadcast();

        // verify proper create2 usage
        require(deployedHook == hookAddress, "DeployScript: hook address mismatch");

        // Additional helpers for interacting with the pool
        // deployRouters();
    }

    function deployRouters() internal {
        vm.startBroadcast();
        new PoolModifyPositionTest(IPoolManager(address(manager)));
        new PoolSwapTest(IPoolManager(address(manager)));
        new PoolDonateTest(IPoolManager(address(manager)));
        vm.stopBroadcast();
    }
}
