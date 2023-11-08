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
        80001: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
      },
      name: "Token0",
    },
    {
      abi: erc20ABI,
      address: {
        31337: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4",
        80001: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
      },
      name: "Token1",
    },
  ],
  plugins: [
    foundry({
      project: "../../", // path to the project root, directory holding foundry.toml
      deployments: {
        Counter: {
          31337: "0x3Ce72a2059524eC26219E6a7f9dBe387370ac1D8",
          80001: "0x3c210Bc497Df1Dd8794b6F3c3A081eC2AC9Ad8C8",
        },
        PoolManager: {
          31337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          80001: "0x5FF8780e4D20e75B8599A9C4528D8ac9682e5c89",
        },
        PoolSwapTest: {
          31337: "0xaf7ccf0ff7ef054a1db43330f5431958ab4a9441",
          80001: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
        },
        PoolModifyPositionTest: {
          31337: "0x3079c0319f8734239eb06765666468f7b76eb505",
          80001: "0x092D53306f9Df9eeD35efec24c31Ca32000033BC",
        },
        PoolDonateTest: {
          31337: "0x4fa6c7a3a9b84f2a8340d4d33190f84e307b085c",
        },
      },
    }),
    react(),
  ],
});
