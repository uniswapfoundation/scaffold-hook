import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import { ReadContractResult, WriteContractMode, PrepareWriteContractResult } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
  { type: 'error', inputs: [], name: 'ERC20TransferFailed' },
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
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
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
      { name: 'value', internalType: 'uint256', type: 'uint256' },
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
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__.
 */
export function usePoolManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: poolManagerABI, ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MAX_TICK_SPACING"`.
 */
export function usePoolManagerMaxTickSpacing<
  TFunctionName extends 'MAX_TICK_SPACING',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'MAX_TICK_SPACING', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 */
export function usePoolManagerMinProtocolFeeDenominator<
  TFunctionName extends 'MIN_PROTOCOL_FEE_DENOMINATOR',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: poolManagerABI,
    functionName: 'MIN_PROTOCOL_FEE_DENOMINATOR',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MIN_TICK_SPACING"`.
 */
export function usePoolManagerMinTickSpacing<
  TFunctionName extends 'MIN_TICK_SPACING',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'MIN_TICK_SPACING', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"balanceOf"`.
 */
export function usePoolManagerBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"balanceOfBatch"`.
 */
export function usePoolManagerBalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'balanceOfBatch', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"currencyDelta"`.
 */
export function usePoolManagerCurrencyDelta<
  TFunctionName extends 'currencyDelta',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'currencyDelta', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"extsload"`.
 */
export function usePoolManagerExtsload<
  TFunctionName extends 'extsload',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'extsload', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getLiquidity"`.
 */
export function usePoolManagerGetLiquidity<
  TFunctionName extends 'getLiquidity',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'getLiquidity', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getLock"`.
 */
export function usePoolManagerGetLock<
  TFunctionName extends 'getLock',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'getLock', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getPosition"`.
 */
export function usePoolManagerGetPosition<
  TFunctionName extends 'getPosition',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'getPosition', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getSlot0"`.
 */
export function usePoolManagerGetSlot0<
  TFunctionName extends 'getSlot0',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'getSlot0', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"hookFeesAccrued"`.
 */
export function usePoolManagerHookFeesAccrued<
  TFunctionName extends 'hookFeesAccrued',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'hookFeesAccrued', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function usePoolManagerIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'isApprovedForAll', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"lockData"`.
 */
export function usePoolManagerLockData<
  TFunctionName extends 'lockData',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'lockData', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"owner"`.
 */
export function usePoolManagerOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'owner', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"pools"`.
 */
export function usePoolManagerPools<
  TFunctionName extends 'pools',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'pools', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"protocolFeeController"`.
 */
export function usePoolManagerProtocolFeeController<
  TFunctionName extends 'protocolFeeController',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: poolManagerABI,
    functionName: 'protocolFeeController',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 */
export function usePoolManagerProtocolFeesAccrued<
  TFunctionName extends 'protocolFeesAccrued',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: poolManagerABI,
    functionName: 'protocolFeesAccrued',
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"reservesOf"`.
 */
export function usePoolManagerReservesOf<
  TFunctionName extends 'reservesOf',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'reservesOf', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function usePoolManagerSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'supportsInterface', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"uri"`.
 */
export function usePoolManagerUri<
  TFunctionName extends 'uri',
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: poolManagerABI, functionName: 'uri', ...config } as UseContractReadConfig<
    typeof poolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__.
 */
export function usePoolManagerWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof poolManagerABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, TFunctionName, TMode>({ abi: poolManagerABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectHookFees"`.
 */
export function usePoolManagerCollectHookFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'collectHookFees'>['request']['abi'],
        'collectHookFees',
        TMode
      > & { functionName?: 'collectHookFees' }
    : UseContractWriteConfig<typeof poolManagerABI, 'collectHookFees', TMode> & {
        abi?: never
        functionName?: 'collectHookFees'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'collectHookFees', TMode>({
    abi: poolManagerABI,
    functionName: 'collectHookFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectProtocolFees"`.
 */
export function usePoolManagerCollectProtocolFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'collectProtocolFees'>['request']['abi'],
        'collectProtocolFees',
        TMode
      > & { functionName?: 'collectProtocolFees' }
    : UseContractWriteConfig<typeof poolManagerABI, 'collectProtocolFees', TMode> & {
        abi?: never
        functionName?: 'collectProtocolFees'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'collectProtocolFees', TMode>({
    abi: poolManagerABI,
    functionName: 'collectProtocolFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"donate"`.
 */
export function usePoolManagerDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'donate'>['request']['abi'],
        'donate',
        TMode
      > & { functionName?: 'donate' }
    : UseContractWriteConfig<typeof poolManagerABI, 'donate', TMode> & {
        abi?: never
        functionName?: 'donate'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'donate', TMode>({
    abi: poolManagerABI,
    functionName: 'donate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"initialize"`.
 */
export function usePoolManagerInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'initialize'>['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<typeof poolManagerABI, 'initialize', TMode> & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'initialize', TMode>({
    abi: poolManagerABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"lock"`.
 */
export function usePoolManagerLock<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'lock'>['request']['abi'],
        'lock',
        TMode
      > & { functionName?: 'lock' }
    : UseContractWriteConfig<typeof poolManagerABI, 'lock', TMode> & {
        abi?: never
        functionName?: 'lock'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'lock', TMode>({
    abi: poolManagerABI,
    functionName: 'lock',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"mint"`.
 */
export function usePoolManagerMint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof poolManagerABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'mint', TMode>({
    abi: poolManagerABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"modifyPosition"`.
 */
export function usePoolManagerModifyPosition<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'modifyPosition'>['request']['abi'],
        'modifyPosition',
        TMode
      > & { functionName?: 'modifyPosition' }
    : UseContractWriteConfig<typeof poolManagerABI, 'modifyPosition', TMode> & {
        abi?: never
        functionName?: 'modifyPosition'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'modifyPosition', TMode>({
    abi: poolManagerABI,
    functionName: 'modifyPosition',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"onERC1155BatchReceived"`.
 */
export function usePoolManagerOnErc1155BatchReceived<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'onERC1155BatchReceived'>['request']['abi'],
        'onERC1155BatchReceived',
        TMode
      > & { functionName?: 'onERC1155BatchReceived' }
    : UseContractWriteConfig<typeof poolManagerABI, 'onERC1155BatchReceived', TMode> & {
        abi?: never
        functionName?: 'onERC1155BatchReceived'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'onERC1155BatchReceived', TMode>({
    abi: poolManagerABI,
    functionName: 'onERC1155BatchReceived',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"onERC1155Received"`.
 */
export function usePoolManagerOnErc1155Received<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'onERC1155Received'>['request']['abi'],
        'onERC1155Received',
        TMode
      > & { functionName?: 'onERC1155Received' }
    : UseContractWriteConfig<typeof poolManagerABI, 'onERC1155Received', TMode> & {
        abi?: never
        functionName?: 'onERC1155Received'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'onERC1155Received', TMode>({
    abi: poolManagerABI,
    functionName: 'onERC1155Received',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function usePoolManagerSafeBatchTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'safeBatchTransferFrom'>['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & { functionName?: 'safeBatchTransferFrom' }
    : UseContractWriteConfig<typeof poolManagerABI, 'safeBatchTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'safeBatchTransferFrom', TMode>({
    abi: poolManagerABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePoolManagerSafeTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'safeTransferFrom'>['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof poolManagerABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'safeTransferFrom', TMode>({
    abi: poolManagerABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePoolManagerSetApprovalForAll<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setApprovalForAll'>['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'setApprovalForAll', TMode>({
    abi: poolManagerABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setHookFees"`.
 */
export function usePoolManagerSetHookFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setHookFees'>['request']['abi'],
        'setHookFees',
        TMode
      > & { functionName?: 'setHookFees' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setHookFees', TMode> & {
        abi?: never
        functionName?: 'setHookFees'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'setHookFees', TMode>({
    abi: poolManagerABI,
    functionName: 'setHookFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setOwner"`.
 */
export function usePoolManagerSetOwner<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setOwner'>['request']['abi'],
        'setOwner',
        TMode
      > & { functionName?: 'setOwner' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setOwner', TMode> & {
        abi?: never
        functionName?: 'setOwner'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'setOwner', TMode>({
    abi: poolManagerABI,
    functionName: 'setOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFeeController"`.
 */
export function usePoolManagerSetProtocolFeeController<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setProtocolFeeController'>['request']['abi'],
        'setProtocolFeeController',
        TMode
      > & { functionName?: 'setProtocolFeeController' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setProtocolFeeController', TMode> & {
        abi?: never
        functionName?: 'setProtocolFeeController'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'setProtocolFeeController', TMode>({
    abi: poolManagerABI,
    functionName: 'setProtocolFeeController',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFees"`.
 */
export function usePoolManagerSetProtocolFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'setProtocolFees'>['request']['abi'],
        'setProtocolFees',
        TMode
      > & { functionName?: 'setProtocolFees' }
    : UseContractWriteConfig<typeof poolManagerABI, 'setProtocolFees', TMode> & {
        abi?: never
        functionName?: 'setProtocolFees'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'setProtocolFees', TMode>({
    abi: poolManagerABI,
    functionName: 'setProtocolFees',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"settle"`.
 */
export function usePoolManagerSettle<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'settle'>['request']['abi'],
        'settle',
        TMode
      > & { functionName?: 'settle' }
    : UseContractWriteConfig<typeof poolManagerABI, 'settle', TMode> & {
        abi?: never
        functionName?: 'settle'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'settle', TMode>({
    abi: poolManagerABI,
    functionName: 'settle',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"swap"`.
 */
export function usePoolManagerSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'swap'>['request']['abi'],
        'swap',
        TMode
      > & { functionName?: 'swap' }
    : UseContractWriteConfig<typeof poolManagerABI, 'swap', TMode> & {
        abi?: never
        functionName?: 'swap'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'swap', TMode>({
    abi: poolManagerABI,
    functionName: 'swap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"take"`.
 */
export function usePoolManagerTake<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, 'take'>['request']['abi'],
        'take',
        TMode
      > & { functionName?: 'take' }
    : UseContractWriteConfig<typeof poolManagerABI, 'take', TMode> & {
        abi?: never
        functionName?: 'take'
      } = {} as any,
) {
  return useContractWrite<typeof poolManagerABI, 'take', TMode>({
    abi: poolManagerABI,
    functionName: 'take',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__.
 */
export function usePreparePoolManagerWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: poolManagerABI, ...config } as UsePrepareContractWriteConfig<
    typeof poolManagerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectHookFees"`.
 */
export function usePreparePoolManagerCollectHookFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'collectHookFees'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'collectHookFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'collectHookFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectProtocolFees"`.
 */
export function usePreparePoolManagerCollectProtocolFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'collectProtocolFees'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'collectProtocolFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'collectProtocolFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"donate"`.
 */
export function usePreparePoolManagerDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'donate'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'donate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'donate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"initialize"`.
 */
export function usePreparePoolManagerInitialize(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'initialize'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"lock"`.
 */
export function usePreparePoolManagerLock(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'lock'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'lock',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'lock'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"mint"`.
 */
export function usePreparePoolManagerMint(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'mint'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"modifyPosition"`.
 */
export function usePreparePoolManagerModifyPosition(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'modifyPosition'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'modifyPosition',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'modifyPosition'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"onERC1155BatchReceived"`.
 */
export function usePreparePoolManagerOnErc1155BatchReceived(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'onERC1155BatchReceived'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'onERC1155BatchReceived',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'onERC1155BatchReceived'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"onERC1155Received"`.
 */
export function usePreparePoolManagerOnErc1155Received(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'onERC1155Received'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'onERC1155Received',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'onERC1155Received'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function usePreparePoolManagerSafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'safeBatchTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'safeBatchTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePreparePoolManagerSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePreparePoolManagerSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setHookFees"`.
 */
export function usePreparePoolManagerSetHookFees(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'setHookFees'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'setHookFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setHookFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setOwner"`.
 */
export function usePreparePoolManagerSetOwner(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'setOwner'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'setOwner',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setOwner'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFeeController"`.
 */
export function usePreparePoolManagerSetProtocolFeeController(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'setProtocolFeeController'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'setProtocolFeeController',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setProtocolFeeController'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFees"`.
 */
export function usePreparePoolManagerSetProtocolFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, 'setProtocolFees'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'setProtocolFees',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'setProtocolFees'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"settle"`.
 */
export function usePreparePoolManagerSettle(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'settle'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'settle',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'settle'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"swap"`.
 */
export function usePreparePoolManagerSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'swap'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'swap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'swap'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"take"`.
 */
export function usePreparePoolManagerTake(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, 'take'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolManagerABI,
    functionName: 'take',
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, 'take'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__.
 */
export function usePoolManagerEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function usePoolManagerApprovalForAllEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'ApprovalForAll'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'ApprovalForAll', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'ApprovalForAll'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"HookFeeUpdated"`.
 */
export function usePoolManagerHookFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'HookFeeUpdated'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'HookFeeUpdated', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'HookFeeUpdated'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"Initialize"`.
 */
export function usePoolManagerInitializeEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'Initialize'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'Initialize', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'Initialize'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ModifyPosition"`.
 */
export function usePoolManagerModifyPositionEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'ModifyPosition'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'ModifyPosition', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'ModifyPosition'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"OwnerChanged"`.
 */
export function usePoolManagerOwnerChangedEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'OwnerChanged'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'OwnerChanged', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'OwnerChanged'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 */
export function usePoolManagerProtocolFeeControllerUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof poolManagerABI, 'ProtocolFeeControllerUpdated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: poolManagerABI,
    eventName: 'ProtocolFeeControllerUpdated',
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, 'ProtocolFeeControllerUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ProtocolFeeUpdated"`.
 */
export function usePoolManagerProtocolFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'ProtocolFeeUpdated'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'ProtocolFeeUpdated', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'ProtocolFeeUpdated'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"Swap"`.
 */
export function usePoolManagerSwapEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'Swap'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'Swap', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'Swap'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"TransferBatch"`.
 */
export function usePoolManagerTransferBatchEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'TransferBatch'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'TransferBatch', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'TransferBatch'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"TransferSingle"`.
 */
export function usePoolManagerTransferSingleEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'TransferSingle'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'TransferSingle', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'TransferSingle'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"URI"`.
 */
export function usePoolManagerUriEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, 'URI'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: poolManagerABI, eventName: 'URI', ...config } as UseContractEventConfig<
    typeof poolManagerABI,
    'URI'
  >)
}
