// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import {PoolKey} from "@uniswap/v4-core/src/types/PoolKey.sol";
import {Currency} from "@uniswap/v4-core/src/types/Currency.sol";

import {PoolManager} from "@uniswap/v4-core/src/PoolManager.sol";
import {IPoolManager} from "@uniswap/v4-core/src/interfaces/IPoolManager.sol";
import {IHooks} from "@uniswap/v4-core/src/interfaces/IHooks.sol";
import {PoolInitializeTest} from "@uniswap/v4-core/src/test/PoolInitializeTest.sol";
import {PoolModifyLiquidityTest} from "@uniswap/v4-core/src/test/PoolModifyLiquidityTest.sol";
import {PoolSwapTest} from "@uniswap/v4-core/src/test/PoolSwapTest.sol";
import {PoolDonateTest} from "@uniswap/v4-core/src/test/PoolDonateTest.sol";
import {MockERC20} from "solmate/test/utils/mocks/MockERC20.sol";
import {IERC20} from "forge-std/interfaces/IERC20.sol";

contract GenerateAnvilGenesisScript is Script {
    
    // RECENT DEPLOYMENT: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
    // PoolManager cannot be hardcoded because of NoDelegateCall.sol
    address MANAGER;

    // 0xFEB29bB43e36c0F8488F78bba2E8E94F0D829Fa1
    address INITROUTER = address(uint160(uint256(keccak256(abi.encode("initrouter")))));
    
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

    MockERC20 token0;
    MockERC20 token1;

    function setUp() public {}

    function run() public {
        vm.broadcast();
        PoolManager manager = new PoolManager(500_000);
        MANAGER = address(manager);

        // Additional helpers for interacting with the pool
        vm.startBroadcast();
        PoolInitializeTest initRouter = new PoolInitializeTest(IPoolManager(MANAGER));
        PoolSwapTest swapRouter = new PoolSwapTest(IPoolManager(MANAGER));
        PoolModifyLiquidityTest lpRouter = new PoolModifyLiquidityTest(IPoolManager(MANAGER));
        PoolDonateTest donateRouter = new PoolDonateTest(IPoolManager(MANAGER));
        vm.stopBroadcast();

        anvilCopyCode(address(initRouter), INITROUTER);
        anvilCopyCode(address(swapRouter), SWAPROUTER);
        anvilCopyCode(address(lpRouter), LPROUTER);
        anvilCopyCode(address(donateRouter), DONATEROUTER);

        // Deploy test tokens
        vm.startBroadcast();
        token0 = new MockERC20("Token0", "T0", 18);
        token1 = new MockERC20("Token1", "T1", 18);
        vm.stopBroadcast();
        anvilCopyCode(address(token0), TOKEN0);
        anvilCopyCode(address(token1), TOKEN1);

        generateGenesis();

        // run a lifecycle test to make sure everything works
        lifecycle();
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
        //         },
        //         "0xtoken1": {
        //             "balance": "0x0",
        //             "code": "0x608...",
        //             "storage": {
        //                 "0xstorageIndex": "0xstorageValue"
        //             }
        //         },
        //     }
        // }
        vm.serializeString("root", "gasLimit", "0xe4e1c0");
        vm.serializeString("root", "difficulty", "0x1");

        // --- Write Mock Tokens to Genesis --- //
        string memory token0Genesis = createTokenGenesisJson(IERC20(address(token0)), TOKEN0);
        vm.serializeString("root", "alloc", token0Genesis);

        string memory token1Genesis = createTokenGenesisJson(IERC20(address(token1)), TOKEN1);
        vm.serializeString("root", "alloc", token1Genesis);

        // --- Write V4 Contracts to Genesis --- //
        vm.serializeString("poolmanager", "balance", "0x0");
        string memory poolManagerChild = vm.serializeString("poolmanager", "code", vm.toString(MANAGER.code));
        string memory poolManager = vm.serializeString("alloc", vm.toString(MANAGER), poolManagerChild);
        vm.serializeString("root", "alloc", poolManager);

        vm.serializeString("initrouter", "balance", "0x0");
        string memory initRouterChild = vm.serializeString("initrouter", "code", vm.toString(INITROUTER.code));
        string memory initRouter = vm.serializeString("alloc", vm.toString(INITROUTER), initRouterChild);
        vm.serializeString("root", "alloc", initRouter);

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

    function createTokenGenesisJson(IERC20 token, address tokenAddr) internal returns (string memory tokenJson) {
        vm.serializeString("token", "balance", "0x0");
        // default anvil wallet 0xf39 will have 10_000e18 token0's preminted to it
        // 0xc651 is the storage index of 0xf39's token balance (cast index address 0xf39 3) where `balanceOf` is storage slot 3 of MockERC20.sol
        vm.serializeString("storage", "0xc651ee22c6951bb8b5bd29e8210fb394645a94315fe10eff2cc73de1aa75c137", "0x00000000000000000000000000000000000000000000021e19e0c9bab2400000");
        
        // write token0's name (slot0): "Token0"
        vm.serializeString("storage", "0x0000000000000000000000000000000000000000000000000000000000000000", vm.toString(vm.load(address(token), bytes32(uint256(0)))));
        
        // write token's symbol (slot1): "T0"
        string memory tokenStorage = vm.serializeString("storage", "0x0000000000000000000000000000000000000000000000000000000000000001", vm.toString(vm.load(address(token), bytes32(uint256(1)))));
        vm.serializeString("token", "storage", tokenStorage);
        
        string memory child = vm.serializeString("token", "code", vm.toString(tokenAddr.code));
        tokenJson = vm.serializeString("alloc", vm.toString(tokenAddr), child);
    }

    function lifecycle() internal {
        MockERC20 t0 = MockERC20(TOKEN0);
        MockERC20 t1 = MockERC20(TOKEN1);
        PoolInitializeTest initRouter = PoolInitializeTest(INITROUTER);
        PoolModifyLiquidityTest lpm = PoolModifyLiquidityTest(LPROUTER);
        PoolSwapTest swapper = PoolSwapTest(SWAPROUTER);
        
        vm.startBroadcast();
        t0.mint(msg.sender, 1_000_000e18);
        t1.mint(msg.sender, 1_000_000e18);
        t0.approve(address(lpm), 1_000_000e18);
        t1.approve(address(lpm), 1_000_000e18);
        t0.approve(address(swapper), 1_000_000e18);
        t1.approve(address(swapper), 1_000_000e18);

        PoolKey memory key = PoolKey({
            currency0: Currency.wrap(address(t0)),
            currency1: Currency.wrap(address(t1)),
            fee: 3000,
            tickSpacing: 60,
            hooks: IHooks(address(0x0))
        });
        initRouter.initialize(key, 79228162514264337593543950336, new bytes(0));
        lpm.modifyLiquidity(key, IPoolManager.ModifyLiquidityParams({
            tickLower: -600,
            tickUpper: 600,
            liquidityDelta: 10e18
        }), new bytes(0));

        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: true,
            amountSpecified: 1e18,
            sqrtPriceLimitX96: 4295128740 // unlimited impact
        });

        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({withdrawTokens: true, settleUsingTransfer: true, currencyAlreadySent: false});

        swapper.swap(key, params, testSettings, new bytes(0));
        vm.stopBroadcast();
    }
}
