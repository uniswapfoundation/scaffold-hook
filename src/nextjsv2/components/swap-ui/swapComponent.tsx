import React, { useState } from "react";
import { PoolKeyId } from "../base/pool-key";
import { TokenDropdown } from "../base/token-dropdown";
import { Tab, Tabs } from "@nextui-org/react";
import { parseEther } from "viem";
import { useAccount, useChainId, useToken } from "wagmi";
import {
  counterAddress,
  poolSwapTestAddress,
  useErc20Allowance,
  useErc20Approve,
  usePoolSwapTestSwap,
} from "~~/generated/generated";
import { TOKEN_ADDRESSES } from "~~/utils/config";
import { BLANK_TOKEN, MAX_SQRT_PRICE_LIMIT, MAX_UINT, MIN_SQRT_PRICE_LIMIT } from "~~/utils/constants";

function SwapComponent({ poolKey }: { poolKey: any }) {
  const { address } = useAccount();
  const chainId = useChainId();

  const tokens = TOKEN_ADDRESSES.map(address => useToken({ address: address[chainId as keyof typeof address] }));

  const swapRouterAddress = poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress];

  const [fromCurrency, setFromCurrency] = useState(BLANK_TOKEN.address);
  const [toCurrency, setToCurrency] = useState(BLANK_TOKEN.address);
  const [fromAmount, setFromAmount] = useState("");

  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookAddress, setHookAddress] = useState<`0x${string}`>(counterAddress[chainId as keyof typeof counterAddress]);

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
        currency0: fromCurrency < toCurrency ? fromCurrency : toCurrency,
        currency1: fromCurrency < toCurrency ? toCurrency : fromCurrency,
        fee: Number(swapFee),
        tickSpacing: Number(tickSpacing),
        hooks: hookAddress,
      },
      {
        zeroForOne: fromCurrency < toCurrency,
        amountSpecified: parseEther(fromAmount), // TODO: assumes tokens are always 18 decimals
        sqrtPriceLimitX96: fromCurrency < toCurrency ? MIN_SQRT_PRICE_LIMIT : MAX_SQRT_PRICE_LIMIT, // unlimited impact
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

        <PoolKeyId
          swapFee={swapFee}
          setSwapFee={setSwapFee}
          tickSpacing={tickSpacing}
          setTickSpacing={setTickSpacing}
          hookAddress={hookAddress}
          setHookAddress={setHookAddress}
        />

        <div className="grid grid-cols-2 gap-4">
          <TokenDropdown
            label="From"
            tooltipText={"The token you are sending"}
            options={tokens.map(token => token.data ?? BLANK_TOKEN)}
            onChange={e => {
              setFromCurrency(e.target.value);
              fromTokenAllowance.refetch();
            }}
          />
          <TokenDropdown
            label="To"
            tooltipText="The token you are receiving"
            options={tokens.map(token => token.data ?? BLANK_TOKEN)}
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
            Approve {tokens.find(token => token.data?.address === fromCurrency)?.data?.symbol}
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
