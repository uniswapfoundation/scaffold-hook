import React, { useState } from "react";
import { Divider, Select, SelectItem, Tooltip } from "@nextui-org/react";
import { formatEther, parseEther } from "viem";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import deployedContracts from "~~/generated/deployedContracts";
import {
  useErc20Allowance,
  useErc20Approve,
  useErc20Read,
  usePoolModifyPositionTestModifyPosition,
} from "~~/generated/generatedTypes";
import { MAX_UINT } from "~~/utils/constants";
import { notification } from "~~/utils/scaffold-eth";

function TokenDropdown({ label, tooltipText, value, options, onChange }) {
  return (
    <div className="flex flex-col justify-end">
      <label className="label text-left flex justify-between">
        <span className="label-text">{label}</span>
        <Tooltip content={tooltipText}>
          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Tooltip>
      </label>
      <Select
        onChange={onChange}
        placeholder="
      Select a token"
        variant="flat"
      >
        {options.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

function NumericInput({ type, placeholder, tooltipText, value, onChange }) {
  return (
    <div className="flex flex-col justify-end">
      <label className="label text-left  flex justify-between">
        <span className="label-text">{placeholder}</span>
        <Tooltip content={tooltipText}>
          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Tooltip>
      </label>
      {/* <Tooltip /> */}
      <input
        type={type}
        className="input input-bordered w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* <small className="text-gray-600">More info about {placeholder}.</small> */}
    </div>
  );
}

function LiquidityComponent() {
  // TODO: remove all the hardcoded addresses
  const tokenOptions = [
    { value: "0x2dafbdf11a8cf84c372539a38d781d8248399ae3", label: "Token0" },
    { value: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4", label: "Token1" },
  ];

  // Token & Wallet Configuration
  const token0Addr = tokenOptions[0].value;
  const token1Addr = tokenOptions[1].value;
  const walletAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const lpRouterAddress = deployedContracts[31337][0].contracts.PoolModifyPositionTest.address;

  // Fetch Token Names
  const getToken0Name = useErc20Read({ address: token0Addr, functionName: "name" });
  const getToken1Name = useErc20Read({ address: token1Addr, functionName: "name" });

  // State Variables
  const [token0, setToken0] = useState(0);
  const [token1, setToken1] = useState(1);

  // State Variables
  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookAddress, setHookAddress] = useState(deployedContracts[31337][0].contracts.Counter.address);

  const [tickLower, setTickLower] = useState(-(tickSpacing * 10n));
  const [tickUpper, setTickUpper] = useState(tickSpacing * 10n);
  const [liquidityDelta, setLiquidityDelta] = useState(10000000000000000000n);
  const [hookData, setHookData] = useState<`0x${string}`>();

  const { data: token0Allowance, refetch: refetchT0Allowance } = useErc20Allowance({
    address: token0Addr,
    args: [walletAddress, lpRouterAddress],
  });

  const { data: token1Allowance, refetch: refetchT1Allowance } = useErc20Allowance({
    address: token1Addr,
    args: [walletAddress, lpRouterAddress],
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
    address: lpRouterAddress,
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
      <div className="space-y-0">
        <div className="border-dashed border-pink-300 border p-4  hover:border-pink-500 hover:border-solid hover:shadow-sm hover:transition-all">
          <h3 className="text-lg font-normal mb-2">PoolKey Identifier</h3>

          <NumericInput
            type="number"
            placeholder="Swap Fee"
            tooltipText="Transaction fee for swapping tokens."
            value={swapFee.toString()}
            onChange={e => setSwapFee(BigInt(e.target.value))}
          />

          <NumericInput
            type="number"
            placeholder="Tick Spacing"
            tooltipText="The minimum price movement between ticks."
            value={tickSpacing.toString()}
            onChange={e => setTickSpacing(BigInt(e.target.value))}
          />

          <NumericInput
            type="text"
            placeholder="Hook Address"
            tooltipText="Smart contract address for custom logic."
            value={hookAddress}
            onChange={e => setHookAddress(e.target.value)}
          />
        </div>
        <Divider />

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col justify-end">
            <label className="label text-left block">
              <span className="label-text">Lower Bound</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full mt-6"
              placeholder="Lower Bound"
              value={Number(tickLower)}
              onChange={e => setTickLower(BigInt(e.target.value))}
            />
          </div>

          <div className="flex flex-col justify-end">
            <label className="label text-left block">
              <span className="label-text">Upper Bound</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full mt-6"
              placeholder="Upper Bound"
              value={Number(tickUpper)}
              onChange={e => setTickUpper(BigInt(e.target.value))}
            />
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <label className="label text-left block">
            <span className="label-text">Liquidity Amount</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full mt-6"
            placeholder="Liquidity Amount"
            value={formatEther(liquidityDelta)}
            onChange={e => setLiquidityDelta(parseEther(e.target.value))}
          />
        </div>

        <div className="flex flex-col justify-end">
          <input
            type="string"
            className="input input-bordered w-full mt-6"
            placeholder="(optional) Hook Data"
            value={hookData}
            onChange={e => setHookData(e.target.value as `0x${string}`)}
          />
        </div>

        {token0Allowance === 0n && (
          <button
            className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
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

        <button
          className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
          onClick={handleInitialize}
        >
          Provision
        </button>
      </div>
    </div>
  );
}

export default LiquidityComponent;
