import React, { useEffect, useState } from "react";
import { TokenDropdown } from "./InitializeComponent";
import { PoolKeyId } from "./LiquidityComponent";
import convertSqrtPriceX96ToPrice from "./helpers/utils";
import { Switch, Tab, Tabs } from "@nextui-org/react";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import deployedContracts from "~~/generated/deployedContracts";
import { useErc20Allowance } from "~~/generated/generated";
import {
  useErc20Approve,
  useErc20Decimals,
  useErc20Name,
  useErc20Symbol,
  useMockErc20Name,
  useMockErc20Symbol,
  usePoolManagerGetLiquidity,
  usePoolManagerPools,
} from "~~/generated/generated-old";
import { usePoolSwapTestSwap } from "~~/generated/generatedTypes";
import { MAX_SQRT_PRICE_LIMIT, MAX_UINT, MIN_SQRT_PRICE_LIMIT } from "~~/utils/constants";

function SwapComponent({ poolKey }: { poolKey: any }) {
  const { address } = useAccount();

  // TODO: remove all the hardcoded addresses
  const tokenOptions = [
    { value: "0x2dafbdf11a8cf84c372539a38d781d8248399ae3", label: "Token0" },
    { value: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4", label: "Token1" },
  ];

  const swapRouterAddress = deployedContracts[31337][0].contracts.PoolSwapTest.address;

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [liquidityAvailable, setLiquidityAvailable] = useState("1000 ETH");
  const [fee, setFee] = useState("0.3%");
  const [slippage, setSlippage] = useState("0.2%");

  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookAddress, setHookAddress] = useState(deployedContracts[31337][0].contracts.Counter.address);

  const fromTokenAllowance = useErc20Allowance({
    address: fromCurrency,
    args: [address ?? "0x0", swapRouterAddress],
  });

  const tokenApprove = useErc20Approve({
    address: fromCurrency,
    args: [swapRouterAddress, MAX_UINT],
  });

  const swap = usePoolSwapTestSwap({
    address: swapRouterAddress,
    args: [
      {
        currency0: tokenOptions[0].value,
        currency1: tokenOptions[1].value,
        fee: Number(swapFee),
        tickSpacing: Number(tickSpacing),
        hooks: hookAddress,
      },
      {
        zeroForOne: fromCurrency === tokenOptions[0].value,
        amountSpecified: parseEther(fromAmount), // TODO: assumes tokens are always 18 decimals
        sqrtPriceLimitX96: fromCurrency === tokenOptions[0].value ? MIN_SQRT_PRICE_LIMIT : MAX_SQRT_PRICE_LIMIT, // unlimited impact
      },
      {
        withdrawTokens: true,
        settleUsingTransfer: true,
      },
      "0x0", // TODO: support hookData
    ],
  });

  const {
    data: poolLiquidity,
    isLoading: isLoadingLiq,
    isError: isErrorLiq,
  } = usePoolManagerGetLiquidity({
    address: "0x565506C573abFE24Eb6abb7c0D8C809aCe1f638D",
    args: ["0xadd0d7bffbfdc526544c1cf8f069a0ffc255b570212d7139c2ba11cac3f1b644"],
  });

  const {
    data: poolData,
    isLoading: isLoadingPool,
    isError: isErrorPool,
  } = usePoolManagerPools({
    address: "0x565506C573abFE24Eb6abb7c0D8C809aCe1f638D",
    args: ["0xadd0d7bffbfdc526544c1cf8f069a0ffc255b570212d7139c2ba11cac3f1b644"],
  });

  const {
    data: Token0Data,
    isLoading: isLoadingToken0,
    isError: isErrorToken0,
  } = useErc20Name({
    address: "0x2dafbdf11a8cf84c372539a38d781d8248399ae3",
  });

  const {
    data: Token1Data,
    isLoading: isLoadingToken1,
    isError: isErrorToken1,
  } = useErc20Name({
    address: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4",
  });

  // update fromCurrency and toCurrency

  useEffect(() => {
    if (!isLoadingToken0 && !isErrorToken0) {
      setFromCurrency(Token0Data!);
    }
    if (!isLoadingToken1 && !isErrorToken1) {
      setToCurrency(Token1Data!);
    }
  }, [Token0Data && Token1Data]);

  const handleSwap = () => {
    console.log(fromCurrency);
    swap.writeAsync().then(() => {
      console.log("Swap successful");
    });
    // TODO: better notification for success
  };

  return (
    <div className="card shadow-2xl p-6 bg-white rounded-xl border-2 border-pink-400 min-w-[34rem] max-w-xl transition-shadow hover:shadow-none">
      <div className="space-y-6">
        <Tabs key={"pink"} color={"danger"} aria-label="Tabs" radius="full">
          <Tab key="swap" title="Swap" />
          <Tab key="liquidity" title="Liquidity" />
        </Tabs>

        {PoolKeyId(swapFee, setSwapFee, tickSpacing, setTickSpacing, hookAddress, setHookAddress)}

        <div className="grid grid-cols-2 gap-4">
          <TokenDropdown
            label="From"
            tooltipText={"The token you are sending"}
            value={"TODO: UNUSED"}
            options={tokenOptions}
            onChange={e => {
              setFromCurrency(tokenOptions[e.target.value as number].value);
              fromTokenAllowance.refetch();
            }}
          />
          <TokenDropdown
            label="To"
            tooltipText="The token you are receiving"
            value={tokenOptions[1].value}
            options={tokenOptions}
            onChange={e => setToCurrency(e.target.value)}
          />
          <div className="flex flex-col justify-end">
            <input
              type="number"
              className="input input-bordered w-full mt-6"
              placeholder="Amount"
              value={fromAmount}
              onChange={e => setFromAmount(e.target.value)}
            />
          </div>
        </div>

        {fromTokenAllowance.data === 0n && (
          <button
            className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
            onClick={() => tokenApprove.writeAsync().then(() => fromTokenAllowance.refetch())}
          >
            Approve {fromCurrency === tokenOptions[0].value ? tokenOptions[0].label : tokenOptions[1].label}
          </button>
        )}

        <button
          className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
          onClick={handleSwap}
        >
          Swap
        </button>

        <div className="border-t-2 border-gray-200 pt-4 mt-4">
          <div className="grid grid-rows-3 gap-4 text-sm">
            <div className="flex items-center justify-between">
              <span>Price:</span>
              <span className="font-bold ml-2">
                {" "}
                {/* {!isLoadingPool && !isErrorPool ? poolData[0].sqrtPriceX96.toString() : "NaN"} */}
                {!isLoadingPool && !isErrorPool ? convertSqrtPriceX96ToPrice(poolData[0].sqrtPriceX96) : "10"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Liquidity:</span>
              <span className="font-bold ml-2">{!isLoadingLiq && !isErrorLiq ? poolLiquidity?.toString() : "NaN"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Fee:</span>
              <span className="font-bold ml-2">
                {!isLoadingPool && !isErrorPool ? poolData[0].protocolFees : "NaN"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapComponent;
