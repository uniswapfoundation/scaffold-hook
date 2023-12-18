import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { erc20ABI } from "wagmi";

export default defineConfig({
  out: "generated/generated.ts",
  plugins: [
    foundry({
      forge: {
        build: false, // disable build because we are using a custom solc
      },
      project: "../", // path to the project root (directory holding foundry.toml)
      deployments: {
        // --------------------------------------------------
        // 👉 Update the address with your deployed hook 👈
        // --------------------------------------------------
        Counter: {
          31337: "0x330ae74DAA74d90FAc17045EbBa5bA7d233f69D9",
          5: "0x0000000000000000000000000000000000000000", // goerli
          420: "0x0000000000000000000000000000000000000000", // optimism goerli
          1442: "0x0000000000000000000000000000000000000000", // polygon zkevm testnet
          80001: "0x0000000000000000000000000000000000000000", // mumbai
          84531: "0x0000000000000000000000000000000000000000", // base goerli
          421613: "0x0000000000000000000000000000000000000000", // arbitrum goerli
          421614: "0x0000000000000000000000000000000000000000", // arbitrum sepolia
          534351: "0x0000000000000000000000000000000000000000", // scroll  sepolia
          11155111: "0x0000000000000000000000000000000000000000", // sepolia
        },

        // --------------------------------------------------
        // Do not change
        // --------------------------------------------------
        PoolManager: {
          31337: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          5: "0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b",
          420: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
          1442: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
          80001: "0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6",
          84531: "0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D",
          421613: "0xC94a4C0a89937E278a0d427bb393134E68d5ec09",
          421614: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
          534351: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
          11155111: "0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219",
        },
        PoolInitializeTest: {
          31337: "0xFEB29bB43e36c0F8488F78bba2E8E94F0D829Fa1",
        },
        PoolSwapTest: {
          31337: "0xaf7ccf0ff7ef054a1db43330f5431958ab4a9441",
          5: "0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c",
          420: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
          1442: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
          80001: "0x6550fa0D92B38F52C37D32d71084A7B270226Ba5",
          84531: "0xe99395035e1a89b6da10a73821Fc60158d5e59E9",
          421613: "0xa26b026581Fa923CFf3084119bf2d14060945a63",
          421614: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
          534351: "0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395",
          11155111: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
        },
        PoolModifyLiquidityTest: {
          31337: "0x3079c0319f8734239eb06765666468f7b76eb505",
          5: "0x83feDBeD11B3667f40263a88e8435fca51A03F8C",
          420: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
          1442: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
          80001: "0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763",
          84531: "0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710",
          421613: "0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b",
          421614: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
          534351: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
          11155111: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
        },
        PoolDonateTest: {
          31337: "0x4fa6c7a3a9b84f2a8340d4d33190f84e307b085c",
        },
      },
    }),
    react(),
  ],
  contracts: [
    // --------------------------------------------------
    // (Optional): Update to use your own deployed tokens
    // --------------------------------------------------
    {
      abi: erc20ABI,
      address: {
        31337: "0x2dafbdf11a8cf84c372539a38d781d8248399ae3",
        5: "0x6aed99B81255c1d8D7b222A5F16290741B9DcD39",
        420: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
        1442: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
        80001: "0x841B5A0b3DBc473c8A057E2391014aa4C4751351",
        84531: "0x73666807a1Ed304C2993C72D2b07434a4a561d26",
        421613: "0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a",
        421614: "0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94",
        534351: "0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16",
        11155111: "0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94",
      },
      name: "Token0",
    },
    {
      abi: erc20ABI,
      address: {
        31337: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4",
        5: "0x77513a96372816fBD0Ab84D897cF261656208B18",
        420: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
        1442: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
        80001: "0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317",
        84531: "0x482Bf489989ea9c40aC978739E11f1699384dd7F",
        421613: "0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6",
        421614: "0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E",
        534351: "0x5C038EE8AB7bD7699037E277874F1c611aD0C28F",
        11155111: "0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E",
      },
      name: "Token1",
    },
  ],
});
