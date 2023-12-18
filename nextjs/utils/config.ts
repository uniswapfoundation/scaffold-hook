import {
  counterConfig,
  poolManagerConfig,
  poolModifyLiquidityTestConfig,
  poolSwapTestConfig,
  token0Address,
  token1Address,
} from "~~/generated/generated";

export const TOKEN_ADDRESSES = [token0Address, token1Address];

export const DEBUGGABLE_ADDRESSES = [
  { ...counterConfig, name: "Counter" },
  { ...poolManagerConfig, name: "PoolManager" },
  { ...poolModifyLiquidityTestConfig, name: "PoolModifyLiquidityTest" },
  { ...poolSwapTestConfig, name: "PoolSwapTest" },
];
