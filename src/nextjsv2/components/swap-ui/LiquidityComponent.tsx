import React, { useState } from "react";
import { NumericInput } from "../base/numeric-input";
import { PoolKeyId } from "../base/pool-key";
import { formatEther, parseEther } from "viem";
import { useAccount, useChainId } from "wagmi";
import {
  counterAddress,
  poolModifyPositionTestAddress,
  useErc20Allowance,
  useErc20Approve,
  usePoolModifyPositionTestModifyPosition,
} from "~~/generated/generated";
import { TOKEN_ADDRESSES } from "~~/utils/config";
import { MAX_UINT } from "~~/utils/constants";
import { notification } from "~~/utils/scaffold-eth";

function LiquidityComponent() {
  const chainId = useChainId();
  const { address: walletAddress } = useAccount();

  // Token & Wallet Configuration
  // TODO: allow users to select tokens?
  const token0Addr = TOKEN_ADDRESSES[0][chainId as keyof (typeof TOKEN_ADDRESSES)[0]];
  const token1Addr = TOKEN_ADDRESSES[1][chainId as keyof (typeof TOKEN_ADDRESSES)[1]];
  const lpRouterAddress = poolModifyPositionTestAddress[chainId as keyof typeof poolModifyPositionTestAddress];

  // State Variables
  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookAddress, setHookAddress] = useState<`0x${string}`>(counterAddress[chainId as keyof typeof counterAddress]);

  const [tickLower, setTickLower] = useState(-(tickSpacing * 10n));
  const [tickUpper, setTickUpper] = useState(tickSpacing * 10n);
  const [liquidityDelta, setLiquidityDelta] = useState(10000000000000000000n);
  const [hookData, setHookData] = useState<`0x${string}`>("0x");

  const { data: token0Allowance, refetch: refetchT0Allowance } = useErc20Allowance({
    address: token0Addr,
    args: [walletAddress ?? "0x0", lpRouterAddress],
  });

  const { data: token1Allowance, refetch: refetchT1Allowance } = useErc20Allowance({
    address: token1Addr,
    args: [walletAddress ?? "0x0", lpRouterAddress],
  });

  const { writeAsync: writeToken0Approve, error: errorToken0Approve } = useErc20Approve({
    address: token0Addr,
    args: [lpRouterAddress, MAX_UINT],
  });

  const { writeAsync: writeToken1Approve, error: errorToken1Approve } = useErc20Approve({
    address: token1Addr,
    args: [lpRouterAddress, MAX_UINT],
  });

  const { writeAsync: writeModifyPosition, error: errorModifyPosition } = usePoolModifyPositionTestModifyPosition({
    args: [
      {
        currency0: token0Addr,
        currency1: token1Addr,
        fee: Number(swapFee),
        tickSpacing: Number(tickSpacing),
        hooks: hookAddress,
      },
      {
        tickLower: Number(tickLower),
        tickUpper: Number(tickUpper),
        liquidityDelta: liquidityDelta,
      },
      hookData || "0x00",
    ],
  });

  const handleInitialize = async () => {
    try {
      await writeModifyPosition();
    } catch (error) {
      notification.error(
        <div className="text-left">
          Error Provisioning Liquidity
          {errorModifyPosition?.message}
        </div>,
      );
    }
  };

  const handleToken0Approve = async () => {
    try {
      await writeToken0Approve();
      refetchT0Allowance();
    } catch (error) {
      notification.error(
        <div className="text-left">
          Error Approving Token0
          {errorToken0Approve?.message}
        </div>,
      );
    }
  };

  const handleToken1Approve = async () => {
    try {
      await writeToken1Approve();
      refetchT1Allowance();
    } catch (error) {
      notification.error(
        <div className="text-left">
          Error Approving Token1
          {errorToken1Approve?.message}
        </div>,
      );
    }
  };

  return (
    <div className="card shadow-2xl p-6 bg-white rounded-xl border-2 border-pink-400 min-w-[34rem] max-w-xl transition-shadow hover:shadow-none">
      <h2 className="text-2xl font-bold mb-2">Provision Liquidity</h2>
      <p className="text-gray-600 mb-6">Fill out the details below to provision liquidity to a pool. .</p>
      <PoolKeyId
        swapFee={swapFee}
        setSwapFee={setSwapFee}
        tickSpacing={tickSpacing}
        setTickSpacing={setTickSpacing}
        hookAddress={hookAddress}
        setHookAddress={setHookAddress}
      />

      <div className="grid grid-cols-2 gap-2">
        <NumericInput
          type="number"
          placeholder="Lower Bound"
          tooltipText="Lower bound of the price range."
          value={Number(tickLower)}
          onChange={e => setTickLower(BigInt(e.target.value))}
        />

        <NumericInput
          type="number"
          placeholder="Upper Bound"
          tooltipText="Upper bound of the price range."
          value={Number(tickUpper)}
          onChange={e => setTickUpper(BigInt(e.target.value))}
        />
      </div>

      <NumericInput
        type="number"
        placeholder="Liquidity Delta"
        tooltipText="Amount of liquidity to add/remove."
        value={Number(formatEther(liquidityDelta))}
        onChange={e => setLiquidityDelta(parseEther(String(e.target.value)))}
      />

      <NumericInput
        type="text"
        placeholder="Hook Data"
        tooltipText="Data to pass to the hook."
        value={hookData}
        onChange={e => setHookData(e.target.value as `0x${string}`)}
      />

      <div className="grid w-full  grid-cols-2  gap-4">
        {token0Allowance === 0n && (
          <button
            className="btn  btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
            onClick={handleToken0Approve}
          >
            Approve Token0
          </button>
        )}

        {token1Allowance === 0n && (
          <button
            className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
            onClick={handleToken1Approve}
          >
            Approve Token1
          </button>
        )}
      </div>
      <button
        className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
        onClick={handleInitialize}
      >
        Provision
      </button>
    </div>
  );
}

export default LiquidityComponent;
