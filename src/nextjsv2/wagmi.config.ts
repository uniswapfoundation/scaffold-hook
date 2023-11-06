import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { erc20ABI } from "wagmi";

export default defineConfig({
  out: "generated/generated.ts",
  contracts: [
    {
      abi: erc20ABI,
      address: {
        31337: "0x2dafbdf11a8cf84c372539a38d781d8248399ae3",
      },
      name: "Token0",
    },
    {
      abi: erc20ABI,
      address: {
        31337: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4",
      },
      name: "Token1",
    },
  ],
  plugins: [
    foundry({
      project: "../../", // path to the project root, directory holding foundry.toml
      deployments: {
        Counter: {
          31337: "0x3c3514a364278C43AC2Da7db1e44b4cc702CeFD7",
        },
        PoolManager: {
          31337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        },
        PoolSwapTest: {
          31337: "0xaf7ccf0ff7ef054a1db43330f5431958ab4a9441",
        },
        PoolModifyPositionTest: {
          31337: "0x3079c0319f8734239eb06765666468f7b76eb505",
        },
        PoolDonateTest: {
          31337: "0x4fa6c7a3a9b84f2a8340d4d33190f84e307b085c",
        },
      },
    }),
    react(),
  ],
});
