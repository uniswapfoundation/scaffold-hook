import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";
import { poolManagerABI } from "./PoolManager.sol/PoolManager";
import { CounterHookABI } from "./Counter.sol/counterHook";
import { abi } from "./HookMiner.sol/HookMiner.json"
export const deployedContracts: GenericContractsDeclaration = {
    31337: [
        {
            name: "Anvil",
            chainId: "31337",
            contracts: {
                PoolManager: {
                    address: "0x565506C573abFE24Eb6abb7c0D8C809aCe1f638D",
                    abi: poolManagerABI,
                },
                Counter: {
                    address: "0x3C0AE26e3747F2Ad320a5f35f9781E2DBc8d0D40",
                    abi: CounterHookABI,
                },
                HookMiner: {
                    address: "0x1B25157F05B25438441bF7CDe38A95A55ccf8E50",
                    abi: abi

                }
            },
        }
    ],

}
    ;

export default deployedContracts;
