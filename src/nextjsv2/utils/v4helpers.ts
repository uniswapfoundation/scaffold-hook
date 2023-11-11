import { encodeAbiParameters, keccak256 } from "viem";

export function getPoolId({
  currency0,
  currency1,
  fee,
  tickSpacing,
  hooks,
}: {
  currency0: string;
  currency1: string;
  fee: number;
  tickSpacing: number;
  hooks: string;
}): `0x${string}` {
  return keccak256(
    encodeAbiParameters(
      [
        { name: "currency0", type: "address" },
        { name: "currency1", type: "address" },
        { name: "fee", type: "uint24" },
        { name: "tickSpacing", type: "int24" },
        { name: "hooks", type: "address" },
      ],
      [currency0, currency1, fee, tickSpacing, hooks],
    ),
  );
}
