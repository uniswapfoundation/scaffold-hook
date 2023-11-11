import { encodeAbiParameters, keccak256 } from "viem"

export function getPoolId({
    currency0,
    currency1,
    fee,
    tickSpacing,
    hooks,
}: {
    currency0: string
    currency1: string
    fee: number
    tickSpacing: number
    hooks: string
}): string {
    try {
        return keccak256(
            encodeAbiParameters(
                [
                    { name: 'token0', type: 'address' },
                    { name: 'token1', type: 'address' },
                    { name: 'fee', type: 'uint24' },
                    { name: 'tickSpacing', type: 'int24' },
                    { name: 'hookAddr', type: 'address' },
                ],
                [
                    currency0,
                    currency1,
                    fee,
                    tickSpacing,
                    hooks,
                ],
            )
        )
    } catch (error) {
        console.error(error)
        return "0x"
    }
}