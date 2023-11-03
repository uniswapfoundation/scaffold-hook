import React, { useState } from "react";
import { TokenDropdown } from "../base/token-dropdown";
import { Tooltip } from "@nextui-org/react";
import { useChainId, useToken } from "wagmi";
import { FetchTokenResult } from "wagmi/dist/actions";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { counterAddress, usePoolManagerInitialize } from "~~/generated/generated";
import { TOKEN_ADDRESSES } from "~~/utils/config";
import { BLANK_TOKEN } from "~~/utils/constants";
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
  const chainId = useChainId();

  const tokens = TOKEN_ADDRESSES.map(address => useToken({ address: address[chainId as keyof typeof address] }));

  const [currency0, setCurrency0] = useState<FetchTokenResult>(tokens[0]?.data ?? BLANK_TOKEN);
  const [currency1, setCurrency1] = useState<FetchTokenResult>(tokens[1]?.data ?? BLANK_TOKEN);

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
    // sort tokens
    const c0 = currency0.address < currency1.address ? currency0.address : currency1.address;
    const c1 = currency0.address < currency1.address ? currency1.address : currency0.address;
    console.log({ c0, c1 });
    await write({
      args: [
        {
          currency0: c0,
          currency1: c1,
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
        Token0: {c0}
        <br />
        Token1: {c1}
        <br />
        Swap Fee: {swapFee.toString()}
        <br />
        Tick Spacing: {tickSpacing.toString()}
        <br />
        Hook Address: {hookAddress}
        <br />
      </div>,
    );
  };

  return (
    <div className="card shadow-2xl p-6 bg-white rounded-xl border-2 border-pink-400 min-w-[34rem] max-w-xl transition-shadow hover:shadow-none">
      <h2 className="text-2xl font-bold mb-4">Initialize a New Pool</h2>
      <p className="text-gray-600 mb-6">Fill out the details below to create a new liquidity pool.</p>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <TokenDropdown
            label="Token 0"
            tooltipText="The first token in the liquidity pool."
            options={tokens.map(token => token.data ?? BLANK_TOKEN)}
            onChange={e =>
              setCurrency0(tokens.find(token => token.data?.address === e.target.value)?.data ?? BLANK_TOKEN)
            }
          />
          <TokenDropdown
            label="Token 1"
            tooltipText="The second token in the liquidity pool."
            options={tokens.map(token => token.data ?? BLANK_TOKEN)}
            onChange={e =>
              setCurrency1(tokens.find(token => token.data?.address === e.target.value)?.data ?? BLANK_TOKEN)
            }
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
