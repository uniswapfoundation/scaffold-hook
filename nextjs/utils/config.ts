import {
  counterConfig,
  poolManagerConfig,
  poolModifyPositionTestConfig,
  poolSwapTestConfig,
  token0Address,
  token1Address,
} from "~~/generated/generated";

export const TOKEN_ADDRESSES = [token0Address, token1Address];

export const DEBUGGABLE_ADDRESSES = [
  { ...counterConfig, name: "Counter" },
  { ...poolManagerConfig, name: "PoolManager" },
  { ...poolModifyPositionTestConfig, name: "PoolModifyPositionTest" },
  { ...poolSwapTestConfig, name: "PoolSwapTest" },
];
