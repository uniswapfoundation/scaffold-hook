import { FetchTokenResult } from "wagmi/dist/actions";

export const MAX_UINT = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;

// allows for unlimited slippage
export const MIN_SQRT_PRICE_LIMIT = 4295128739n + 1n;
export const MAX_SQRT_PRICE_LIMIT = 1461446703485210103287273052203988822378723970342n - 1n;

export const ZERO_ADDR = "0x0000000000000000000000000000000000000000";

export const BLANK_TOKEN: FetchTokenResult = {
  address: "0x000000000000000000000000000000000000dEaD",
  symbol: "BLANK",
  name: "BLANK",
  decimals: 18,
  totalSupply: { formatted: "0", value: 0n },
};
