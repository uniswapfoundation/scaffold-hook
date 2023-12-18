import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NumericInput } from "../base/numeric-input";
import { PoolKeyId } from "../base/pool-key";
import { TokenDropdown } from "../base/token-dropdown";
import { parseEther } from "viem";
import { useAccount, useChainId, useToken, useWaitForTransaction } from "wagmi";
import {
  counterAddress,
  poolSwapTestAddress,
  useErc20Allowance,
  useErc20Approve,
  usePoolSwapTestSwap,
} from "~~/generated/generated";
import { TOKEN_ADDRESSES } from "~~/utils/config";
import { BLANK_TOKEN, MAX_SQRT_PRICE_LIMIT, MAX_UINT, MIN_SQRT_PRICE_LIMIT, ZERO_ADDR } from "~~/utils/constants";

function SwapComponent() {
  const { address } = useAccount();
  const chainId = useChainId();

  const tokens = TOKEN_ADDRESSES.map(address => useToken({ address: address[chainId as keyof typeof address] }));
  console.log("🚀 ~ file: swapComponent.tsx:22 ~ SwapComponent ~ tokens:", tokens);

  const swapRouterAddress = poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress];

  const [fromCurrency, setFromCurrency] = useState(BLANK_TOKEN.address);
  const [toCurrency, setToCurrency] = useState(BLANK_TOKEN.address);
  const [fromAmount, setFromAmount] = useState("");

  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookData, setHookData] = useState<string>(""); // New state for custom hook data
  const [hookAddress, setHookAddress] = useState<`0x${string}`>(
    counterAddress[chainId as keyof typeof counterAddress] ?? ZERO_ADDR,
  );

  //swap status
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapError, setSwapError] = useState("");
  const [swapSuccess, setSwapSuccess] = useState(false);

  // Use state hook to hold the transaction hash
  const [txHash, setTxHash] = useState<`0x${string}`>("0x00");

  // Use the useWaitForTransaction hook from 'wagmi' to get the transaction receipt
  const { data: txReceipt, isSuccess: isTxConfirmed } = useWaitForTransaction({
    hash: txHash,
  });

  const fromTokenAllowance = useErc20Allowance({
    address: fromCurrency,
    args: [address ?? "0x0", swapRouterAddress],
  });

  const tokenApprove = useErc20Approve({
    address: fromCurrency,
    args: [swapRouterAddress, MAX_UINT],
  });

  const swap = usePoolSwapTestSwap();

  const handleSwap = async () => {
    setIsSwapping(true);
    setSwapError("");
    setSwapSuccess(false);

    try {
      // Execute the swap
      const result = await swap.writeAsync({
        args: [
          {
            currency0: fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? fromCurrency : toCurrency,
            currency1: fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? toCurrency : fromCurrency,
            fee: Number(swapFee),
            tickSpacing: Number(tickSpacing),
            hooks: hookAddress,
          },
          {
            zeroForOne: fromCurrency.toLowerCase() < toCurrency.toLowerCase(),
            amountSpecified: parseEther(fromAmount), // TODO: assumes tokens are always 18 decimals
            sqrtPriceLimitX96:
              fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? MIN_SQRT_PRICE_LIMIT : MAX_SQRT_PRICE_LIMIT, // unlimited impact
          },
          {
            withdrawTokens: true,
            settleUsingTransfer: true,
            currencyAlreadySent: false
          },
          hookData as `0x${string}`,
        ],
      });

      // Set the transaction hash for waiting on the transaction to be mined
      setTxHash(result.hash);
      console.log("Swap initiated, transaction hash:", result.hash);

      // You might want to show transaction pending message until the transaction is confirmed
    } catch (error) {
      setIsSwapping(false);
      setSwapError(error.message || "An error occurred during the swap.");
      console.error("Swap failed:", error);
    }
  };

  useEffect(() => {
    setHookAddress(counterAddress[chainId as keyof typeof counterAddress] ?? ZERO_ADDR);
  }, [chainId]);

  // Success message once the transaction has been confirmed on the blockchain
  useEffect(() => {
    if (isTxConfirmed && txReceipt) {
      setIsSwapping(false);
      setSwapSuccess(true);
      console.log("Swap confirmed, transaction receipt:", txReceipt);
    }
  }, [isTxConfirmed, txReceipt]);

  return (
    <div className="card shadow-2xl p-6 bg-white rounded-xl border-2 border-pink-400 min-w-[34rem] max-w-xl transition-shadow hover:shadow-none">
      <div className="space-y-6">
        <PoolKeyId
          currency0={fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? fromCurrency : toCurrency}
          currency1={fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? toCurrency : fromCurrency}
          swapFee={swapFee}
          setSwapFee={setSwapFee}
          tickSpacing={tickSpacing}
          setTickSpacing={setTickSpacing}
          hookAddress={hookAddress}
          setHookAddress={setHookAddress}
        />

        <div className="grid grid-cols-2 gap-4 mb-4 ">
          <TokenDropdown
            label="From"
            tooltipText={"The token you are sending"}
            options={tokens.map(token => token.data ?? BLANK_TOKEN)}
            onChange={e => {
              setFromCurrency(e.target.value);
              console.log("🚀 ~ file: swapComponent.tsx:107 ~ SwapComponent ~ e:", e.target);
              fromTokenAllowance.refetch();
            }}
          />
          <TokenDropdown
            label="To"
            tooltipText="The token you are receiving"
            options={tokens.map(token => token.data ?? BLANK_TOKEN)}
            onChange={e => setToCurrency(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full my-4">
        <NumericInput
          type="number"
          placeholder="Swap Amount"
          tooltipText="Transaction amount for swapping tokens."
          value={fromAmount}
          onChange={e => setFromAmount(e.target.value)}
        />

        <NumericInput
          type="string"
          placeholder="Hook Data"
          tooltipText="Optional custom hook data in hexadecimal format."
          value={hookData}
          onChange={e => setHookData(e.target.value)}
        />

        {fromCurrency !== BLANK_TOKEN.address && fromTokenAllowance.data === 0n && (
          <button
            className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
            onClick={() => tokenApprove.writeAsync().then(() => fromTokenAllowance.refetch())}
          >
            Approve {tokens.find(token => token.data?.address === fromCurrency)?.data?.symbol}
          </button>
        )}

        {/* SHow approved if allowance > 0 */}
        {fromCurrency !== BLANK_TOKEN.address && fromTokenAllowance.data! > 0n && (
          <div className="flex justify-between items-center p-3 bg-green-100 rounded-full border border-green-200 mt-10">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-md font-semibold text-green-600">Approved</span>
            </div>
            <div className="flex items-center">
              <span className="text-md font-semibold text-green-600">
                {tokens.find(token => token.data?.address === fromCurrency)?.data?.symbol}
              </span>
            </div>
          </div>
        )}

        <div className="mt-4">
          {isSwapping && !isTxConfirmed && (
            <div style={{ fontFamily: "monospace" }} className="alert alert-info overflow-auto">
              Swap initiated. Waiting for confirmation...
            </div>
          )}
          {swapError && (
            <div style={{ fontFamily: "monospace" }} className="alert alert-error overflow-auto">
              <div>
                <label>Error: {swapError}</label>
              </div>
            </div>
          )}
          {isTxConfirmed && (
            <div style={{ fontFamily: "monospace" }} className="alert alert-success overflow-auto">
              <div>
                <label>Swap successful! 🎉</label>
                <pre>Transaction Hash: {txHash}</pre>
                <span
                  className="font-mono 
                  text-sm 
                  text-blue-600 
                  hover:underline 
                  cursor-pointer 
                  transition-colors
                "
                >
                  {/* View Swap events take you to debug page */}
                  <Link href={`/debug`}>View Swap events</Link>
                </span>
              </div>
            </div>
          )}
        </div>

        <button
          className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
          onClick={handleSwap}
          disabled={
            isSwapping ||
            fromCurrency === BLANK_TOKEN.address ||
            toCurrency === BLANK_TOKEN.address ||
            fromAmount === ""
          }
        >
          {isSwapping ? "Swapping..." : "Swap"}
        </button>
      </div>
    </div>
  );
}

export default SwapComponent;
