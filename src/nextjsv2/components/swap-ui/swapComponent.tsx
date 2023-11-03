import React, { useState } from "react";
import { TokenDropdown } from "./InitializeComponent";
import { PoolKeyId } from "./LiquidityComponent";
import { Tab, Tabs } from "@nextui-org/react";
import { parseEther } from "viem";
import { useAccount, useChainId } from "wagmi";
import {
  counterAddress,
  poolSwapTestAddress,
  useErc20Allowance,
  useErc20Approve,
  usePoolSwapTestSwap,
} from "~~/generated/generated";
import { MAX_SQRT_PRICE_LIMIT, MAX_UINT, MIN_SQRT_PRICE_LIMIT } from "~~/utils/constants";

function SwapComponent({ poolKey }: { poolKey: any }) {
  const { address } = useAccount();
  const chainId = useChainId();

  // TODO: remove all the hardcoded addresses
  const tokenOptions = [
    { value: "0x2dafbdf11a8cf84c372539a38d781d8248399ae3", label: "Token0" },
    { value: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4", label: "Token1" },
  ];

  const swapRouterAddress = poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress];

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromAmount, setFromAmount] = useState("");

  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookAddress, setHookAddress] = useState(counterAddress[chainId as keyof typeof counterAddress]);

  const fromTokenAllowance = useErc20Allowance({
    address: fromCurrency,
    args: [address ?? "0x0", swapRouterAddress],
  });

  const tokenApprove = useErc20Approve({
    address: fromCurrency,
    args: [swapRouterAddress, MAX_UINT],
  });

  const swap = usePoolSwapTestSwap({
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
      </div>
    </div>
  );
}

export default SwapComponent;
