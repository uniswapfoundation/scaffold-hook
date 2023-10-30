import PoolModifyPositionTestABI from "../../../contracts/out/PoolModifyPositionTest.sol/PoolModifyPositionTest.json";
import { CounterHookABI } from "./Counter.sol/counterHook";
import { abi } from "./HookMiner.sol/HookMiner.json";
import { poolManagerABI } from "./PoolManager.sol/PoolManager";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

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
          address: "0x3C215d42209e91B305b3c7bf09324f1d7a04e86E",
          abi: CounterHookABI,
        },
        HookMiner: {
          address: "0x32cd5ecdA7f2B8633C00A0434DE28Db111E60636",
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
