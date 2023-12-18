import { counterABI, hookMinerABI, poolManagerABI, poolModifyLiquidityTestABI, poolSwapTestABI } from "./generated";
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
          address: "0x3Ce72a2059524eC26219E6a7f9dBe387370ac1D8",
          abi: counterABI,
        },
        HookMiner: {
          address: "0x32cd5ecdA7f2B8633C00A0434DE28Db111E60636",
          abi: hookMinerABI,
        },
        PoolModifyLiquityTest: {
          address: "0x3079c0319f8734239eb06765666468f7b76eb505",
          abi: poolModifyLiquidityTestABI,
        },
        PoolSwapTest: {
          address: "0xaf7ccf0ff7ef054a1db43330f5431958ab4a9441",
          abi: poolSwapTestABI,
        },
      },
    },
  ],
};

export default deployedContracts;
