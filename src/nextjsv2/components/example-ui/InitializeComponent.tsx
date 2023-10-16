import { Switch } from "@nextui-org/react";
import React, { useState } from "react";

function InitializeComponent() {
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("DAI");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [liquidityAvailable, setLiquidityAvailable] = useState("1000 ETH");
  const [fee, setFee] = useState("0.3%");
  const [slippage, setSlippage] = useState("0.2%");

  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookAddress, setHookAddress] = useState("");

  const handleInitialize = () => {
    // Implement swap logic here
  };

  const handleAddLiquidity = () => {
    // Implement add liquidity logic here
  };

  const handleRemoveLiquidity = () => {
    // Implement remove liquidity logic here
  };

  return (
    <div className="card shadow-2xl p-6 bg-white rounded-xl border-2 border-pink-400 min-w-[34rem] max-w-xl transition-shadow hover:shadow-none">
      <div className="space-y-6">

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-end">
            <label className="label text-left block">
              <span className="label-text">Token0</span>
            </label>
            <select
              className="select select-bordered w-full mt-2"
              value={fromCurrency}
              onChange={e => setFromCurrency(e.target.value)}
            >
              <option>ETH</option>
              <option>DAI</option>
            </select>
          </div>
          <div className="flex flex-col justify-end">
            <label className="label text-left block">
              <span className="label-text">Token1</span>
            </label>
            <select
              className="select select-bordered w-full mt-2"
              value={toCurrency}
              onChange={e => setToCurrency(e.target.value)}
            >
              <option>DAI</option>
              <option>ETH</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-end">
            <input
              type="number"
              className="input input-bordered w-full mt-6"
              placeholder="Fee"
              value={swapFee.toString()}
              onChange={e => setSwapFee(BigInt(e.target.value))}
            />
          </div>

          <div className="flex flex-col justify-end">
            <input
              type="number"
              className="input input-bordered w-full mt-6"
              placeholder="Fee"
              value={tickSpacing.toString()}
              onChange={e => setTickSpacing(BigInt(e.target.value))}
            />
          </div>

          <div className="flex flex-col justify-end">
            <input
              type="string"
              className="input input-bordered w-full mt-6"
              placeholder="Hook Address"
              value={hookAddress}
              onChange={e => setHookAddress(e.target.value)}
            />
          </div>

        <button
          className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
          onClick={handleInitialize}
        >
          Initialize
        </button>
      </div>
    </div>
  );
}

export default InitializeComponent;
