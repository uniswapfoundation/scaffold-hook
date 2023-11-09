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
          5: "0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b",
          420: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
          1442: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
          80001: "0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6",
          84531: "0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D",
          421613: "0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e",
          421614: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
          534351: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
        },
        PoolSwapTest: {
          31337: "0xaf7ccf0ff7ef054a1db43330f5431958ab4a9441",
          5: "0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c",
          420: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
          1442: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
          80001: "0x6550fa0D92B38F52C37D32d71084A7B270226Ba5",
          84531: "0xe99395035e1a89b6da10a73821Fc60158d5e59E9",
          421613: "0x1689E7B1F10000AE47eBfE339a4f69dECd19F602",
          421614: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
          534351: "0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395",
        },
        PoolModifyPositionTest: {
          31337: "0x3079c0319f8734239eb06765666468f7b76eb505",
          5: "0x83feDBeD11B3667f40263a88e8435fca51A03F8C",
          420: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
          1442: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
          80001: "0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763",
          84531: "0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710",
          421613: "0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e",
          421614: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
          534351: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
        },
        PoolDonateTest: {
          31337: "0x4fa6c7a3a9b84f2a8340d4d33190f84e307b085c",
        },
      },
    }),
    react(),
  ],
});
