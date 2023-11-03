import React, { useState } from "react";
import { TokenDropdown } from "../base/token-dropdown";
import { Tooltip } from "@nextui-org/react";
import { useChainId, useToken } from "wagmi";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { counterAddress, usePoolManagerInitialize } from "~~/generated/generated";
import { notification } from "~~/utils/scaffold-eth";

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

function InitializePoolButton({ isLoading, onClick }) {
  return (
    <button
      className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? "Initializing..." : "Initialize Pool"}
    </button>
  );
}

function InitializeComponent() {
  const tokenOptions = [
    { value: "0x2dafbdf11a8cf84c372539a38d781d8248399ae3", label: "Token0" },
    { value: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4", label: "Token1" },
  ];
  const chainId = useChainId();
  const [token0, setToken0] = useState(undefined);
  const [token1, setToken1] = useState(undefined);
  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookAddress, setHookAddress] = useState(counterAddress[chainId as keyof typeof counterAddress]);

  const {
    writeAsync: write,
    isLoading: isLoadingInitialize,
    isError: isErrorInitialize,
    error: errorInitialize,
    data: dataInitialize,
  } = usePoolManagerInitialize();

  const handleInitialize = async () => {
    try {
      console.log(
        "Initializing pool with the following parameters:",
        tokenOptions[token0].value,
        tokenOptions[token1].value,
        Number(swapFee),
        Number(tickSpacing),
        hookAddress,
      );
      await write({
        args: [
          {
            currency0: tokenOptions[token0].value,
            currency1: tokenOptions[token1].value,
            fee: Number(swapFee),
            tickSpacing: Number(tickSpacing),
            hooks: hookAddress,
          },
          79228162514264337593543950336n,
          "0x0",
        ],
      });
      notification.success(
        <div className="text-left">
          Initialized Pool
          <br />
          Token0: {tokenOptions[token0].value}
          <br />
          Token1: {tokenOptions[token1].value}
          <br />
          Swap Fee: {swapFee.toString()}
          <br />
          Tick Spacing: {tickSpacing.toString()}
          <br />
          Hook Address: {hookAddress}
          <br />
        </div>,
      );
    } catch (error) {
      notification.error(
        <div className="text-left">
          Error Initializing Pool
          {error.message}
        </div>,
      );
    }
  };

  return (
    <div className="card shadow-2xl p-6 bg-white rounded-xl border-2 border-pink-400 min-w-[34rem] max-w-xl transition-shadow hover:shadow-none">
      <h2 className="text-2xl font-bold mb-4">Initialize a New Pool</h2>
      <p className="text-gray-600 mb-6">Fill out the details below to create a new liquidity pool.</p>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <TokenDropdown
            label="Base Token"
            tooltipText="The first token in the liquidity pool."
            options={tokenOptions}
            onChange={e => setToken0(e.target.value)}
          />
          <TokenDropdown
            label="Quote Token"
            tooltipText="The second token in the liquidity pool."
            options={tokenOptions}
            onChange={e => setToken1(e.target.value)}
          />
        </div>
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

        <InitializePoolButton isLoading={isLoadingInitialize} onClick={handleInitialize} />
      </div>
    </div>
  );
}

export default InitializeComponent;
