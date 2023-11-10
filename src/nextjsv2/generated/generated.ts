import {
  Address,
  UseContractEventConfig,
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useChainId,
  useContractEvent,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
} from 'wagmi'
import { PrepareWriteContractResult, ReadContractResult, WriteContractMode } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseTestHooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseTestHooksABI = [
  { type: 'error', inputs: [], name: 'HookNotImplemented' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterDonate',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: '', internalType: 'uint160', type: 'uint160' },
      { name: '', internalType: 'int24', type: 'int24' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterInitialize',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: '',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: '', internalType: 'BalanceDelta', type: 'int256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterModifyPosition',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: '',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      { name: '', internalType: 'BalanceDelta', type: 'int256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterSwap',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeDonate',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: '', internalType: 'uint160', type: 'uint160' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeInitialize',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: '',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeModifyPosition',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: '',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeSwap',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Constants
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const constantsABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'SQRT_RATIO_121_100',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'SQRT_RATIO_1_1',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'SQRT_RATIO_1_2',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'SQRT_RATIO_1_4',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'SQRT_RATIO_2_1',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'SQRT_RATIO_4_1',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export const counterABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_poolManager', internalType: 'contract IPoolManager', type: 'address' }],
  },
  { type: 'error', inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }], name: 'HookAddressNotValid' },
  { type: 'error', inputs: [], name: 'HookNotImplemented' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterDonate',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: '', internalType: 'uint160', type: 'uint160' },
      { name: '', internalType: 'int24', type: 'int24' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterInitialize',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: '',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: '', internalType: 'BalanceDelta', type: 'int256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterModifyPosition',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
    name: 'afterModifyPositionCount',
    outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: '',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      { name: '', internalType: 'BalanceDelta', type: 'int256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterSwap',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
    name: 'afterSwapCount',
    outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeDonate',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: '', internalType: 'uint160', type: 'uint160' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeInitialize',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: '',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeModifyPosition',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
    name: 'beforeModifyPositionCount',
    outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: '',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeSwap',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
    name: 'beforeSwapCount',
    outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'getHooksCalls',
    outputs: [
      {
        name: '',
        internalType: 'struct Hooks.Calls',
        type: 'tuple',
        components: [
          { name: 'beforeInitialize', internalType: 'bool', type: 'bool' },
          { name: 'afterInitialize', internalType: 'bool', type: 'bool' },
          { name: 'beforeModifyPosition', internalType: 'bool', type: 'bool' },
          { name: 'afterModifyPosition', internalType: 'bool', type: 'bool' },
          { name: 'beforeSwap', internalType: 'bool', type: 'bool' },
          { name: 'afterSwap', internalType: 'bool', type: 'bool' },
          { name: 'beforeDonate', internalType: 'bool', type: 'bool' },
          { name: 'afterDonate', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'poolManager',
    outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
  },
] as const

/**
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export const counterAddress = {
  31337: '0x3Ce72a2059524eC26219E6a7f9dBe387370ac1D8',
  80001: '0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8',
} as const

/**
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export const counterConfig = { address: counterAddress, abi: counterABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CurrencyLibrary
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const currencyLibraryABI = [
  { type: 'error', inputs: [], name: 'ERC20TransferFailed' },
  { type: 'error', inputs: [], name: 'NativeTransferFailed' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'NATIVE',
    outputs: [{ name: '', internalType: 'Currency', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Deployers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deployersABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'manager', internalType: 'contract PoolManager', type: 'address' },
      { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'createAndInitPool',
    outputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'id', internalType: 'PoolId', type: 'bytes32' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'uri_', internalType: 'string', type: 'string' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'account', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FeeLibrary
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const feeLibraryABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DYNAMIC_FEE_FLAG',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'HOOK_SWAP_FEE_FLAG',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'HOOK_WITHDRAW_FEE_FLAG',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'STATIC_FEE_MASK',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fees
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const feesABI = [
  { type: 'error', inputs: [], name: 'ERC20TransferFailed' },
  { type: 'error', inputs: [], name: 'FeeNotDynamic' },
  { type: 'error', inputs: [], name: 'FeeTooLarge' },
  { type: 'error', inputs: [], name: 'InvalidCaller' },
  { type: 'error', inputs: [], name: 'NativeTransferFailed' },
  { type: 'error', inputs: [], name: 'ProtocolFeeCannotBeFetched' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'oldOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'protocolFeeController', internalType: 'address', type: 'address', indexed: false }],
    name: 'ProtocolFeeControllerUpdated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_SWAP_FEE',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'Currency', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'collectHookFees',
    outputs: [{ name: 'amountCollected', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'Currency', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'collectProtocolFees',
    outputs: [{ name: 'amountCollected', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'hookAddress', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'Currency', type: 'address' },
    ],
    name: 'hookFeesAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'protocolFeeController',
    outputs: [{ name: '', internalType: 'contract IProtocolFeeController', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
    name: 'protocolFeesAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'setOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'controller', internalType: 'contract IProtocolFeeController', type: 'address' }],
    name: 'setProtocolFeeController',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HookMiner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const hookMinerABI = [
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'uint256', type: 'uint256' },
      { name: 'creationCode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'computeAddress',
    outputs: [{ name: 'hookAddress', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'flags', internalType: 'uint160', type: 'uint160' },
      { name: 'seed', internalType: 'uint256', type: 'uint256' },
      { name: 'creationCode', internalType: 'bytes', type: 'bytes' },
      { name: 'constructorArgs', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'find',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HookTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const hookTestABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_PRICE_LIMIT',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_PRICE_LIMIT',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'initHookTestEnv', outputs: [] },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const hooksABI = [
  { type: 'error', inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }], name: 'HookAddressNotValid' },
  { type: 'error', inputs: [], name: 'InvalidHookResponse' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IDynamicFeeManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iDynamicFeeManagerABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'getFee',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'account', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155MetadataURI
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155MetadataUriABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'account', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Minimal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MinimalABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFees
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFeesABI = [
  { type: 'error', inputs: [], name: 'FeeNotDynamic' },
  { type: 'error', inputs: [], name: 'FeeTooLarge' },
  { type: 'error', inputs: [], name: 'ProtocolFeeCannotBeFetched' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'protocolFeeController', internalType: 'address', type: 'address', indexed: false }],
    name: 'ProtocolFeeControllerUpdated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'Currency', type: 'address' },
    ],
    name: 'hookFeesAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'Currency', type: 'address' }],
    name: 'protocolFeesAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IHookFeeManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iHookFeeManagerABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'getHookFees',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IHooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iHooksABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterDonate',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
      { name: 'tick', internalType: 'int24', type: 'int24' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterInitialize',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: 'delta', internalType: 'BalanceDelta', type: 'int256' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterModifyPosition',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      { name: 'delta', internalType: 'BalanceDelta', type: 'int256' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterSwap',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeDonate',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeInitialize',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeModifyPosition',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeSwap',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILockCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLockCallbackABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'lockAcquired',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolManagerABI = [
  { type: 'error', inputs: [], name: 'CurrenciesInitializedOutOfOrder' },
  { type: 'error', inputs: [], name: 'CurrencyNotSettled' },
  { type: 'error', inputs: [], name: 'FeeNotDynamic' },
  { type: 'error', inputs: [], name: 'FeeTooLarge' },
  { type: 'error', inputs: [{ name: 'locker', internalType: 'address', type: 'address' }], name: 'LockedBy' },
  { type: 'error', inputs: [], name: 'MaxCurrenciesTouched' },
  { type: 'error', inputs: [], name: 'NotPoolManagerToken' },
  { type: 'error', inputs: [], name: 'ProtocolFeeCannotBeFetched' },
  { type: 'error', inputs: [], name: 'TickSpacingTooLarge' },
  { type: 'error', inputs: [], name: 'TickSpacingTooSmall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'account', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'dynamicSwapFee', internalType: 'uint24', type: 'uint24', indexed: false },
    ],
    name: 'DynamicSwapFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'hookFees', internalType: 'uint24', type: 'uint24', indexed: false },
    ],
    name: 'HookFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'currency0', internalType: 'Currency', type: 'address', indexed: true },
      { name: 'currency1', internalType: 'Currency', type: 'address', indexed: true },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      { name: 'tickSpacing', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'hooks', internalType: 'contract IHooks', type: 'address', indexed: false },
    ],
    name: 'Initialize',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'tickLower', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'liquidityDelta', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'ModifyPosition',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'protocolFeeController', internalType: 'address', type: 'address', indexed: false }],
    name: 'ProtocolFeeControllerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'protocolFees', internalType: 'uint24', type: 'uint24', indexed: false },
    ],
    name: 'ProtocolFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount0', internalType: 'int128', type: 'int128', indexed: false },
      { name: 'amount1', internalType: 'int128', type: 'int128', indexed: false },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160', indexed: false },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
    ],
    name: 'Swap',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_TICK_SPACING',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_TICK_SPACING',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'locker', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'Currency', type: 'address' },
    ],
    name: 'currencyDelta',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'donate',
    outputs: [{ name: '', internalType: 'BalanceDelta', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'extsload',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'nSlots', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'extsload',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
    ],
    name: 'getLiquidity',
    outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
    name: 'getLiquidity',
    outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'getLock',
    outputs: [{ name: 'locker', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
    ],
    name: 'getPosition',
    outputs: [
      {
        name: 'position',
        internalType: 'struct Position.Info',
        type: 'tuple',
        components: [
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
          { name: 'feeGrowthInside0LastX128', internalType: 'uint256', type: 'uint256' },
          { name: 'feeGrowthInside1LastX128', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
    name: 'getSlot0',
    outputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
      { name: 'tick', internalType: 'int24', type: 'int24' },
      { name: 'protocolFees', internalType: 'uint24', type: 'uint24' },
      { name: 'hookFees', internalType: 'uint24', type: 'uint24' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'Currency', type: 'address' },
    ],
    name: 'hookFeesAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'initialize',
    outputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'lock',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lockData',
    outputs: [
      { name: 'length', internalType: 'uint128', type: 'uint128' },
      { name: 'nonzeroDeltaCount', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'Currency', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'modifyPosition',
    outputs: [{ name: '', internalType: 'BalanceDelta', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'Currency', type: 'address' }],
    name: 'protocolFeesAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
    name: 'reservesOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'setHookFees',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'setProtocolFees',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'token', internalType: 'Currency', type: 'address' }],
    name: 'settle',
    outputs: [{ name: 'paid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [{ name: '', internalType: 'BalanceDelta', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'currency', internalType: 'Currency', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'take',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'updateDynamicSwapFee',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IProtocolFeeController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iProtocolFeeControllerABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'poolKey',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'protocolFeesForPool',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_decimals', internalType: 'uint8', type: 'uint8' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NoDelegateCall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const noDelegateCallABI = [{ type: 'error', inputs: [], name: 'DelegateCallNotAllowed' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Owned
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownedABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'InvalidCaller' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'oldOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnerChanged',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'setOwner',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolABI = [
  { type: 'error', inputs: [], name: 'NoLiquidityToReceiveFees' },
  { type: 'error', inputs: [], name: 'PoolAlreadyInitialized' },
  { type: 'error', inputs: [], name: 'PoolNotInitialized' },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPriceCurrentX96', internalType: 'uint160', type: 'uint160' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'PriceLimitAlreadyExceeded',
  },
  {
    type: 'error',
    inputs: [{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' }],
    name: 'PriceLimitOutOfBounds',
  },
  { type: 'error', inputs: [], name: 'SwapAmountCannotBeZero' },
  { type: 'error', inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }], name: 'TickLiquidityOverflow' },
  {
    type: 'error',
    inputs: [{ name: 'tickLower', internalType: 'int24', type: 'int24' }],
    name: 'TickLowerOutOfBounds',
  },
  { type: 'error', inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }], name: 'TickNotInitialized' },
  {
    type: 'error',
    inputs: [{ name: 'tickUpper', internalType: 'int24', type: 'int24' }],
    name: 'TickUpperOutOfBounds',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
    ],
    name: 'TicksMisordered',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolDonateTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const poolDonateTestABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_manager', internalType: 'contract IPoolManager', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'ERC20TransferFailed' },
  { type: 'error', inputs: [], name: 'NativeTransferFailed' },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'donate',
    outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'rawData', internalType: 'bytes', type: 'bytes' }],
    name: 'lockAcquired',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'manager',
    outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
  },
] as const

/**
 *
 */
export const poolDonateTestAddress = {
  31337: '0x4FA6C7a3A9b84F2A8340D4d33190F84e307B085c',
} as const

/**
 *
 */
export const poolDonateTestConfig = { address: poolDonateTestAddress, abi: poolDonateTestABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolManagerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'controllerGasLimit', internalType: 'uint256', type: 'uint256' }],
  },
  { type: 'error', inputs: [], name: 'CannotUpdateEmptyPosition' },
  { type: 'error', inputs: [], name: 'CurrenciesInitializedOutOfOrder' },
  { type: 'error', inputs: [], name: 'CurrencyNotSettled' },
  { type: 'error', inputs: [], name: 'DelegateCallNotAllowed' },
  { type: 'error', inputs: [], name: 'ERC20TransferFailed' },
  { type: 'error', inputs: [], name: 'FeeNotDynamic' },
  { type: 'error', inputs: [], name: 'FeeTooLarge' },
  { type: 'error', inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }], name: 'HookAddressNotValid' },
  { type: 'error', inputs: [], name: 'InvalidCaller' },
  { type: 'error', inputs: [], name: 'InvalidHookResponse' },
  { type: 'error', inputs: [], name: 'InvalidSqrtRatio' },
  { type: 'error', inputs: [], name: 'InvalidTick' },
  { type: 'error', inputs: [{ name: 'locker', internalType: 'address', type: 'address' }], name: 'LockedBy' },
  { type: 'error', inputs: [], name: 'MaxCurrenciesTouched' },
  { type: 'error', inputs: [], name: 'NativeTransferFailed' },
  { type: 'error', inputs: [], name: 'NoLiquidityToReceiveFees' },
  { type: 'error', inputs: [], name: 'NotPoolManagerToken' },
  { type: 'error', inputs: [], name: 'PoolAlreadyInitialized' },
  { type: 'error', inputs: [], name: 'PoolNotInitialized' },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPriceCurrentX96', internalType: 'uint160', type: 'uint160' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'PriceLimitAlreadyExceeded',
  },
  {
    type: 'error',
    inputs: [{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' }],
    name: 'PriceLimitOutOfBounds',
  },
  { type: 'error', inputs: [], name: 'ProtocolFeeCannotBeFetched' },
  { type: 'error', inputs: [], name: 'SwapAmountCannotBeZero' },
  { type: 'error', inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }], name: 'TickLiquidityOverflow' },
  {
    type: 'error',
    inputs: [{ name: 'tickLower', internalType: 'int24', type: 'int24' }],
    name: 'TickLowerOutOfBounds',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tick', internalType: 'int24', type: 'int24' },
      { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
    ],
    name: 'TickMisaligned',
  },
  { type: 'error', inputs: [], name: 'TickSpacingTooLarge' },
  { type: 'error', inputs: [], name: 'TickSpacingTooSmall' },
  {
    type: 'error',
    inputs: [{ name: 'tickUpper', internalType: 'int24', type: 'int24' }],
    name: 'TickUpperOutOfBounds',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
    ],
    name: 'TicksMisordered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'account', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'dynamicSwapFee', internalType: 'uint24', type: 'uint24', indexed: false },
    ],
    name: 'DynamicSwapFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'hookFees', internalType: 'uint24', type: 'uint24', indexed: false },
    ],
    name: 'HookFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'currency0', internalType: 'Currency', type: 'address', indexed: true },
      { name: 'currency1', internalType: 'Currency', type: 'address', indexed: true },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      { name: 'tickSpacing', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'hooks', internalType: 'contract IHooks', type: 'address', indexed: false },
    ],
    name: 'Initialize',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'tickLower', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'liquidityDelta', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'ModifyPosition',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'oldOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'protocolFeeController', internalType: 'address', type: 'address', indexed: false }],
    name: 'ProtocolFeeControllerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'protocolFees', internalType: 'uint24', type: 'uint24', indexed: false },
    ],
    name: 'ProtocolFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount0', internalType: 'int128', type: 'int128', indexed: false },
      { name: 'amount1', internalType: 'int128', type: 'int128', indexed: false },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160', indexed: false },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
    ],
    name: 'Swap',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_SWAP_FEE',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_TICK_SPACING',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_TICK_SPACING',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'Currency', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'collectHookFees',
    outputs: [{ name: 'amountCollected', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'Currency', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'collectProtocolFees',
    outputs: [{ name: 'amountCollected', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'locker', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'Currency', type: 'address' },
    ],
    name: 'currencyDelta',
    outputs: [{ name: 'currencyDelta', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'donate',
    outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'extsload',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'startSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'nSlots', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'extsload',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32' },
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
    ],
    name: 'getLiquidity',
    outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
    name: 'getLiquidity',
    outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'getLock',
    outputs: [{ name: 'locker', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'PoolId', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
    ],
    name: 'getPosition',
    outputs: [
      {
        name: 'position',
        internalType: 'struct Position.Info',
        type: 'tuple',
        components: [
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
          { name: 'feeGrowthInside0LastX128', internalType: 'uint256', type: 'uint256' },
          { name: 'feeGrowthInside1LastX128', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
    name: 'getSlot0',
    outputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
      { name: 'tick', internalType: 'int24', type: 'int24' },
      { name: 'protocolFees', internalType: 'uint24', type: 'uint24' },
      { name: 'hookFees', internalType: 'uint24', type: 'uint24' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'hookAddress', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'Currency', type: 'address' },
    ],
    name: 'hookFeesAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'initialize',
    outputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'lock',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lockData',
    outputs: [
      { name: 'length', internalType: 'uint128', type: 'uint128' },
      { name: 'nonzeroDeltaCount', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'currency', internalType: 'Currency', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'modifyPosition',
    outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
    name: 'pools',
    outputs: [
      {
        name: 'slot0',
        internalType: 'struct Pool.Slot0',
        type: 'tuple',
        components: [
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
          { name: 'tick', internalType: 'int24', type: 'int24' },
          { name: 'protocolFees', internalType: 'uint24', type: 'uint24' },
          { name: 'hookFees', internalType: 'uint24', type: 'uint24' },
          { name: 'swapFee', internalType: 'uint24', type: 'uint24' },
        ],
      },
      { name: 'feeGrowthGlobal0X128', internalType: 'uint256', type: 'uint256' },
      { name: 'feeGrowthGlobal1X128', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'protocolFeeController',
    outputs: [{ name: '', internalType: 'contract IProtocolFeeController', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
    name: 'protocolFeesAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
    name: 'reservesOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'setHookFees',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'setOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'controller', internalType: 'contract IProtocolFeeController', type: 'address' }],
    name: 'setProtocolFeeController',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'setProtocolFees',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
    name: 'settle',
    outputs: [{ name: 'paid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'currency', internalType: 'Currency', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'take',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
    ],
    name: 'updateDynamicSwapFee',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolManagerAddress = {
  5: '0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b',
  420: '0xb673AE03413860776497B8C9b3E3F8d4D8745cB3',
  1442: '0xb673AE03413860776497B8C9b3E3F8d4D8745cB3',
  31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  80001: '0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6',
  84531: '0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D',
  421613: '0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e',
  421614: '0xb673AE03413860776497B8C9b3E3F8d4D8745cB3',
  534351: '0xeb4708989b42f0cd327A6Bd8f76a931429137fd7',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolManagerConfig = { address: poolManagerAddress, abi: poolManagerABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolModifyPositionTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolModifyPositionTestABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_manager', internalType: 'contract IPoolManager', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'ERC20TransferFailed' },
  { type: 'error', inputs: [], name: 'NativeTransferFailed' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'rawData', internalType: 'bytes', type: 'bytes' }],
    name: 'lockAcquired',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'manager',
    outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.ModifyPositionParams',
        type: 'tuple',
        components: [
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
        ],
      },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'modifyPosition',
    outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolModifyPositionTestAddress = {
  5: '0x83feDBeD11B3667f40263a88e8435fca51A03F8C',
  420: '0x30654C69B212AD057E817EcA26da6c5edA32E2E7',
  1442: '0x30654C69B212AD057E817EcA26da6c5edA32E2E7',
  31337: '0x3079c0319F8734239eB06765666468F7B76Eb505',
  80001: '0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763',
  84531: '0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710',
  421613: '0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e',
  421614: '0x30654C69B212AD057E817EcA26da6c5edA32E2E7',
  534351: '0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolModifyPositionTestConfig = {
  address: poolModifyPositionTestAddress,
  abi: poolModifyPositionTestABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolSwapTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export const poolSwapTestABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_manager', internalType: 'contract IPoolManager', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'ERC20TransferFailed' },
  { type: 'error', inputs: [], name: 'NativeTransferFailed' },
  { type: 'error', inputs: [], name: 'NoSwapOccurred' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'rawData', internalType: 'bytes', type: 'bytes' }],
    name: 'lockAcquired',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'manager',
    outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'key',
        internalType: 'struct PoolKey',
        type: 'tuple',
        components: [
          { name: 'currency0', internalType: 'Currency', type: 'address' },
          { name: 'currency1', internalType: 'Currency', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'hooks', internalType: 'contract IHooks', type: 'address' },
        ],
      },
      {
        name: 'params',
        internalType: 'struct IPoolManager.SwapParams',
        type: 'tuple',
        components: [
          { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
          { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
      {
        name: 'testSettings',
        internalType: 'struct PoolSwapTest.TestSettings',
        type: 'tuple',
        components: [
          { name: 'withdrawTokens', internalType: 'bool', type: 'bool' },
          { name: 'settleUsingTransfer', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'hookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export const poolSwapTestAddress = {
  5: '0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c',
  420: '0x24C731645ee1e35C3219153d370EBd79784D1E91',
  1442: '0x24C731645ee1e35C3219153d370EBd79784D1E91',
  31337: '0xAf7CCF0Ff7Ef054A1db43330F5431958Ab4A9441',
  80001: '0x6550fa0D92B38F52C37D32d71084A7B270226Ba5',
  84531: '0xe99395035e1a89b6da10a73821Fc60158d5e59E9',
  421613: '0x1689E7B1F10000AE47eBfE339a4f69dECd19F602',
  421614: '0x24C731645ee1e35C3219153d370EBd79784D1E91',
  534351: '0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export const poolSwapTestConfig = { address: poolSwapTestAddress, abi: poolSwapTestABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Position
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const positionABI = [{ type: 'error', inputs: [], name: 'CannotUpdateEmptyPosition' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testErc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'amountToMint', internalType: 'uint256', type: 'uint256' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TickBitmap
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tickBitmapABI = [
  {
    type: 'error',
    inputs: [
      { name: 'tick', internalType: 'int24', type: 'int24' },
      { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
    ],
    name: 'TickMisaligned',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TickMath
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tickMathABI = [
  { type: 'error', inputs: [], name: 'InvalidSqrtRatio' },
  { type: 'error', inputs: [], name: 'InvalidTick' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Token0
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export const token0ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export const token0Address = {
  5: '0x6aed99B81255c1d8D7b222A5F16290741B9DcD39',
  420: '0xeb4708989b42f0cd327A6Bd8f76a931429137fd7',
  1442: '0xeb4708989b42f0cd327A6Bd8f76a931429137fd7',
  31337: '0x2DAFBDF11A8Cf84c372539A38D781D8248399AE3',
  80001: '0x841B5A0b3DBc473c8A057E2391014aa4C4751351',
  84531: '0x73666807a1Ed304C2993C72D2b07434a4a561d26',
  421613: '0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a',
  421614: '0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94',
  534351: '0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export const token0Config = { address: token0Address, abi: token0ABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Token1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export const token1ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export const token1Address = {
  5: '0x77513a96372816fBD0Ab84D897cF261656208B18',
  420: '0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49',
  1442: '0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49',
  31337: '0xa8cEAFb1940244F2f022FF8440a42411B4F07fC4',
  80001: '0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317',
  84531: '0x482Bf489989ea9c40aC978739E11f1699384dd7F',
  421613: '0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6',
  421614: '0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E',
  534351: '0x5C038EE8AB7bD7699037E277874F1c611aD0C28F',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export const token1Config = { address: token1Address, abi: token1ABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__.
 */
export function useBaseTestHooksWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof baseTestHooksABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, TFunctionName, TMode>({ abi: baseTestHooksABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"afterDonate"`.
 */
export function useBaseTestHooksAfterDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, 'afterDonate'>['request']['abi'],
        'afterDonate',
        TMode
      > & { functionName?: 'afterDonate' }
    : UseContractWriteConfig<typeof baseTestHooksABI, 'afterDonate', TMode> & {
        abi?: never
        functionName?: 'afterDonate'
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, 'afterDonate', TMode>({
    abi: baseTestHooksABI,
    functionName: 'afterDonate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"afterInitialize"`.
 */
export function useBaseTestHooksAfterInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, 'afterInitialize'>['request']['abi'],
        'afterInitialize',
        TMode
      > & { functionName?: 'afterInitialize' }
    : UseContractWriteConfig<typeof baseTestHooksABI, 'afterInitialize', TMode> & {
        abi?: never
        functionName?: 'afterInitialize'
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, 'afterInitialize', TMode>({
    abi: baseTestHooksABI,
    functionName: 'afterInitialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"afterModifyPosition"`.
 */
export function useBaseTestHooksAfterModifyPosition<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, 'afterModifyPosition'>['request']['abi'],
        'afterModifyPosition',
        TMode
      > & { functionName?: 'afterModifyPosition' }
    : UseContractWriteConfig<typeof baseTestHooksABI, 'afterModifyPosition', TMode> & {
        abi?: never
        functionName?: 'afterModifyPosition'
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, 'afterModifyPosition', TMode>({
    abi: baseTestHooksABI,
    functionName: 'afterModifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"afterSwap"`.
 */
export function useBaseTestHooksAfterSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, 'afterSwap'>['request']['abi'],
        'afterSwap',
        TMode
      > & { functionName?: 'afterSwap' }
    : UseContractWriteConfig<typeof baseTestHooksABI, 'afterSwap', TMode> & {
        abi?: never
        functionName?: 'afterSwap'
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, 'afterSwap', TMode>({
    abi: baseTestHooksABI,
    functionName: 'afterSwap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"beforeDonate"`.
 */
export function useBaseTestHooksBeforeDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, 'beforeDonate'>['request']['abi'],
        'beforeDonate',
        TMode
      > & { functionName?: 'beforeDonate' }
    : UseContractWriteConfig<typeof baseTestHooksABI, 'beforeDonate', TMode> & {
        abi?: never
        functionName?: 'beforeDonate'
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, 'beforeDonate', TMode>({
    abi: baseTestHooksABI,
    functionName: 'beforeDonate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"beforeInitialize"`.
 */
export function useBaseTestHooksBeforeInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, 'beforeInitialize'>['request']['abi'],
        'beforeInitialize',
        TMode
      > & { functionName?: 'beforeInitialize' }
    : UseContractWriteConfig<typeof baseTestHooksABI, 'beforeInitialize', TMode> & {
        abi?: never
        functionName?: 'beforeInitialize'
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, 'beforeInitialize', TMode>({
    abi: baseTestHooksABI,
    functionName: 'beforeInitialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"beforeModifyPosition"`.
 */
export function useBaseTestHooksBeforeModifyPosition<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, 'beforeModifyPosition'>['request']['abi'],
        'beforeModifyPosition',
        TMode
      > & { functionName?: 'beforeModifyPosition' }
    : UseContractWriteConfig<typeof baseTestHooksABI, 'beforeModifyPosition', TMode> & {
        abi?: never
        functionName?: 'beforeModifyPosition'
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, 'beforeModifyPosition', TMode>({
    abi: baseTestHooksABI,
    functionName: 'beforeModifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"beforeSwap"`.
 */
export function useBaseTestHooksBeforeSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseTestHooksABI, 'beforeSwap'>['request']['abi'],
        'beforeSwap',
        TMode
      > & { functionName?: 'beforeSwap' }
    : UseContractWriteConfig<typeof baseTestHooksABI, 'beforeSwap', TMode> & {
        abi?: never
        functionName?: 'beforeSwap'
      } = {} as any,
) {
  return useContractWrite<typeof baseTestHooksABI, 'beforeSwap', TMode>({
    abi: baseTestHooksABI,
    functionName: 'beforeSwap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__.
 */
export function usePrepareBaseTestHooksWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof baseTestHooksABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: baseTestHooksABI, ...config } as UsePrepareContractWriteConfig<
    typeof baseTestHooksABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"afterDonate"`.
 */
export function usePrepareBaseTestHooksAfterDonate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'afterDonate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseTestHooksABI,
    functionName: 'afterDonate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'afterDonate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"afterInitialize"`.
 */
export function usePrepareBaseTestHooksAfterInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'afterInitialize'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseTestHooksABI,
    functionName: 'afterInitialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'afterInitialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"afterModifyPosition"`.
 */
export function usePrepareBaseTestHooksAfterModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'afterModifyPosition'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseTestHooksABI,
    functionName: 'afterModifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'afterModifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"afterSwap"`.
 */
export function usePrepareBaseTestHooksAfterSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'afterSwap'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseTestHooksABI,
    functionName: 'afterSwap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'afterSwap'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"beforeDonate"`.
 */
export function usePrepareBaseTestHooksBeforeDonate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'beforeDonate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseTestHooksABI,
    functionName: 'beforeDonate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'beforeDonate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"beforeInitialize"`.
 */
export function usePrepareBaseTestHooksBeforeInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'beforeInitialize'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseTestHooksABI,
    functionName: 'beforeInitialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'beforeInitialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"beforeModifyPosition"`.
 */
export function usePrepareBaseTestHooksBeforeModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'beforeModifyPosition'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseTestHooksABI,
    functionName: 'beforeModifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'beforeModifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseTestHooksABI}__ and `functionName` set to `"beforeSwap"`.
 */
export function usePrepareBaseTestHooksBeforeSwap(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'beforeSwap'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseTestHooksABI,
    functionName: 'beforeSwap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseTestHooksABI, 'beforeSwap'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__.
 */
export function useConstantsRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: constantsABI, ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_121_100"`.
 */
export function useConstantsSqrtRatio_121_100<
  TFunctionName extends 'SQRT_RATIO_121_100',
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: 'SQRT_RATIO_121_100', ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_1_1"`.
 */
export function useConstantsSqrtRatio_1_1<
  TFunctionName extends 'SQRT_RATIO_1_1',
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: 'SQRT_RATIO_1_1', ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_1_2"`.
 */
export function useConstantsSqrtRatio_1_2<
  TFunctionName extends 'SQRT_RATIO_1_2',
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: 'SQRT_RATIO_1_2', ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_1_4"`.
 */
export function useConstantsSqrtRatio_1_4<
  TFunctionName extends 'SQRT_RATIO_1_4',
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: 'SQRT_RATIO_1_4', ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_2_1"`.
 */
export function useConstantsSqrtRatio_2_1<
  TFunctionName extends 'SQRT_RATIO_2_1',
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: 'SQRT_RATIO_2_1', ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_4_1"`.
 */
export function useConstantsSqrtRatio_4_1<
  TFunctionName extends 'SQRT_RATIO_4_1',
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: 'SQRT_RATIO_4_1', ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>, 'abi' | 'address'> & {
    chainId?: keyof typeof counterAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterModifyPositionCount"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterAfterModifyPositionCount<
  TFunctionName extends 'afterModifyPositionCount',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterModifyPositionCount',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterSwapCount"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterAfterSwapCount<
  TFunctionName extends 'afterSwapCount',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterSwapCount',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeModifyPositionCount"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterBeforeModifyPositionCount<
  TFunctionName extends 'beforeModifyPositionCount',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeModifyPositionCount',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeSwapCount"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterBeforeSwapCount<
  TFunctionName extends 'beforeSwapCount',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeSwapCount',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"getHooksCalls"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterGetHooksCalls<
  TFunctionName extends 'getHooksCalls',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'getHooksCalls',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"poolManager"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterPoolManager<
  TFunctionName extends 'poolManager',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'poolManager',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof counterABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, TFunctionName, TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterDonate"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterAfterDonate<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, 'afterDonate'>['request']['abi'],
        'afterDonate',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'afterDonate' }
    : UseContractWriteConfig<typeof counterABI, 'afterDonate', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'afterDonate'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'afterDonate', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterDonate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterInitialize"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterAfterInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, 'afterInitialize'>['request']['abi'],
        'afterInitialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'afterInitialize' }
    : UseContractWriteConfig<typeof counterABI, 'afterInitialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'afterInitialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'afterInitialize', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterInitialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterModifyPosition"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterAfterModifyPosition<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, 'afterModifyPosition'>['request']['abi'],
        'afterModifyPosition',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'afterModifyPosition' }
    : UseContractWriteConfig<typeof counterABI, 'afterModifyPosition', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'afterModifyPosition'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'afterModifyPosition', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterModifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterSwap"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterAfterSwap<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, 'afterSwap'>['request']['abi'],
        'afterSwap',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'afterSwap' }
    : UseContractWriteConfig<typeof counterABI, 'afterSwap', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'afterSwap'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'afterSwap', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterSwap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeDonate"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterBeforeDonate<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, 'beforeDonate'>['request']['abi'],
        'beforeDonate',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'beforeDonate' }
    : UseContractWriteConfig<typeof counterABI, 'beforeDonate', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'beforeDonate'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'beforeDonate', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeDonate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeInitialize"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterBeforeInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, 'beforeInitialize'>['request']['abi'],
        'beforeInitialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'beforeInitialize' }
    : UseContractWriteConfig<typeof counterABI, 'beforeInitialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'beforeInitialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'beforeInitialize', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeInitialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeModifyPosition"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterBeforeModifyPosition<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, 'beforeModifyPosition'>['request']['abi'],
        'beforeModifyPosition',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'beforeModifyPosition' }
    : UseContractWriteConfig<typeof counterABI, 'beforeModifyPosition', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'beforeModifyPosition'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'beforeModifyPosition', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeModifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeSwap"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function useCounterBeforeSwap<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, 'beforeSwap'>['request']['abi'],
        'beforeSwap',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'beforeSwap' }
    : UseContractWriteConfig<typeof counterABI, 'beforeSwap', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'beforeSwap'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'beforeSwap', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeSwap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof counterAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterDonate"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterAfterDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, 'afterDonate'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof counterAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterDonate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'afterDonate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterInitialize"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterAfterInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'afterInitialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterInitialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'afterInitialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterModifyPosition"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterAfterModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'afterModifyPosition'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterModifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'afterModifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterSwap"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterAfterSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, 'afterSwap'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof counterAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'afterSwap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'afterSwap'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeDonate"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterBeforeDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, 'beforeDonate'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof counterAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeDonate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'beforeDonate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeInitialize"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterBeforeInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'beforeInitialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeInitialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'beforeInitialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeModifyPosition"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterBeforeModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'beforeModifyPosition'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeModifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'beforeModifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeSwap"`.
 *
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8)
 */
export function usePrepareCounterBeforeSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, 'beforeSwap'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof counterAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'beforeSwap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'beforeSwap'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link currencyLibraryABI}__.
 */
export function useCurrencyLibraryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof currencyLibraryABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof currencyLibraryABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: currencyLibraryABI, ...config } as UseContractReadConfig<
    typeof currencyLibraryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link currencyLibraryABI}__ and `functionName` set to `"NATIVE"`.
 */
export function useCurrencyLibraryNative<
  TFunctionName extends 'NATIVE',
  TSelectData = ReadContractResult<typeof currencyLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof currencyLibraryABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: currencyLibraryABI, functionName: 'NATIVE', ...config } as UseContractReadConfig<
    typeof currencyLibraryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link deployersABI}__.
 */
export function useDeployersWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof deployersABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof deployersABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof deployersABI, TFunctionName, TMode>({ abi: deployersABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link deployersABI}__ and `functionName` set to `"createAndInitPool"`.
 */
export function useDeployersCreateAndInitPool<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof deployersABI, 'createAndInitPool'>['request']['abi'],
        'createAndInitPool',
        TMode
      > & { functionName?: 'createAndInitPool' }
    : UseContractWriteConfig<typeof deployersABI, 'createAndInitPool', TMode> & {
        abi?: never
        functionName?: 'createAndInitPool'
      } = {} as any,
) {
  return useContractWrite<typeof deployersABI, 'createAndInitPool', TMode>({
    abi: deployersABI,
    functionName: 'createAndInitPool',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link deployersABI}__.
 */
export function usePrepareDeployersWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof deployersABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: deployersABI, ...config } as UsePrepareContractWriteConfig<
    typeof deployersABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link deployersABI}__ and `functionName` set to `"createAndInitPool"`.
 */
export function usePrepareDeployersCreateAndInitPool(
  config: Omit<
    UsePrepareContractWriteConfig<typeof deployersABI, 'createAndInitPool'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: deployersABI,
    functionName: 'createAndInitPool',
    ...config,
  } as UsePrepareContractWriteConfig<typeof deployersABI, 'createAndInitPool'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc1155ABI}__.
 */
export function useErc1155Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc1155ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof erc1155ABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: erc1155ABI, ...config } as UseContractReadConfig<
    typeof erc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc1155BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: erc1155ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof erc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"balanceOfBatch"`.
 */
export function useErc1155BalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
  TSelectData = ReadContractResult<typeof erc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: erc1155ABI, functionName: 'balanceOfBatch', ...config } as UseContractReadConfig<
    typeof erc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc1155IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: erc1155ABI, functionName: 'isApprovedForAll', ...config } as UseContractReadConfig<
    typeof erc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc1155SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: erc1155ABI, functionName: 'supportsInterface', ...config } as UseContractReadConfig<
    typeof erc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"uri"`.
 */
export function useErc1155Uri<
  TFunctionName extends 'uri',
  TSelectData = ReadContractResult<typeof erc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: erc1155ABI, functionName: 'uri', ...config } as UseContractReadConfig<
    typeof erc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc1155ABI}__.
 */
export function useErc1155Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc1155ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc1155ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc1155ABI, TFunctionName, TMode>({ abi: erc1155ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function useErc1155SafeBatchTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc1155ABI, 'safeBatchTransferFrom'>['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & { functionName?: 'safeBatchTransferFrom' }
    : UseContractWriteConfig<typeof erc1155ABI, 'safeBatchTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc1155ABI, 'safeBatchTransferFrom', TMode>({
    abi: erc1155ABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc1155SafeTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc1155ABI, 'safeTransferFrom'>['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof erc1155ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc1155ABI, 'safeTransferFrom', TMode>({
    abi: erc1155ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc1155SetApprovalForAll<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc1155ABI, 'setApprovalForAll'>['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof erc1155ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof erc1155ABI, 'setApprovalForAll', TMode>({
    abi: erc1155ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc1155ABI}__.
 */
export function usePrepareErc1155Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc1155ABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc1155ABI, ...config } as UsePrepareContractWriteConfig<
    typeof erc1155ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function usePrepareErc1155SafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc1155ABI, 'safeBatchTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc1155ABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc1155ABI, 'safeBatchTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc1155SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc1155ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc1155ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc1155ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc1155ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc1155SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc1155ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc1155ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc1155ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1155ABI}__.
 */
export function useErc1155Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof erc1155ABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: erc1155ABI, ...config } as UseContractEventConfig<typeof erc1155ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1155ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc1155ApprovalForAllEvent(
  config: Omit<UseContractEventConfig<typeof erc1155ABI, 'ApprovalForAll'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: erc1155ABI, eventName: 'ApprovalForAll', ...config } as UseContractEventConfig<
    typeof erc1155ABI,
    'ApprovalForAll'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1155ABI}__ and `eventName` set to `"TransferBatch"`.
 */
export function useErc1155TransferBatchEvent(
  config: Omit<UseContractEventConfig<typeof erc1155ABI, 'TransferBatch'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: erc1155ABI, eventName: 'TransferBatch', ...config } as UseContractEventConfig<
    typeof erc1155ABI,
    'TransferBatch'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1155ABI}__ and `eventName` set to `"TransferSingle"`.
 */
export function useErc1155TransferSingleEvent(
  config: Omit<UseContractEventConfig<typeof erc1155ABI, 'TransferSingle'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: erc1155ABI, eventName: 'TransferSingle', ...config } as UseContractEventConfig<
    typeof erc1155ABI,
    'TransferSingle'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1155ABI}__ and `eventName` set to `"URI"`.
 */
export function useErc1155UriEvent(
  config: Omit<UseContractEventConfig<typeof erc1155ABI, 'URI'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: erc1155ABI, eventName: 'URI', ...config } as UseContractEventConfig<
    typeof erc1155ABI,
    'URI'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__.
 */
export function useErc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: erc165ABI, ...config } as UseContractReadConfig<
    typeof erc165ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc165ABI, functionName: 'supportsInterface', ...config } as UseContractReadConfig<
    typeof erc165ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"DOMAIN_SEPARATOR"`.
 */
export function useErc20DomainSeparator<
  TFunctionName extends 'DOMAIN_SEPARATOR',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'DOMAIN_SEPARATOR', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'allowance', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'decimals', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'name', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"nonces"`.
 */
export function useErc20Nonces<
  TFunctionName extends 'nonces',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'nonces', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'symbol', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'totalSupply', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({ abi: erc20ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"permit"`.
 */
export function useErc20Permit<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, 'permit'>['request']['abi'],
        'permit',
        TMode
      > & { functionName?: 'permit' }
    : UseContractWriteConfig<typeof erc20ABI, 'permit', TMode> & {
        abi?: never
        functionName?: 'permit'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'permit', TMode>({ abi: erc20ABI, functionName: 'permit', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc20ABI, ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc20ABI, functionName: 'approve', ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    'approve'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"permit"`.
 */
export function usePrepareErc20Permit(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'permit'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc20ABI, functionName: 'permit', ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    'permit'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof erc20ABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, ...config } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof erc20ABI, 'Approval'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, eventName: 'Approval', ...config } as UseContractEventConfig<
    typeof erc20ABI,
    'Approval'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<UseContractEventConfig<typeof erc20ABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, eventName: 'Transfer', ...config } as UseContractEventConfig<
    typeof erc20ABI,
    'Transfer'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feeLibraryABI}__.
 */
export function useFeeLibraryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof feeLibraryABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof feeLibraryABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: feeLibraryABI, ...config } as UseContractReadConfig<
    typeof feeLibraryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feeLibraryABI}__ and `functionName` set to `"DYNAMIC_FEE_FLAG"`.
 */
export function useFeeLibraryDynamicFeeFlag<
  TFunctionName extends 'DYNAMIC_FEE_FLAG',
  TSelectData = ReadContractResult<typeof feeLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof feeLibraryABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: feeLibraryABI, functionName: 'DYNAMIC_FEE_FLAG', ...config } as UseContractReadConfig<
    typeof feeLibraryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feeLibraryABI}__ and `functionName` set to `"HOOK_SWAP_FEE_FLAG"`.
 */
export function useFeeLibraryHookSwapFeeFlag<
  TFunctionName extends 'HOOK_SWAP_FEE_FLAG',
  TSelectData = ReadContractResult<typeof feeLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof feeLibraryABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: feeLibraryABI, functionName: 'HOOK_SWAP_FEE_FLAG', ...config } as UseContractReadConfig<
    typeof feeLibraryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feeLibraryABI}__ and `functionName` set to `"HOOK_WITHDRAW_FEE_FLAG"`.
 */
export function useFeeLibraryHookWithdrawFeeFlag<
  TFunctionName extends 'HOOK_WITHDRAW_FEE_FLAG',
  TSelectData = ReadContractResult<typeof feeLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof feeLibraryABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: feeLibraryABI,
    functionName: 'HOOK_WITHDRAW_FEE_FLAG',
    ...config,
  } as UseContractReadConfig<typeof feeLibraryABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feeLibraryABI}__ and `functionName` set to `"STATIC_FEE_MASK"`.
 */
export function useFeeLibraryStaticFeeMask<
  TFunctionName extends 'STATIC_FEE_MASK',
  TSelectData = ReadContractResult<typeof feeLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof feeLibraryABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: feeLibraryABI, functionName: 'STATIC_FEE_MASK', ...config } as UseContractReadConfig<
    typeof feeLibraryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feesABI}__.
 */
export function useFeesRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof feesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof feesABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: feesABI, ...config } as UseContractReadConfig<
    typeof feesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"MAX_SWAP_FEE"`.
 */
export function useFeesMaxSwapFee<
  TFunctionName extends 'MAX_SWAP_FEE',
  TSelectData = ReadContractResult<typeof feesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof feesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({ abi: feesABI, functionName: 'MAX_SWAP_FEE', ...config } as UseContractReadConfig<
    typeof feesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 */
export function useFeesMinProtocolFeeDenominator<
  TFunctionName extends 'MIN_PROTOCOL_FEE_DENOMINATOR',
  TSelectData = ReadContractResult<typeof feesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof feesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({
    abi: feesABI,
    functionName: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    ...config,
  } as UseContractReadConfig<typeof feesABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"hookFeesAccrued"`.
 */
export function useFeesHookFeesAccrued<
  TFunctionName extends 'hookFeesAccrued',
  TSelectData = ReadContractResult<typeof feesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof feesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({ abi: feesABI, functionName: 'hookFeesAccrued', ...config } as UseContractReadConfig<
    typeof feesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"owner"`.
 */
export function useFeesOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof feesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof feesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({ abi: feesABI, functionName: 'owner', ...config } as UseContractReadConfig<
    typeof feesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"protocolFeeController"`.
 */
export function useFeesProtocolFeeController<
  TFunctionName extends 'protocolFeeController',
  TSelectData = ReadContractResult<typeof feesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof feesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({ abi: feesABI, functionName: 'protocolFeeController', ...config } as UseContractReadConfig<
    typeof feesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 */
export function useFeesProtocolFeesAccrued<
  TFunctionName extends 'protocolFeesAccrued',
  TSelectData = ReadContractResult<typeof feesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof feesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({ abi: feesABI, functionName: 'protocolFeesAccrued', ...config } as UseContractReadConfig<
    typeof feesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link feesABI}__.
 */
export function useFeesWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof feesABI, string>['request']['abi'], TFunctionName, TMode>
    : UseContractWriteConfig<typeof feesABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof feesABI, TFunctionName, TMode>({ abi: feesABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"collectHookFees"`.
 */
export function useFeesCollectHookFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof feesABI, 'collectHookFees'>['request']['abi'],
        'collectHookFees',
        TMode
      > & { functionName?: 'collectHookFees' }
    : UseContractWriteConfig<typeof feesABI, 'collectHookFees', TMode> & {
        abi?: never
        functionName?: 'collectHookFees'
      } = {} as any,
) {
  return useContractWrite<typeof feesABI, 'collectHookFees', TMode>({
    abi: feesABI,
    functionName: 'collectHookFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"collectProtocolFees"`.
 */
export function useFeesCollectProtocolFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof feesABI, 'collectProtocolFees'>['request']['abi'],
        'collectProtocolFees',
        TMode
      > & { functionName?: 'collectProtocolFees' }
    : UseContractWriteConfig<typeof feesABI, 'collectProtocolFees', TMode> & {
        abi?: never
        functionName?: 'collectProtocolFees'
      } = {} as any,
) {
  return useContractWrite<typeof feesABI, 'collectProtocolFees', TMode>({
    abi: feesABI,
    functionName: 'collectProtocolFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"setOwner"`.
 */
export function useFeesSetOwner<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof feesABI, 'setOwner'>['request']['abi'],
        'setOwner',
        TMode
      > & { functionName?: 'setOwner' }
    : UseContractWriteConfig<typeof feesABI, 'setOwner', TMode> & {
        abi?: never
        functionName?: 'setOwner'
      } = {} as any,
) {
  return useContractWrite<typeof feesABI, 'setOwner', TMode>({
    abi: feesABI,
    functionName: 'setOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"setProtocolFeeController"`.
 */
export function useFeesSetProtocolFeeController<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof feesABI, 'setProtocolFeeController'>['request']['abi'],
        'setProtocolFeeController',
        TMode
      > & { functionName?: 'setProtocolFeeController' }
    : UseContractWriteConfig<typeof feesABI, 'setProtocolFeeController', TMode> & {
        abi?: never
        functionName?: 'setProtocolFeeController'
      } = {} as any,
) {
  return useContractWrite<typeof feesABI, 'setProtocolFeeController', TMode>({
    abi: feesABI,
    functionName: 'setProtocolFeeController',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link feesABI}__.
 */
export function usePrepareFeesWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof feesABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: feesABI, ...config } as UsePrepareContractWriteConfig<
    typeof feesABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"collectHookFees"`.
 */
export function usePrepareFeesCollectHookFees(
  config: Omit<UsePrepareContractWriteConfig<typeof feesABI, 'collectHookFees'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: feesABI,
    functionName: 'collectHookFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof feesABI, 'collectHookFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"collectProtocolFees"`.
 */
export function usePrepareFeesCollectProtocolFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof feesABI, 'collectProtocolFees'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: feesABI,
    functionName: 'collectProtocolFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof feesABI, 'collectProtocolFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"setOwner"`.
 */
export function usePrepareFeesSetOwner(
  config: Omit<UsePrepareContractWriteConfig<typeof feesABI, 'setOwner'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({ abi: feesABI, functionName: 'setOwner', ...config } as UsePrepareContractWriteConfig<
    typeof feesABI,
    'setOwner'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link feesABI}__ and `functionName` set to `"setProtocolFeeController"`.
 */
export function usePrepareFeesSetProtocolFeeController(
  config: Omit<
    UsePrepareContractWriteConfig<typeof feesABI, 'setProtocolFeeController'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: feesABI,
    functionName: 'setProtocolFeeController',
    ...config,
  } as UsePrepareContractWriteConfig<typeof feesABI, 'setProtocolFeeController'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link feesABI}__.
 */
export function useFeesEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof feesABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: feesABI, ...config } as UseContractEventConfig<typeof feesABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link feesABI}__ and `eventName` set to `"OwnerChanged"`.
 */
export function useFeesOwnerChangedEvent(
  config: Omit<UseContractEventConfig<typeof feesABI, 'OwnerChanged'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: feesABI, eventName: 'OwnerChanged', ...config } as UseContractEventConfig<
    typeof feesABI,
    'OwnerChanged'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link feesABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 */
export function useFeesProtocolFeeControllerUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof feesABI, 'ProtocolFeeControllerUpdated'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({
    abi: feesABI,
    eventName: 'ProtocolFeeControllerUpdated',
    ...config,
  } as UseContractEventConfig<typeof feesABI, 'ProtocolFeeControllerUpdated'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookMinerABI}__.
 */
export function useHookMinerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof hookMinerABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof hookMinerABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: hookMinerABI, ...config } as UseContractReadConfig<
    typeof hookMinerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookMinerABI}__ and `functionName` set to `"computeAddress"`.
 */
export function useHookMinerComputeAddress<
  TFunctionName extends 'computeAddress',
  TSelectData = ReadContractResult<typeof hookMinerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hookMinerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: hookMinerABI, functionName: 'computeAddress', ...config } as UseContractReadConfig<
    typeof hookMinerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookMinerABI}__ and `functionName` set to `"find"`.
 */
export function useHookMinerFind<
  TFunctionName extends 'find',
  TSelectData = ReadContractResult<typeof hookMinerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hookMinerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: hookMinerABI, functionName: 'find', ...config } as UseContractReadConfig<
    typeof hookMinerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookTestABI}__.
 */
export function useHookTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof hookTestABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof hookTestABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: hookTestABI, ...config } as UseContractReadConfig<
    typeof hookTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookTestABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function useHookTestIsTest<
  TFunctionName extends 'IS_TEST',
  TSelectData = ReadContractResult<typeof hookTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hookTestABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: hookTestABI, functionName: 'IS_TEST', ...config } as UseContractReadConfig<
    typeof hookTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookTestABI}__ and `functionName` set to `"MAX_PRICE_LIMIT"`.
 */
export function useHookTestMaxPriceLimit<
  TFunctionName extends 'MAX_PRICE_LIMIT',
  TSelectData = ReadContractResult<typeof hookTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hookTestABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: hookTestABI, functionName: 'MAX_PRICE_LIMIT', ...config } as UseContractReadConfig<
    typeof hookTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookTestABI}__ and `functionName` set to `"MIN_PRICE_LIMIT"`.
 */
export function useHookTestMinPriceLimit<
  TFunctionName extends 'MIN_PRICE_LIMIT',
  TSelectData = ReadContractResult<typeof hookTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hookTestABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: hookTestABI, functionName: 'MIN_PRICE_LIMIT', ...config } as UseContractReadConfig<
    typeof hookTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link hookTestABI}__.
 */
export function useHookTestWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof hookTestABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof hookTestABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof hookTestABI, TFunctionName, TMode>({ abi: hookTestABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link hookTestABI}__ and `functionName` set to `"failed"`.
 */
export function useHookTestFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof hookTestABI, 'failed'>['request']['abi'],
        'failed',
        TMode
      > & { functionName?: 'failed' }
    : UseContractWriteConfig<typeof hookTestABI, 'failed', TMode> & {
        abi?: never
        functionName?: 'failed'
      } = {} as any,
) {
  return useContractWrite<typeof hookTestABI, 'failed', TMode>({
    abi: hookTestABI,
    functionName: 'failed',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link hookTestABI}__ and `functionName` set to `"initHookTestEnv"`.
 */
export function useHookTestInitHookTestEnv<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof hookTestABI, 'initHookTestEnv'>['request']['abi'],
        'initHookTestEnv',
        TMode
      > & { functionName?: 'initHookTestEnv' }
    : UseContractWriteConfig<typeof hookTestABI, 'initHookTestEnv', TMode> & {
        abi?: never
        functionName?: 'initHookTestEnv'
      } = {} as any,
) {
  return useContractWrite<typeof hookTestABI, 'initHookTestEnv', TMode>({
    abi: hookTestABI,
    functionName: 'initHookTestEnv',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link hookTestABI}__.
 */
export function usePrepareHookTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof hookTestABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: hookTestABI, ...config } as UsePrepareContractWriteConfig<
    typeof hookTestABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link hookTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePrepareHookTestFailed(
  config: Omit<UsePrepareContractWriteConfig<typeof hookTestABI, 'failed'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: hookTestABI,
    functionName: 'failed',
    ...config,
  } as UsePrepareContractWriteConfig<typeof hookTestABI, 'failed'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link hookTestABI}__ and `functionName` set to `"initHookTestEnv"`.
 */
export function usePrepareHookTestInitHookTestEnv(
  config: Omit<
    UsePrepareContractWriteConfig<typeof hookTestABI, 'initHookTestEnv'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: hookTestABI,
    functionName: 'initHookTestEnv',
    ...config,
  } as UsePrepareContractWriteConfig<typeof hookTestABI, 'initHookTestEnv'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__.
 */
export function useHookTestEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof hookTestABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, ...config } as UseContractEventConfig<typeof hookTestABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log"`.
 */
export function useHookTestLogEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_address"`.
 */
export function useHookTestLogAddressEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_address'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_address', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_address'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_array"`.
 */
export function useHookTestLogArrayEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_array'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_array', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_array'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_bytes"`.
 */
export function useHookTestLogBytesEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_bytes'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_bytes', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_bytes'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function useHookTestLogBytes32Event(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_bytes32'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_bytes32', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_bytes32'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_int"`.
 */
export function useHookTestLogIntEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_int'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_int', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_int'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_address"`.
 */
export function useHookTestLogNamedAddressEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_address'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_named_address', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_named_address'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_array"`.
 */
export function useHookTestLogNamedArrayEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_array'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_named_array', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_named_array'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function useHookTestLogNamedBytesEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_bytes'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_named_bytes', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_named_bytes'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function useHookTestLogNamedBytes32Event(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_bytes32'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_named_bytes32', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_named_bytes32'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function useHookTestLogNamedDecimalIntEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_decimal_int'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_named_decimal_int', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_named_decimal_int'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function useHookTestLogNamedDecimalUintEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_decimal_uint'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({
    abi: hookTestABI,
    eventName: 'log_named_decimal_uint',
    ...config,
  } as UseContractEventConfig<typeof hookTestABI, 'log_named_decimal_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_int"`.
 */
export function useHookTestLogNamedIntEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_int'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_named_int', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_named_int'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_string"`.
 */
export function useHookTestLogNamedStringEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_string'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_named_string', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_named_string'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function useHookTestLogNamedUintEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_named_uint'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_named_uint', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_named_uint'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_string"`.
 */
export function useHookTestLogStringEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_string'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_string', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_string'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"log_uint"`.
 */
export function useHookTestLogUintEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'log_uint'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'log_uint', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'log_uint'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hookTestABI}__ and `eventName` set to `"logs"`.
 */
export function useHookTestLogsEvent(
  config: Omit<UseContractEventConfig<typeof hookTestABI, 'logs'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: hookTestABI, eventName: 'logs', ...config } as UseContractEventConfig<
    typeof hookTestABI,
    'logs'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iDynamicFeeManagerABI}__.
 */
export function useIDynamicFeeManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iDynamicFeeManagerABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof iDynamicFeeManagerABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: iDynamicFeeManagerABI, ...config } as UseContractReadConfig<
    typeof iDynamicFeeManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iDynamicFeeManagerABI}__ and `functionName` set to `"getFee"`.
 */
export function useIDynamicFeeManagerGetFee<
  TFunctionName extends 'getFee',
  TSelectData = ReadContractResult<typeof iDynamicFeeManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iDynamicFeeManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iDynamicFeeManagerABI, functionName: 'getFee', ...config } as UseContractReadConfig<
    typeof iDynamicFeeManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155ABI}__.
 */
export function useIerc1155Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc1155ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ierc1155ABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: ierc1155ABI, ...config } as UseContractReadConfig<
    typeof ierc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc1155BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc1155ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof ierc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"balanceOfBatch"`.
 */
export function useIerc1155BalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
  TSelectData = ReadContractResult<typeof ierc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc1155ABI, functionName: 'balanceOfBatch', ...config } as UseContractReadConfig<
    typeof ierc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc1155IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc1155ABI, functionName: 'isApprovedForAll', ...config } as UseContractReadConfig<
    typeof ierc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc1155SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc1155ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc1155ABI, functionName: 'supportsInterface', ...config } as UseContractReadConfig<
    typeof ierc1155ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155ABI}__.
 */
export function useIerc1155Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc1155ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155ABI, TFunctionName, TMode>({ abi: ierc1155ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function useIerc1155SafeBatchTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155ABI, 'safeBatchTransferFrom'>['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & { functionName?: 'safeBatchTransferFrom' }
    : UseContractWriteConfig<typeof ierc1155ABI, 'safeBatchTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155ABI, 'safeBatchTransferFrom', TMode>({
    abi: ierc1155ABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc1155SafeTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155ABI, 'safeTransferFrom'>['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof ierc1155ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155ABI, 'safeTransferFrom', TMode>({
    abi: ierc1155ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc1155SetApprovalForAll<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155ABI, 'setApprovalForAll'>['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof ierc1155ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155ABI, 'setApprovalForAll', TMode>({
    abi: ierc1155ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155ABI}__.
 */
export function usePrepareIerc1155Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc1155ABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: ierc1155ABI, ...config } as UsePrepareContractWriteConfig<
    typeof ierc1155ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function usePrepareIerc1155SafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc1155ABI, 'safeBatchTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc1155ABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc1155ABI, 'safeBatchTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc1155SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc1155ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc1155ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc1155ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc1155SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc1155ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc1155ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc1155ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155ABI}__.
 */
export function useIerc1155Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof ierc1155ABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: ierc1155ABI, ...config } as UseContractEventConfig<typeof ierc1155ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc1155ApprovalForAllEvent(
  config: Omit<UseContractEventConfig<typeof ierc1155ABI, 'ApprovalForAll'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: ierc1155ABI, eventName: 'ApprovalForAll', ...config } as UseContractEventConfig<
    typeof ierc1155ABI,
    'ApprovalForAll'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155ABI}__ and `eventName` set to `"TransferBatch"`.
 */
export function useIerc1155TransferBatchEvent(
  config: Omit<UseContractEventConfig<typeof ierc1155ABI, 'TransferBatch'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: ierc1155ABI, eventName: 'TransferBatch', ...config } as UseContractEventConfig<
    typeof ierc1155ABI,
    'TransferBatch'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155ABI}__ and `eventName` set to `"TransferSingle"`.
 */
export function useIerc1155TransferSingleEvent(
  config: Omit<UseContractEventConfig<typeof ierc1155ABI, 'TransferSingle'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: ierc1155ABI, eventName: 'TransferSingle', ...config } as UseContractEventConfig<
    typeof ierc1155ABI,
    'TransferSingle'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155ABI}__ and `eventName` set to `"URI"`.
 */
export function useIerc1155UriEvent(
  config: Omit<UseContractEventConfig<typeof ierc1155ABI, 'URI'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: ierc1155ABI, eventName: 'URI', ...config } as UseContractEventConfig<
    typeof ierc1155ABI,
    'URI'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155MetadataUriABI}__.
 */
export function useIerc1155MetadataUriRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc1155MetadataUriABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: ierc1155MetadataUriABI, ...config } as UseContractReadConfig<
    typeof ierc1155MetadataUriABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc1155MetadataUriBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc1155MetadataUriABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc1155MetadataUriABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof ierc1155MetadataUriABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"balanceOfBatch"`.
 */
export function useIerc1155MetadataUriBalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
  TSelectData = ReadContractResult<typeof ierc1155MetadataUriABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc1155MetadataUriABI,
    functionName: 'balanceOfBatch',
    ...config,
  } as UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc1155MetadataUriIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc1155MetadataUriABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc1155MetadataUriABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc1155MetadataUriSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc1155MetadataUriABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc1155MetadataUriABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"uri"`.
 */
export function useIerc1155MetadataUriUri<
  TFunctionName extends 'uri',
  TSelectData = ReadContractResult<typeof ierc1155MetadataUriABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155MetadataUriABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc1155MetadataUriABI, functionName: 'uri', ...config } as UseContractReadConfig<
    typeof ierc1155MetadataUriABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155MetadataUriABI}__.
 */
export function useIerc1155MetadataUriWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155MetadataUriABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc1155MetadataUriABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155MetadataUriABI, TFunctionName, TMode>({
    abi: ierc1155MetadataUriABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function useIerc1155MetadataUriSafeBatchTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155MetadataUriABI, 'safeBatchTransferFrom'>['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & { functionName?: 'safeBatchTransferFrom' }
    : UseContractWriteConfig<typeof ierc1155MetadataUriABI, 'safeBatchTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155MetadataUriABI, 'safeBatchTransferFrom', TMode>({
    abi: ierc1155MetadataUriABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc1155MetadataUriSafeTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155MetadataUriABI, 'safeTransferFrom'>['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof ierc1155MetadataUriABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155MetadataUriABI, 'safeTransferFrom', TMode>({
    abi: ierc1155MetadataUriABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc1155MetadataUriSetApprovalForAll<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155MetadataUriABI, 'setApprovalForAll'>['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof ierc1155MetadataUriABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155MetadataUriABI, 'setApprovalForAll', TMode>({
    abi: ierc1155MetadataUriABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155MetadataUriABI}__.
 */
export function usePrepareIerc1155MetadataUriWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc1155MetadataUriABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: ierc1155MetadataUriABI, ...config } as UsePrepareContractWriteConfig<
    typeof ierc1155MetadataUriABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function usePrepareIerc1155MetadataUriSafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc1155MetadataUriABI, 'safeBatchTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc1155MetadataUriABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc1155MetadataUriABI, 'safeBatchTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc1155MetadataUriSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc1155MetadataUriABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc1155MetadataUriABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc1155MetadataUriABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc1155MetadataUriSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc1155MetadataUriABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc1155MetadataUriABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc1155MetadataUriABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriABI}__.
 */
export function useIerc1155MetadataUriEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof ierc1155MetadataUriABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: ierc1155MetadataUriABI, ...config } as UseContractEventConfig<
    typeof ierc1155MetadataUriABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc1155MetadataUriApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc1155MetadataUriABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc1155MetadataUriABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc1155MetadataUriABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `eventName` set to `"TransferBatch"`.
 */
export function useIerc1155MetadataUriTransferBatchEvent(
  config: Omit<UseContractEventConfig<typeof ierc1155MetadataUriABI, 'TransferBatch'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({
    abi: ierc1155MetadataUriABI,
    eventName: 'TransferBatch',
    ...config,
  } as UseContractEventConfig<typeof ierc1155MetadataUriABI, 'TransferBatch'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `eventName` set to `"TransferSingle"`.
 */
export function useIerc1155MetadataUriTransferSingleEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc1155MetadataUriABI, 'TransferSingle'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc1155MetadataUriABI,
    eventName: 'TransferSingle',
    ...config,
  } as UseContractEventConfig<typeof ierc1155MetadataUriABI, 'TransferSingle'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriABI}__ and `eventName` set to `"URI"`.
 */
export function useIerc1155MetadataUriUriEvent(
  config: Omit<UseContractEventConfig<typeof ierc1155MetadataUriABI, 'URI'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: ierc1155MetadataUriABI, eventName: 'URI', ...config } as UseContractEventConfig<
    typeof ierc1155MetadataUriABI,
    'URI'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155ReceiverABI}__.
 */
export function useIerc1155ReceiverRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc1155ReceiverABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ierc1155ReceiverABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: ierc1155ReceiverABI, ...config } as UseContractReadConfig<
    typeof ierc1155ReceiverABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1155ReceiverABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc1155ReceiverSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc1155ReceiverABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc1155ReceiverABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc1155ReceiverABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc1155ReceiverABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155ReceiverABI}__.
 */
export function useIerc1155ReceiverWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155ReceiverABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc1155ReceiverABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155ReceiverABI, TFunctionName, TMode>({
    abi: ierc1155ReceiverABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155ReceiverABI}__ and `functionName` set to `"onERC1155BatchReceived"`.
 */
export function useIerc1155ReceiverOnErc1155BatchReceived<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155ReceiverABI, 'onERC1155BatchReceived'>['request']['abi'],
        'onERC1155BatchReceived',
        TMode
      > & { functionName?: 'onERC1155BatchReceived' }
    : UseContractWriteConfig<typeof ierc1155ReceiverABI, 'onERC1155BatchReceived', TMode> & {
        abi?: never
        functionName?: 'onERC1155BatchReceived'
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155ReceiverABI, 'onERC1155BatchReceived', TMode>({
    abi: ierc1155ReceiverABI,
    functionName: 'onERC1155BatchReceived',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc1155ReceiverABI}__ and `functionName` set to `"onERC1155Received"`.
 */
export function useIerc1155ReceiverOnErc1155Received<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc1155ReceiverABI, 'onERC1155Received'>['request']['abi'],
        'onERC1155Received',
        TMode
      > & { functionName?: 'onERC1155Received' }
    : UseContractWriteConfig<typeof ierc1155ReceiverABI, 'onERC1155Received', TMode> & {
        abi?: never
        functionName?: 'onERC1155Received'
      } = {} as any,
) {
  return useContractWrite<typeof ierc1155ReceiverABI, 'onERC1155Received', TMode>({
    abi: ierc1155ReceiverABI,
    functionName: 'onERC1155Received',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155ReceiverABI}__.
 */
export function usePrepareIerc1155ReceiverWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc1155ReceiverABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: ierc1155ReceiverABI, ...config } as UsePrepareContractWriteConfig<
    typeof ierc1155ReceiverABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155ReceiverABI}__ and `functionName` set to `"onERC1155BatchReceived"`.
 */
export function usePrepareIerc1155ReceiverOnErc1155BatchReceived(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc1155ReceiverABI, 'onERC1155BatchReceived'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc1155ReceiverABI,
    functionName: 'onERC1155BatchReceived',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc1155ReceiverABI, 'onERC1155BatchReceived'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc1155ReceiverABI}__ and `functionName` set to `"onERC1155Received"`.
 */
export function usePrepareIerc1155ReceiverOnErc1155Received(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc1155ReceiverABI, 'onERC1155Received'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc1155ReceiverABI,
    functionName: 'onERC1155Received',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc1155ReceiverABI, 'onERC1155Received'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__.
 */
export function useIerc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: ierc165ABI, ...config } as UseContractReadConfig<
    typeof ierc165ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc165ABI, functionName: 'supportsInterface', ...config } as UseContractReadConfig<
    typeof ierc165ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MinimalABI}__.
 */
export function useIerc20MinimalRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc20MinimalABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ierc20MinimalABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: ierc20MinimalABI, ...config } as UseContractReadConfig<
    typeof ierc20MinimalABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20MinimalAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof ierc20MinimalABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MinimalABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc20MinimalABI, functionName: 'allowance', ...config } as UseContractReadConfig<
    typeof ierc20MinimalABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20MinimalBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc20MinimalABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MinimalABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: ierc20MinimalABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof ierc20MinimalABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__.
 */
export function useIerc20MinimalWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20MinimalABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc20MinimalABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MinimalABI, TFunctionName, TMode>({ abi: ierc20MinimalABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20MinimalApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20MinimalABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc20MinimalABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MinimalABI, 'approve', TMode>({
    abi: ierc20MinimalABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20MinimalTransfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20MinimalABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof ierc20MinimalABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MinimalABI, 'transfer', TMode>({
    abi: ierc20MinimalABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20MinimalTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20MinimalABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc20MinimalABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MinimalABI, 'transferFrom', TMode>({
    abi: ierc20MinimalABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__.
 */
export function usePrepareIerc20MinimalWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc20MinimalABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: ierc20MinimalABI, ...config } as UsePrepareContractWriteConfig<
    typeof ierc20MinimalABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20MinimalApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc20MinimalABI, 'approve'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MinimalABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MinimalABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20MinimalTransfer(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc20MinimalABI, 'transfer'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MinimalABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MinimalABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20MinimalTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MinimalABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MinimalABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MinimalABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MinimalABI}__.
 */
export function useIerc20MinimalEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof ierc20MinimalABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: ierc20MinimalABI, ...config } as UseContractEventConfig<
    typeof ierc20MinimalABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MinimalABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20MinimalApprovalEvent(
  config: Omit<UseContractEventConfig<typeof ierc20MinimalABI, 'Approval'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: ierc20MinimalABI, eventName: 'Approval', ...config } as UseContractEventConfig<
    typeof ierc20MinimalABI,
    'Approval'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MinimalABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20MinimalTransferEvent(
  config: Omit<UseContractEventConfig<typeof ierc20MinimalABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: ierc20MinimalABI, eventName: 'Transfer', ...config } as UseContractEventConfig<
    typeof ierc20MinimalABI,
    'Transfer'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iFeesABI}__.
 */
export function useIFeesRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iFeesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof iFeesABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: iFeesABI, ...config } as UseContractReadConfig<
    typeof iFeesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iFeesABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 */
export function useIFeesMinProtocolFeeDenominator<
  TFunctionName extends 'MIN_PROTOCOL_FEE_DENOMINATOR',
  TSelectData = ReadContractResult<typeof iFeesABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof iFeesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({
    abi: iFeesABI,
    functionName: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    ...config,
  } as UseContractReadConfig<typeof iFeesABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iFeesABI}__ and `functionName` set to `"hookFeesAccrued"`.
 */
export function useIFeesHookFeesAccrued<
  TFunctionName extends 'hookFeesAccrued',
  TSelectData = ReadContractResult<typeof iFeesABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof iFeesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: iFeesABI, functionName: 'hookFeesAccrued', ...config } as UseContractReadConfig<
    typeof iFeesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iFeesABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 */
export function useIFeesProtocolFeesAccrued<
  TFunctionName extends 'protocolFeesAccrued',
  TSelectData = ReadContractResult<typeof iFeesABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof iFeesABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: iFeesABI, functionName: 'protocolFeesAccrued', ...config } as UseContractReadConfig<
    typeof iFeesABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iFeesABI}__.
 */
export function useIFeesEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof iFeesABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: iFeesABI, ...config } as UseContractEventConfig<typeof iFeesABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iFeesABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 */
export function useIFeesProtocolFeeControllerUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof iFeesABI, 'ProtocolFeeControllerUpdated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iFeesABI,
    eventName: 'ProtocolFeeControllerUpdated',
    ...config,
  } as UseContractEventConfig<typeof iFeesABI, 'ProtocolFeeControllerUpdated'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iHookFeeManagerABI}__.
 */
export function useIHookFeeManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iHookFeeManagerABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof iHookFeeManagerABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: iHookFeeManagerABI, ...config } as UseContractReadConfig<
    typeof iHookFeeManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iHookFeeManagerABI}__ and `functionName` set to `"getHookFees"`.
 */
export function useIHookFeeManagerGetHookFees<
  TFunctionName extends 'getHookFees',
  TSelectData = ReadContractResult<typeof iHookFeeManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iHookFeeManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iHookFeeManagerABI, functionName: 'getHookFees', ...config } as UseContractReadConfig<
    typeof iHookFeeManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__.
 */
export function useIHooksWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iHooksABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, TFunctionName, TMode>({ abi: iHooksABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterDonate"`.
 */
export function useIHooksAfterDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, 'afterDonate'>['request']['abi'],
        'afterDonate',
        TMode
      > & { functionName?: 'afterDonate' }
    : UseContractWriteConfig<typeof iHooksABI, 'afterDonate', TMode> & {
        abi?: never
        functionName?: 'afterDonate'
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, 'afterDonate', TMode>({
    abi: iHooksABI,
    functionName: 'afterDonate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterInitialize"`.
 */
export function useIHooksAfterInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, 'afterInitialize'>['request']['abi'],
        'afterInitialize',
        TMode
      > & { functionName?: 'afterInitialize' }
    : UseContractWriteConfig<typeof iHooksABI, 'afterInitialize', TMode> & {
        abi?: never
        functionName?: 'afterInitialize'
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, 'afterInitialize', TMode>({
    abi: iHooksABI,
    functionName: 'afterInitialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterModifyPosition"`.
 */
export function useIHooksAfterModifyPosition<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, 'afterModifyPosition'>['request']['abi'],
        'afterModifyPosition',
        TMode
      > & { functionName?: 'afterModifyPosition' }
    : UseContractWriteConfig<typeof iHooksABI, 'afterModifyPosition', TMode> & {
        abi?: never
        functionName?: 'afterModifyPosition'
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, 'afterModifyPosition', TMode>({
    abi: iHooksABI,
    functionName: 'afterModifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterSwap"`.
 */
export function useIHooksAfterSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, 'afterSwap'>['request']['abi'],
        'afterSwap',
        TMode
      > & { functionName?: 'afterSwap' }
    : UseContractWriteConfig<typeof iHooksABI, 'afterSwap', TMode> & {
        abi?: never
        functionName?: 'afterSwap'
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, 'afterSwap', TMode>({
    abi: iHooksABI,
    functionName: 'afterSwap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeDonate"`.
 */
export function useIHooksBeforeDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, 'beforeDonate'>['request']['abi'],
        'beforeDonate',
        TMode
      > & { functionName?: 'beforeDonate' }
    : UseContractWriteConfig<typeof iHooksABI, 'beforeDonate', TMode> & {
        abi?: never
        functionName?: 'beforeDonate'
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, 'beforeDonate', TMode>({
    abi: iHooksABI,
    functionName: 'beforeDonate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeInitialize"`.
 */
export function useIHooksBeforeInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, 'beforeInitialize'>['request']['abi'],
        'beforeInitialize',
        TMode
      > & { functionName?: 'beforeInitialize' }
    : UseContractWriteConfig<typeof iHooksABI, 'beforeInitialize', TMode> & {
        abi?: never
        functionName?: 'beforeInitialize'
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, 'beforeInitialize', TMode>({
    abi: iHooksABI,
    functionName: 'beforeInitialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeModifyPosition"`.
 */
export function useIHooksBeforeModifyPosition<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, 'beforeModifyPosition'>['request']['abi'],
        'beforeModifyPosition',
        TMode
      > & { functionName?: 'beforeModifyPosition' }
    : UseContractWriteConfig<typeof iHooksABI, 'beforeModifyPosition', TMode> & {
        abi?: never
        functionName?: 'beforeModifyPosition'
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, 'beforeModifyPosition', TMode>({
    abi: iHooksABI,
    functionName: 'beforeModifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeSwap"`.
 */
export function useIHooksBeforeSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, 'beforeSwap'>['request']['abi'],
        'beforeSwap',
        TMode
      > & { functionName?: 'beforeSwap' }
    : UseContractWriteConfig<typeof iHooksABI, 'beforeSwap', TMode> & {
        abi?: never
        functionName?: 'beforeSwap'
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, 'beforeSwap', TMode>({
    abi: iHooksABI,
    functionName: 'beforeSwap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__.
 */
export function usePrepareIHooksWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: iHooksABI, ...config } as UsePrepareContractWriteConfig<
    typeof iHooksABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterDonate"`.
 */
export function usePrepareIHooksAfterDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, 'afterDonate'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: 'afterDonate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, 'afterDonate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterInitialize"`.
 */
export function usePrepareIHooksAfterInitialize(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, 'afterInitialize'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: 'afterInitialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, 'afterInitialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterModifyPosition"`.
 */
export function usePrepareIHooksAfterModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iHooksABI, 'afterModifyPosition'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: 'afterModifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, 'afterModifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterSwap"`.
 */
export function usePrepareIHooksAfterSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, 'afterSwap'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: 'afterSwap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, 'afterSwap'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeDonate"`.
 */
export function usePrepareIHooksBeforeDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, 'beforeDonate'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: 'beforeDonate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, 'beforeDonate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeInitialize"`.
 */
export function usePrepareIHooksBeforeInitialize(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, 'beforeInitialize'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: 'beforeInitialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, 'beforeInitialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeModifyPosition"`.
 */
export function usePrepareIHooksBeforeModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iHooksABI, 'beforeModifyPosition'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: 'beforeModifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, 'beforeModifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeSwap"`.
 */
export function usePrepareIHooksBeforeSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, 'beforeSwap'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: 'beforeSwap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, 'beforeSwap'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iLockCallbackABI}__.
 */
export function useILockCallbackWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iLockCallbackABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iLockCallbackABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iLockCallbackABI, TFunctionName, TMode>({ abi: iLockCallbackABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iLockCallbackABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function useILockCallbackLockAcquired<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iLockCallbackABI, 'lockAcquired'>['request']['abi'],
        'lockAcquired',
        TMode
      > & { functionName?: 'lockAcquired' }
    : UseContractWriteConfig<typeof iLockCallbackABI, 'lockAcquired', TMode> & {
        abi?: never
        functionName?: 'lockAcquired'
      } = {} as any,
) {
  return useContractWrite<typeof iLockCallbackABI, 'lockAcquired', TMode>({
    abi: iLockCallbackABI,
    functionName: 'lockAcquired',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iLockCallbackABI}__.
 */
export function usePrepareILockCallbackWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof iLockCallbackABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: iLockCallbackABI, ...config } as UsePrepareContractWriteConfig<
    typeof iLockCallbackABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iLockCallbackABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePrepareILockCallbackLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iLockCallbackABI, 'lockAcquired'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iLockCallbackABI,
    functionName: 'lockAcquired',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iLockCallbackABI, 'lockAcquired'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__.
 */
export function useIPoolManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: iPoolManagerABI, ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"MAX_TICK_SPACING"`.
 */
export function useIPoolManagerMaxTickSpacing<
  TFunctionName extends 'MAX_TICK_SPACING',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'MAX_TICK_SPACING', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 */
export function useIPoolManagerMinProtocolFeeDenominator<
  TFunctionName extends 'MIN_PROTOCOL_FEE_DENOMINATOR',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iPoolManagerABI,
    functionName: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    ...config,
  } as UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"MIN_TICK_SPACING"`.
 */
export function useIPoolManagerMinTickSpacing<
  TFunctionName extends 'MIN_TICK_SPACING',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'MIN_TICK_SPACING', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIPoolManagerBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"balanceOfBatch"`.
 */
export function useIPoolManagerBalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'balanceOfBatch', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"currencyDelta"`.
 */
export function useIPoolManagerCurrencyDelta<
  TFunctionName extends 'currencyDelta',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'currencyDelta', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"extsload"`.
 */
export function useIPoolManagerExtsload<
  TFunctionName extends 'extsload',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'extsload', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getLiquidity"`.
 */
export function useIPoolManagerGetLiquidity<
  TFunctionName extends 'getLiquidity',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'getLiquidity', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getLock"`.
 */
export function useIPoolManagerGetLock<
  TFunctionName extends 'getLock',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'getLock', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getPosition"`.
 */
export function useIPoolManagerGetPosition<
  TFunctionName extends 'getPosition',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'getPosition', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getSlot0"`.
 */
export function useIPoolManagerGetSlot0<
  TFunctionName extends 'getSlot0',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'getSlot0', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"hookFeesAccrued"`.
 */
export function useIPoolManagerHookFeesAccrued<
  TFunctionName extends 'hookFeesAccrued',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'hookFeesAccrued', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIPoolManagerIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'isApprovedForAll', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"lockData"`.
 */
export function useIPoolManagerLockData<
  TFunctionName extends 'lockData',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'lockData', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 */
export function useIPoolManagerProtocolFeesAccrued<
  TFunctionName extends 'protocolFeesAccrued',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iPoolManagerABI,
    functionName: 'protocolFeesAccrued',
    ...config,
  } as UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"reservesOf"`.
 */
export function useIPoolManagerReservesOf<
  TFunctionName extends 'reservesOf',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: 'reservesOf', ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIPoolManagerSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iPoolManagerABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__.
 */
export function useIPoolManagerWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iPoolManagerABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, TFunctionName, TMode>({ abi: iPoolManagerABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"donate"`.
 */
export function useIPoolManagerDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'donate'>['request']['abi'],
        'donate',
        TMode
      > & { functionName?: 'donate' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'donate', TMode> & {
        abi?: never
        functionName?: 'donate'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'donate', TMode>({
    abi: iPoolManagerABI,
    functionName: 'donate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"initialize"`.
 */
export function useIPoolManagerInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'initialize'>['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'initialize', TMode> & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'initialize', TMode>({
    abi: iPoolManagerABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"lock"`.
 */
export function useIPoolManagerLock<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'lock'>['request']['abi'],
        'lock',
        TMode
      > & { functionName?: 'lock' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'lock', TMode> & {
        abi?: never
        functionName?: 'lock'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'lock', TMode>({
    abi: iPoolManagerABI,
    functionName: 'lock',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"mint"`.
 */
export function useIPoolManagerMint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'mint', TMode>({
    abi: iPoolManagerABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"modifyPosition"`.
 */
export function useIPoolManagerModifyPosition<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'modifyPosition'>['request']['abi'],
        'modifyPosition',
        TMode
      > & { functionName?: 'modifyPosition' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'modifyPosition', TMode> & {
        abi?: never
        functionName?: 'modifyPosition'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'modifyPosition', TMode>({
    abi: iPoolManagerABI,
    functionName: 'modifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function useIPoolManagerSafeBatchTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'safeBatchTransferFrom'>['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & { functionName?: 'safeBatchTransferFrom' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'safeBatchTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'safeBatchTransferFrom', TMode>({
    abi: iPoolManagerABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIPoolManagerSafeTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'safeTransferFrom'>['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'safeTransferFrom', TMode>({
    abi: iPoolManagerABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIPoolManagerSetApprovalForAll<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'setApprovalForAll'>['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'setApprovalForAll', TMode>({
    abi: iPoolManagerABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setHookFees"`.
 */
export function useIPoolManagerSetHookFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'setHookFees'>['request']['abi'],
        'setHookFees',
        TMode
      > & { functionName?: 'setHookFees' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'setHookFees', TMode> & {
        abi?: never
        functionName?: 'setHookFees'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'setHookFees', TMode>({
    abi: iPoolManagerABI,
    functionName: 'setHookFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setProtocolFees"`.
 */
export function useIPoolManagerSetProtocolFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'setProtocolFees'>['request']['abi'],
        'setProtocolFees',
        TMode
      > & { functionName?: 'setProtocolFees' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'setProtocolFees', TMode> & {
        abi?: never
        functionName?: 'setProtocolFees'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'setProtocolFees', TMode>({
    abi: iPoolManagerABI,
    functionName: 'setProtocolFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"settle"`.
 */
export function useIPoolManagerSettle<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'settle'>['request']['abi'],
        'settle',
        TMode
      > & { functionName?: 'settle' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'settle', TMode> & {
        abi?: never
        functionName?: 'settle'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'settle', TMode>({
    abi: iPoolManagerABI,
    functionName: 'settle',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"swap"`.
 */
export function useIPoolManagerSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'swap'>['request']['abi'],
        'swap',
        TMode
      > & { functionName?: 'swap' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'swap', TMode> & {
        abi?: never
        functionName?: 'swap'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'swap', TMode>({
    abi: iPoolManagerABI,
    functionName: 'swap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"take"`.
 */
export function useIPoolManagerTake<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'take'>['request']['abi'],
        'take',
        TMode
      > & { functionName?: 'take' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'take', TMode> & {
        abi?: never
        functionName?: 'take'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'take', TMode>({
    abi: iPoolManagerABI,
    functionName: 'take',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"updateDynamicSwapFee"`.
 */
export function useIPoolManagerUpdateDynamicSwapFee<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, 'updateDynamicSwapFee'>['request']['abi'],
        'updateDynamicSwapFee',
        TMode
      > & { functionName?: 'updateDynamicSwapFee' }
    : UseContractWriteConfig<typeof iPoolManagerABI, 'updateDynamicSwapFee', TMode> & {
        abi?: never
        functionName?: 'updateDynamicSwapFee'
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, 'updateDynamicSwapFee', TMode>({
    abi: iPoolManagerABI,
    functionName: 'updateDynamicSwapFee',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__.
 */
export function usePrepareIPoolManagerWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: iPoolManagerABI, ...config } as UsePrepareContractWriteConfig<
    typeof iPoolManagerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"donate"`.
 */
export function usePrepareIPoolManagerDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'donate'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'donate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'donate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareIPoolManagerInitialize(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'initialize'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"lock"`.
 */
export function usePrepareIPoolManagerLock(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'lock'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'lock',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'lock'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareIPoolManagerMint(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'mint'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"modifyPosition"`.
 */
export function usePrepareIPoolManagerModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'modifyPosition'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'modifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'modifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function usePrepareIPoolManagerSafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'safeBatchTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'safeBatchTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIPoolManagerSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIPoolManagerSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setHookFees"`.
 */
export function usePrepareIPoolManagerSetHookFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'setHookFees'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'setHookFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'setHookFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setProtocolFees"`.
 */
export function usePrepareIPoolManagerSetProtocolFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'setProtocolFees'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'setProtocolFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'setProtocolFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"settle"`.
 */
export function usePrepareIPoolManagerSettle(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'settle'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'settle',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'settle'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"swap"`.
 */
export function usePrepareIPoolManagerSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'swap'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'swap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'swap'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"take"`.
 */
export function usePrepareIPoolManagerTake(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'take'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'take',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'take'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"updateDynamicSwapFee"`.
 */
export function usePrepareIPoolManagerUpdateDynamicSwapFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'updateDynamicSwapFee'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: 'updateDynamicSwapFee',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, 'updateDynamicSwapFee'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__.
 */
export function useIPoolManagerEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIPoolManagerApprovalForAllEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'ApprovalForAll'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: 'ApprovalForAll', ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    'ApprovalForAll'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"DynamicSwapFeeUpdated"`.
 */
export function useIPoolManagerDynamicSwapFeeUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof iPoolManagerABI, 'DynamicSwapFeeUpdated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iPoolManagerABI,
    eventName: 'DynamicSwapFeeUpdated',
    ...config,
  } as UseContractEventConfig<typeof iPoolManagerABI, 'DynamicSwapFeeUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"HookFeeUpdated"`.
 */
export function useIPoolManagerHookFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'HookFeeUpdated'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: 'HookFeeUpdated', ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    'HookFeeUpdated'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"Initialize"`.
 */
export function useIPoolManagerInitializeEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'Initialize'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: 'Initialize', ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    'Initialize'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"ModifyPosition"`.
 */
export function useIPoolManagerModifyPositionEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'ModifyPosition'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: 'ModifyPosition', ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    'ModifyPosition'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 */
export function useIPoolManagerProtocolFeeControllerUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof iPoolManagerABI, 'ProtocolFeeControllerUpdated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iPoolManagerABI,
    eventName: 'ProtocolFeeControllerUpdated',
    ...config,
  } as UseContractEventConfig<typeof iPoolManagerABI, 'ProtocolFeeControllerUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"ProtocolFeeUpdated"`.
 */
export function useIPoolManagerProtocolFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'ProtocolFeeUpdated'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({
    abi: iPoolManagerABI,
    eventName: 'ProtocolFeeUpdated',
    ...config,
  } as UseContractEventConfig<typeof iPoolManagerABI, 'ProtocolFeeUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"Swap"`.
 */
export function useIPoolManagerSwapEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'Swap'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: 'Swap', ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    'Swap'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"TransferBatch"`.
 */
export function useIPoolManagerTransferBatchEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'TransferBatch'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: 'TransferBatch', ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    'TransferBatch'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"TransferSingle"`.
 */
export function useIPoolManagerTransferSingleEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'TransferSingle'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: 'TransferSingle', ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    'TransferSingle'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"URI"`.
 */
export function useIPoolManagerUriEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, 'URI'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: 'URI', ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    'URI'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProtocolFeeControllerABI}__.
 */
export function useIProtocolFeeControllerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iProtocolFeeControllerABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof iProtocolFeeControllerABI, TFunctionName, TSelectData>, 'abi'> = {} as any,
) {
  return useContractRead({ abi: iProtocolFeeControllerABI, ...config } as UseContractReadConfig<
    typeof iProtocolFeeControllerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProtocolFeeControllerABI}__ and `functionName` set to `"protocolFeesForPool"`.
 */
export function useIProtocolFeeControllerProtocolFeesForPool<
  TFunctionName extends 'protocolFeesForPool',
  TSelectData = ReadContractResult<typeof iProtocolFeeControllerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iProtocolFeeControllerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iProtocolFeeControllerABI,
    functionName: 'protocolFeesForPool',
    ...config,
  } as UseContractReadConfig<typeof iProtocolFeeControllerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: mockErc20ABI, ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"DOMAIN_SEPARATOR"`.
 */
export function useMockErc20DomainSeparator<
  TFunctionName extends 'DOMAIN_SEPARATOR',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: 'DOMAIN_SEPARATOR', ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useMockErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: 'allowance', ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useMockErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useMockErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: 'decimals', ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"name"`.
 */
export function useMockErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: 'name', ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"nonces"`.
 */
export function useMockErc20Nonces<
  TFunctionName extends 'nonces',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: 'nonces', ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useMockErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: 'symbol', ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useMockErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: 'totalSupply', ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof mockErc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, TFunctionName, TMode>({ abi: mockErc20ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useMockErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'approve', TMode>({
    abi: mockErc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"burn"`.
 */
export function useMockErc20Burn<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, 'burn'>['request']['abi'],
        'burn',
        TMode
      > & { functionName?: 'burn' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'burn', TMode> & {
        abi?: never
        functionName?: 'burn'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'burn', TMode>({
    abi: mockErc20ABI,
    functionName: 'burn',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function useMockErc20Mint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'mint', TMode>({
    abi: mockErc20ABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"permit"`.
 */
export function useMockErc20Permit<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, 'permit'>['request']['abi'],
        'permit',
        TMode
      > & { functionName?: 'permit' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'permit', TMode> & {
        abi?: never
        functionName?: 'permit'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'permit', TMode>({
    abi: mockErc20ABI,
    functionName: 'permit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useMockErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'transfer', TMode>({
    abi: mockErc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMockErc20TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'transferFrom', TMode>({
    abi: mockErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function usePrepareMockErc20Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: mockErc20ABI, ...config } as UsePrepareContractWriteConfig<
    typeof mockErc20ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMockErc20Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, 'approve'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"burn"`.
 */
export function usePrepareMockErc20Burn(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, 'burn'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'burn',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'burn'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareMockErc20Mint(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, 'mint'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"permit"`.
 */
export function usePrepareMockErc20Permit(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, 'permit'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'permit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'permit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareMockErc20Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transfer'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMockErc20TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transferFrom'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof mockErc20ABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: mockErc20ABI, ...config } as UseContractEventConfig<typeof mockErc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useMockErc20ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof mockErc20ABI, 'Approval'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: mockErc20ABI, eventName: 'Approval', ...config } as UseContractEventConfig<
    typeof mockErc20ABI,
    'Approval'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMockErc20TransferEvent(
  config: Omit<UseContractEventConfig<typeof mockErc20ABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: mockErc20ABI, eventName: 'Transfer', ...config } as UseContractEventConfig<
    typeof mockErc20ABI,
    'Transfer'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownedABI}__.
 */
export function useOwnedRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownedABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ownedABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: ownedABI, ...config } as UseContractReadConfig<
    typeof ownedABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownedABI}__ and `functionName` set to `"owner"`.
 */
export function useOwnedOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof ownedABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof ownedABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: ownedABI, functionName: 'owner', ...config } as UseContractReadConfig<
    typeof ownedABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownedABI}__.
 */
export function useOwnedWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownedABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownedABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ownedABI, TFunctionName, TMode>({ abi: ownedABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownedABI}__ and `functionName` set to `"setOwner"`.
 */
export function useOwnedSetOwner<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownedABI, 'setOwner'>['request']['abi'],
        'setOwner',
        TMode
      > & { functionName?: 'setOwner' }
    : UseContractWriteConfig<typeof ownedABI, 'setOwner', TMode> & {
        abi?: never
        functionName?: 'setOwner'
      } = {} as any,
) {
  return useContractWrite<typeof ownedABI, 'setOwner', TMode>({
    abi: ownedABI,
    functionName: 'setOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownedABI}__.
 */
export function usePrepareOwnedWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof ownedABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: ownedABI, ...config } as UsePrepareContractWriteConfig<
    typeof ownedABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownedABI}__ and `functionName` set to `"setOwner"`.
 */
export function usePrepareOwnedSetOwner(
  config: Omit<UsePrepareContractWriteConfig<typeof ownedABI, 'setOwner'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownedABI,
    functionName: 'setOwner',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownedABI, 'setOwner'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownedABI}__.
 */
export function useOwnedEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof ownedABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: ownedABI, ...config } as UseContractEventConfig<typeof ownedABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownedABI}__ and `eventName` set to `"OwnerChanged"`.
 */
export function useOwnedOwnerChangedEvent(
  config: Omit<UseContractEventConfig<typeof ownedABI, 'OwnerChanged'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: ownedABI, eventName: 'OwnerChanged', ...config } as UseContractEventConfig<
    typeof ownedABI,
    'OwnerChanged'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolDonateTestABI}__.
 *
 *
 */
export function usePoolDonateTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolDonateTestABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>, 'abi' | 'address'> & {
    chainId?: keyof typeof poolDonateTestAddress
  } = {} as any,
) {
  return useContractRead({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    ...config,
  } as UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"manager"`.
 *
 *
 */
export function usePoolDonateTestManager<
  TFunctionName extends 'manager',
  TSelectData = ReadContractResult<typeof poolDonateTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return useContractRead({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: 'manager',
    ...config,
  } as UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__.
 *
 *
 */
export function usePoolDonateTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolDonateTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolDonateTestABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof poolDonateTestABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof poolDonateTestABI, TFunctionName, TMode>({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"donate"`.
 *
 *
 */
export function usePoolDonateTestDonate<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolDonateTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolDonateTestABI, 'donate'>['request']['abi'],
        'donate',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'donate' }
    : UseContractWriteConfig<typeof poolDonateTestABI, 'donate', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'donate'
      } = {} as any,
) {
  return useContractWrite<typeof poolDonateTestABI, 'donate', TMode>({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: 'donate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 *
 */
export function usePoolDonateTestLockAcquired<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolDonateTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolDonateTestABI, 'lockAcquired'>['request']['abi'],
        'lockAcquired',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'lockAcquired' }
    : UseContractWriteConfig<typeof poolDonateTestABI, 'lockAcquired', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'lockAcquired'
      } = {} as any,
) {
  return useContractWrite<typeof poolDonateTestABI, 'lockAcquired', TMode>({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: 'lockAcquired',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__.
 *
 *
 */
export function usePreparePoolDonateTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolDonateTestABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof poolDonateTestAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolDonateTestABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"donate"`.
 *
 *
 */
export function usePreparePoolDonateTestDonate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolDonateTestABI, 'donate'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: 'donate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolDonateTestABI, 'donate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 *
 */
export function usePreparePoolDonateTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolDonateTestABI, 'lockAcquired'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: 'lockAcquired',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolDonateTestABI, 'lockAcquired'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>, 'abi' | 'address'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MAX_SWAP_FEE"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerMaxSwapFee<
  TFunctionName extends 'MAX_SWAP_FEE',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'MAX_SWAP_FEE',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MAX_TICK_SPACING"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerMaxTickSpacing<
  TFunctionName extends 'MAX_TICK_SPACING',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'MAX_TICK_SPACING',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerMinProtocolFeeDenominator<
  TFunctionName extends 'MIN_PROTOCOL_FEE_DENOMINATOR',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MIN_TICK_SPACING"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerMinTickSpacing<
  TFunctionName extends 'MIN_TICK_SPACING',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'MIN_TICK_SPACING',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"balanceOfBatch"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerBalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'balanceOfBatch',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"currencyDelta"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerCurrencyDelta<
  TFunctionName extends 'currencyDelta',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'currencyDelta',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"extsload"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerExtsload<
  TFunctionName extends 'extsload',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'extsload',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerGetLiquidity<
  TFunctionName extends 'getLiquidity',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'getLiquidity',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getLock"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerGetLock<
  TFunctionName extends 'getLock',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'getLock',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerGetPosition<
  TFunctionName extends 'getPosition',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'getPosition',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getSlot0"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerGetSlot0<
  TFunctionName extends 'getSlot0',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'getSlot0',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"hookFeesAccrued"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerHookFeesAccrued<
  TFunctionName extends 'hookFeesAccrued',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'hookFeesAccrued',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"isApprovedForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"lockData"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerLockData<
  TFunctionName extends 'lockData',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'lockData',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"owner"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"pools"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerPools<
  TFunctionName extends 'pools',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'pools',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"protocolFeeController"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerProtocolFeeController<
  TFunctionName extends 'protocolFeeController',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'protocolFeeController',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerProtocolFeesAccrued<
  TFunctionName extends 'protocolFeesAccrued',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'protocolFeesAccrued',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"reservesOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerReservesOf<
  TFunctionName extends 'reservesOf',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'reservesOf',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"uri"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerUri<
  TFunctionName extends 'uri',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'uri',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof poolManagerABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, TFunctionName, TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectHookFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerCollectHookFees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'collectHookFees'>['request']['abi'],
        'collectHookFees',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'collectHookFees' }
    : UseContractWriteConfig<typeof poolManagerABI, 'collectHookFees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'collectHookFees'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'collectHookFees', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'collectHookFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectProtocolFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerCollectProtocolFees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'collectProtocolFees'>['request']['abi'],
        'collectProtocolFees',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'collectProtocolFees' }
    : UseContractWriteConfig<typeof poolManagerABI, 'collectProtocolFees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'collectProtocolFees'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'collectProtocolFees', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'collectProtocolFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"donate"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerDonate<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'donate'>['request']['abi'],
        'donate',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'donate' }
    : UseContractWriteConfig<typeof poolManagerABI, 'donate', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'donate'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'donate', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'donate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'initialize'>['request']['abi'],
        'initialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'initialize' }
    : UseContractWriteConfig<typeof poolManagerABI, 'initialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'initialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'initialize', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"lock"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerLock<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'lock'>['request']['abi'],
        'lock',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'lock' }
    : UseContractWriteConfig<typeof poolManagerABI, 'lock', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'lock'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'lock', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'lock',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerMint<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'mint' }
    : UseContractWriteConfig<typeof poolManagerABI, 'mint', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'mint'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'mint', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"modifyPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerModifyPosition<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'modifyPosition'>['request']['abi'],
        'modifyPosition',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'modifyPosition' }
    : UseContractWriteConfig<typeof poolManagerABI, 'modifyPosition', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'modifyPosition'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'modifyPosition', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'modifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"onERC1155BatchReceived"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerOnErc1155BatchReceived<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'onERC1155BatchReceived'>['request']['abi'],
        'onERC1155BatchReceived',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'onERC1155BatchReceived' }
    : UseContractWriteConfig<typeof poolManagerABI, 'onERC1155BatchReceived', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'onERC1155BatchReceived'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'onERC1155BatchReceived', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'onERC1155BatchReceived',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"onERC1155Received"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerOnErc1155Received<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'onERC1155Received'>['request']['abi'],
        'onERC1155Received',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'onERC1155Received' }
    : UseContractWriteConfig<typeof poolManagerABI, 'onERC1155Received', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'onERC1155Received'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'onERC1155Received', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'onERC1155Received',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSafeBatchTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'safeBatchTransferFrom'>['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'safeBatchTransferFrom' }
    : UseContractWriteConfig<typeof poolManagerABI, 'safeBatchTransferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'safeBatchTransferFrom', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'safeTransferFrom'>['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof poolManagerABI, 'safeTransferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'safeTransferFrom', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setApprovalForAll'>['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setApprovalForAll', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'setApprovalForAll', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setHookFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSetHookFees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setHookFees'>['request']['abi'],
        'setHookFees',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setHookFees' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setHookFees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setHookFees'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'setHookFees', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setHookFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setOwner"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSetOwner<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setOwner'>['request']['abi'],
        'setOwner',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setOwner' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setOwner', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setOwner'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'setOwner', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFeeController"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSetProtocolFeeController<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setProtocolFeeController'>['request']['abi'],
        'setProtocolFeeController',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setProtocolFeeController' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setProtocolFeeController', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setProtocolFeeController'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'setProtocolFeeController', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setProtocolFeeController',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSetProtocolFees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setProtocolFees'>['request']['abi'],
        'setProtocolFees',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setProtocolFees' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setProtocolFees', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setProtocolFees'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'setProtocolFees', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setProtocolFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"settle"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSettle<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'settle'>['request']['abi'],
        'settle',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'settle' }
    : UseContractWriteConfig<typeof poolManagerABI, 'settle', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'settle'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'settle', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'settle',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSwap<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'swap'>['request']['abi'],
        'swap',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'swap' }
    : UseContractWriteConfig<typeof poolManagerABI, 'swap', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'swap'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'swap', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'swap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"take"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerTake<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'take'>['request']['abi'],
        'take',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'take' }
    : UseContractWriteConfig<typeof poolManagerABI, 'take', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'take'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'take', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'take',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"updateDynamicSwapFee"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerUpdateDynamicSwapFee<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'updateDynamicSwapFee'>['request']['abi'],
        'updateDynamicSwapFee',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'updateDynamicSwapFee' }
    : UseContractWriteConfig<typeof poolManagerABI, 'updateDynamicSwapFee', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'updateDynamicSwapFee'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolManagerABI, 'updateDynamicSwapFee', TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'updateDynamicSwapFee',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectHookFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerCollectHookFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'collectHookFees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'collectHookFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'collectHookFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectProtocolFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerCollectProtocolFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'collectProtocolFees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'collectProtocolFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'collectProtocolFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"donate"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'donate'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'donate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'donate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'initialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"lock"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerLock(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'lock'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'lock',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'lock'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerMint(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'mint'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"modifyPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'modifyPosition'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'modifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'modifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"onERC1155BatchReceived"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerOnErc1155BatchReceived(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'onERC1155BatchReceived'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'onERC1155BatchReceived',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'onERC1155BatchReceived'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"onERC1155Received"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerOnErc1155Received(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'onERC1155Received'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'onERC1155Received',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'onERC1155Received'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'safeBatchTransferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'safeBatchTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'safeTransferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'setApprovalForAll'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setHookFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSetHookFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'setHookFees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setHookFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setHookFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setOwner"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSetOwner(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'setOwner'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setOwner',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setOwner'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFeeController"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSetProtocolFeeController(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'setProtocolFeeController'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setProtocolFeeController',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setProtocolFeeController'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSetProtocolFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'setProtocolFees'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'setProtocolFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setProtocolFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"settle"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSettle(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'settle'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'settle',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'settle'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'swap'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'swap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'swap'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"take"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerTake(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'take'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'take',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'take'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"updateDynamicSwapFee"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolManagerUpdateDynamicSwapFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'updateDynamicSwapFee'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: 'updateDynamicSwapFee',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'updateDynamicSwapFee'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, TEventName>, 'abi' | 'address'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerApprovalForAllEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'ApprovalForAll'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"DynamicSwapFeeUpdated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerDynamicSwapFeeUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof poolManagerABI, 'DynamicSwapFeeUpdated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'DynamicSwapFeeUpdated',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'DynamicSwapFeeUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"HookFeeUpdated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerHookFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'HookFeeUpdated'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'HookFeeUpdated',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'HookFeeUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"Initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerInitializeEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'Initialize'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'Initialize',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'Initialize'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ModifyPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerModifyPositionEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'ModifyPosition'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'ModifyPosition',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'ModifyPosition'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"OwnerChanged"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerOwnerChangedEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'OwnerChanged'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'OwnerChanged',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'OwnerChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerProtocolFeeControllerUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof poolManagerABI, 'ProtocolFeeControllerUpdated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'ProtocolFeeControllerUpdated',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'ProtocolFeeControllerUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ProtocolFeeUpdated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerProtocolFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'ProtocolFeeUpdated'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'ProtocolFeeUpdated',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'ProtocolFeeUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"Swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerSwapEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'Swap'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'Swap',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'Swap'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"TransferBatch"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerTransferBatchEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'TransferBatch'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'TransferBatch',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'TransferBatch'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"TransferSingle"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerTransferSingleEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'TransferSingle'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'TransferSingle',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'TransferSingle'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"URI"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolManagerUriEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'URI'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof poolManagerAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: 'URI',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'URI'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolModifyPositionTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolModifyPositionTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolModifyPositionTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolModifyPositionTestABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof poolModifyPositionTestAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolModifyPositionTestABI,
    address: poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress],
    ...config,
  } as UseContractReadConfig<typeof poolModifyPositionTestABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolModifyPositionTestABI}__ and `functionName` set to `"manager"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolModifyPositionTestManager<
  TFunctionName extends 'manager',
  TSelectData = ReadContractResult<typeof poolModifyPositionTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolModifyPositionTestABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolModifyPositionTestAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolModifyPositionTestABI,
    address: poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress],
    functionName: 'manager',
    ...config,
  } as UseContractReadConfig<typeof poolModifyPositionTestABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolModifyPositionTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolModifyPositionTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolModifyPositionTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolModifyPositionTestABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof poolModifyPositionTestABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolModifyPositionTestABI, TFunctionName, TMode>({
    abi: poolModifyPositionTestABI,
    address: poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolModifyPositionTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolModifyPositionTestLockAcquired<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolModifyPositionTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolModifyPositionTestABI, 'lockAcquired'>['request']['abi'],
        'lockAcquired',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'lockAcquired' }
    : UseContractWriteConfig<typeof poolModifyPositionTestABI, 'lockAcquired', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'lockAcquired'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolModifyPositionTestABI, 'lockAcquired', TMode>({
    abi: poolModifyPositionTestABI,
    address: poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress],
    functionName: 'lockAcquired',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolModifyPositionTestABI}__ and `functionName` set to `"modifyPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolModifyPositionTestModifyPosition<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolModifyPositionTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolModifyPositionTestABI, 'modifyPosition'>['request']['abi'],
        'modifyPosition',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'modifyPosition' }
    : UseContractWriteConfig<typeof poolModifyPositionTestABI, 'modifyPosition', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'modifyPosition'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolModifyPositionTestABI, 'modifyPosition', TMode>({
    abi: poolModifyPositionTestABI,
    address: poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress],
    functionName: 'modifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolModifyPositionTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePreparePoolModifyPositionTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolModifyPositionTestABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof poolModifyPositionTestAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolModifyPositionTestABI,
    address: poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolModifyPositionTestABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolModifyPositionTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePreparePoolModifyPositionTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolModifyPositionTestABI, 'lockAcquired'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolModifyPositionTestAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolModifyPositionTestABI,
    address: poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress],
    functionName: 'lockAcquired',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolModifyPositionTestABI, 'lockAcquired'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolModifyPositionTestABI}__ and `functionName` set to `"modifyPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePreparePoolModifyPositionTestModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolModifyPositionTestABI, 'modifyPosition'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolModifyPositionTestAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolModifyPositionTestABI,
    address: poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress],
    functionName: 'modifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolModifyPositionTestABI, 'modifyPosition'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolSwapTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export function usePoolSwapTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolSwapTestABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>, 'abi' | 'address'> & {
    chainId?: keyof typeof poolSwapTestAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    ...config,
  } as UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"manager"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export function usePoolSwapTestManager<
  TFunctionName extends 'manager',
  TSelectData = ReadContractResult<typeof poolSwapTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolSwapTestAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: 'manager',
    ...config,
  } as UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export function usePoolSwapTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolSwapTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolSwapTestABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof poolSwapTestABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolSwapTestABI, TFunctionName, TMode>({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export function usePoolSwapTestLockAcquired<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolSwapTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolSwapTestABI, 'lockAcquired'>['request']['abi'],
        'lockAcquired',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'lockAcquired' }
    : UseContractWriteConfig<typeof poolSwapTestABI, 'lockAcquired', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'lockAcquired'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolSwapTestABI, 'lockAcquired', TMode>({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: 'lockAcquired',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export function usePoolSwapTestSwap<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolSwapTestAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolSwapTestABI, 'swap'>['request']['abi'],
        'swap',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'swap' }
    : UseContractWriteConfig<typeof poolSwapTestABI, 'swap', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'swap'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof poolSwapTestABI, 'swap', TMode>({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: 'swap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export function usePreparePoolSwapTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolSwapTestABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof poolSwapTestAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolSwapTestABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export function usePreparePoolSwapTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolSwapTestABI, 'lockAcquired'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof poolSwapTestAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: 'lockAcquired',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolSwapTestABI, 'lockAcquired'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x1689E7B1F10000AE47eBfE339a4f69dECd19F602)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 */
export function usePreparePoolSwapTestSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof poolSwapTestABI, 'swap'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof poolSwapTestAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: 'swap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolSwapTestABI, 'swap'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__.
 */
export function useTestErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: testErc20ABI, ...config } as UseContractReadConfig<
    typeof testErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useTestErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: testErc20ABI, functionName: 'allowance', ...config } as UseContractReadConfig<
    typeof testErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useTestErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: testErc20ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof testErc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__.
 */
export function useTestErc20Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testErc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof testErc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, TFunctionName, TMode>({ abi: testErc20ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useTestErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testErc20ABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof testErc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, 'approve', TMode>({
    abi: testErc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function useTestErc20Mint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testErc20ABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof testErc20ABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, 'mint', TMode>({
    abi: testErc20ABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useTestErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testErc20ABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof testErc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, 'transfer', TMode>({
    abi: testErc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useTestErc20TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testErc20ABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof testErc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, 'transferFrom', TMode>({
    abi: testErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__.
 */
export function usePrepareTestErc20Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof testErc20ABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: testErc20ABI, ...config } as UsePrepareContractWriteConfig<
    typeof testErc20ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareTestErc20Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof testErc20ABI, 'approve'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareTestErc20Mint(
  config: Omit<UsePrepareContractWriteConfig<typeof testErc20ABI, 'mint'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareTestErc20Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof testErc20ABI, 'transfer'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareTestErc20TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof testErc20ABI, 'transferFrom'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc20ABI}__.
 */
export function useTestErc20Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof testErc20ABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: testErc20ABI, ...config } as UseContractEventConfig<typeof testErc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useTestErc20ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof testErc20ABI, 'Approval'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: testErc20ABI, eventName: 'Approval', ...config } as UseContractEventConfig<
    typeof testErc20ABI,
    'Approval'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useTestErc20TransferEvent(
  config: Omit<UseContractEventConfig<typeof testErc20ABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: testErc20ABI, eventName: 'Transfer', ...config } as UseContractEventConfig<
    typeof testErc20ABI,
    'Transfer'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>, 'abi' | 'address'> & {
    chainId?: keyof typeof token0Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"allowance"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"decimals"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"name"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"symbol"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"totalSupply"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token0ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token0Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token0ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof token0ABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof token0ABI, TFunctionName, TMode>({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Approve<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token0Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token0ABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'approve' }
    : UseContractWriteConfig<typeof token0ABI, 'approve', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approve'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof token0ABI, 'approve', TMode>({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Transfer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token0Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token0ABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transfer' }
    : UseContractWriteConfig<typeof token0ABI, 'transfer', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transfer'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof token0ABI, 'transfer', TMode>({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0TransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token0Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token0ABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof token0ABI, 'transferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof token0ABI, 'transferFrom', TMode>({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token0ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function usePrepareToken0Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof token0ABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof token0Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    ...config,
  } as UsePrepareContractWriteConfig<typeof token0ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function usePrepareToken0Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof token0ABI, 'approve'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof token0Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof token0ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function usePrepareToken0Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof token0ABI, 'transfer'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof token0Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof token0ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function usePrepareToken0TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof token0ABI, 'transferFrom'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof token0Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof token0ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token0ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof token0ABI, TEventName>, 'abi' | 'address'> & {
    chainId?: keyof typeof token0Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    ...config,
  } as UseContractEventConfig<typeof token0ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token0ABI}__ and `eventName` set to `"Approval"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof token0ABI, 'Approval'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof token0Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof token0ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token0ABI}__ and `eventName` set to `"Transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 */
export function useToken0TransferEvent(
  config: Omit<UseContractEventConfig<typeof token0ABI, 'Transfer'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof token0Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof token0ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>, 'abi' | 'address'> & {
    chainId?: keyof typeof token1Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"allowance"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"decimals"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"name"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"symbol"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"totalSupply"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token1ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token1Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token1ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof token1ABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof token1ABI, TFunctionName, TMode>({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Approve<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token1Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token1ABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'approve' }
    : UseContractWriteConfig<typeof token1ABI, 'approve', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approve'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof token1ABI, 'approve', TMode>({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Transfer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token1Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token1ABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transfer' }
    : UseContractWriteConfig<typeof token1ABI, 'transfer', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transfer'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof token1ABI, 'transfer', TMode>({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1TransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token1Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token1ABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof token1ABI, 'transferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof token1ABI, 'transferFrom', TMode>({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token1ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function usePrepareToken1Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof token1ABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof token1Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    ...config,
  } as UsePrepareContractWriteConfig<typeof token1ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function usePrepareToken1Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof token1ABI, 'approve'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof token1Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof token1ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function usePrepareToken1Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof token1ABI, 'transfer'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof token1Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof token1ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function usePrepareToken1TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof token1ABI, 'transferFrom'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof token1Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof token1ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token1ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof token1ABI, TEventName>, 'abi' | 'address'> & {
    chainId?: keyof typeof token1Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    ...config,
  } as UseContractEventConfig<typeof token1ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token1ABI}__ and `eventName` set to `"Approval"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof token1ABI, 'Approval'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof token1Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof token1ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token1ABI}__ and `eventName` set to `"Transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 */
export function useToken1TransferEvent(
  config: Omit<UseContractEventConfig<typeof token1ABI, 'Transfer'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof token1Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof token1ABI, 'Transfer'>)
}
