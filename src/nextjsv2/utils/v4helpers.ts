import { encodeAbiParameters, keccak256 } from "viem"
import { Contract } from "./scaffold-eth/contract"
import { Console } from "console"

export function getPoolId({
    currency0,
    currency1,
    fee,
    tickSpacing,
    hooks,
}: {
    currency0: string | Contract
    currency1: string | Contract
    fee: number
    tickSpacing: number
    hooks: string | Contract
}): string {
    console.log("getPoolId",
        [
            typeof currency0 === 'string' ? currency0 : currency0.address,
            typeof currency1 === 'string' ? currency1 : currency1.address,
            fee,
            tickSpacing,
            typeof hooks === 'string' ? hooks : hooks.address,
        ])
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
                typeof currency0 === 'string' ? currency0 : currency0.address,
                typeof currency1 === 'string' ? currency1 : currency1.address,
                fee,
                tickSpacing,
                typeof hooks === 'string' ? hooks : hooks.address,
            ],

        )
    )
}