// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import {Hooks} from "@uniswap/v4-core/src/libraries/Hooks.sol";
import {HookMiner} from "../test/utils/HookMiner.sol";

contract DeployHookScript is Script {
    address constant CREATE2_DEPLOYER = address(0x4e59b44847b379578588920cA78FbF26c0B4956C);
    address manager = payable(vm.envAddress("POOL_MANAGER_ADDR"));

    function setUp() public {}

    function run() public {
        bytes memory constructorArgs = abi.encode(manager);

        // hook contracts must have specific flags encoded in the address
        // ------------------------------ //
        // --- Set your flags in .env --- //
        // ------------------------------ //
        uint160 flags = getFlagsFromEnv();
        console2.logBytes32(bytes32(uint256(flags)));

        // Mine a salt that will produce a hook address with the correct flags
        bytes memory creationCode = vm.getCode(vm.envString("HOOK_CONTRACT"));
        (address hookAddress, bytes32 salt) =
            HookMiner.find(CREATE2_DEPLOYER, flags, creationCode, constructorArgs);

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
    }

    /// @dev Read booleans flags from the environemnt and encode them into the uint160 bit flags
    function getFlagsFromEnv() internal view returns (uint160) {
        uint256 flags;
        if (vm.envBool("BEFORE_SWAP")) flags |= Hooks.BEFORE_SWAP_FLAG;
        if (vm.envBool("AFTER_SWAP")) flags |= Hooks.AFTER_SWAP_FLAG;

        if (vm.envBool("BEFORE_ADD_LIQUIDITY")) flags |= Hooks.BEFORE_ADD_LIQUIDITY_FLAG;
        if (vm.envBool("AFTER_ADD_LIQUIDITY")) flags |= Hooks.AFTER_ADD_LIQUIDITY_FLAG;
        if (vm.envBool("BEFORE_REMOVE_LIQUIDITY")) flags |= Hooks.BEFORE_REMOVE_LIQUIDITY_FLAG;
        if (vm.envBool("AFTER_REMOVE_LIQUIDITY")) flags |= Hooks.AFTER_REMOVE_LIQUIDITY_FLAG;

        if (vm.envBool("BEFORE_INITIALIZE")) flags |= Hooks.BEFORE_INITIALIZE_FLAG;
        if (vm.envBool("AFTER_INITIALIZE")) flags |= Hooks.AFTER_INITIALIZE_FLAG;

        if (vm.envBool("BEFORE_DONATE")) flags |= Hooks.BEFORE_DONATE_FLAG;
        if (vm.envBool("AFTER_DONATE")) flags |= Hooks.AFTER_DONATE_FLAG;

        if (vm.envBool("NO_OP")) flags |= Hooks.NO_OP_FLAG;
        if (vm.envBool("ACCESS_LOCK")) flags |= Hooks.ACCESS_LOCK_FLAG;

        return uint160(flags);
    }
}
