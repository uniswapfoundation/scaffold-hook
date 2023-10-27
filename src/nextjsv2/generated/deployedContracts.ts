import PoolModifyPositionTestABI from "../../../contracts/out/PoolModifyPositionTest.sol/PoolModifyPositionTest.json";
import { CounterHookABI } from "./Counter.sol/counterHook";
<<<<<<< lp-ui
import { abi } from "./HookMiner.sol/HookMiner.json";
import { poolManagerABI } from "./PoolManager.sol/PoolManager";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";
=======

export const deployedContracts: GenericContractsDeclaration = {
  31337: [
    {
      name: "Anvil",
      chainId: "31337",
      contracts: {
        PoolManager: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: poolManagerABI,
        },
        Counter: {
          address: "0x3C42F03BeA94498c64516465901cf25C43A262EF",
          abi: CounterHookABI,
        },
        HookMiner: {
          address: "0x1B25157F05B25438441bF7CDe38A95A55ccf8E50",
          abi: abi,
        },
        PoolModifyPositionTest: {
          address: "0x3079c0319f8734239eb06765666468f7b76eb505",
          abi: PoolModifyPositionTestABI.abi,
        },
      },
    },
  ],
};

export default deployedContracts;
