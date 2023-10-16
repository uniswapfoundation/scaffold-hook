import { Switch } from "@nextui-org/react";
import React, { useState } from "react";

function SwapComponent() {
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("DAI");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [liquidityAvailable, setLiquidityAvailable] = useState("1000 ETH");
  const [fee, setFee] = useState("0.3%");
  const [slippage, setSlippage] = useState("0.2%");

  const handleSwap = () => {
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
        <div className="tabs tabs-boxed">
          <div className="tab">Swap</div>
          <div className="tab">Liquidity</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-end">
            <label className="label text-left block">
              <span className="label-text">From:</span>
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
            <input
              type="number"
              className="input input-bordered w-full mt-6"
              placeholder="Amount"
              value={fromAmount}
              onChange={e => setFromAmount(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-end">
            <label className="label text-left block">
              <span className="label-text">To:</span>
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
          <div className="flex flex-col justify-end">
            <input
              type="number"
              className="input input-bordered w-full mt-6"
              placeholder="Amount"
              value={toAmount}
              disabled
            />
          </div>
        </div>

        <button
          className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4"
          onClick={handleSwap}
        >
          Swap
        </button>

        <div className="border-t-2 border-gray-200 pt-4 mt-4">
          <div className="grid grid-rows-3 gap-4 text-sm">
            <div className="flex items-center justify-between">
              <span>Liquidity Available:</span>
              <span className="font-bold ml-2">{liquidityAvailable}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Fee:</span>
              <span className="font-bold ml-2">{fee}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Slippage:</span>
              <span className="font-bold ml-2">{slippage}</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-4">
          <button
            className="btn btn-outline w-1/2 hover:bg-indigo-100 hover:shadow-md transition-all"
            onClick={handleAddLiquidity}
          >
            Add Liquidity
          </button>
          <button
            className="btn btn-outline w-1/2 hover:bg-indigo-100 hover:shadow-md transition-all"
            onClick={handleRemoveLiquidity}
          >
            Remove Liquidity
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwapComponent;
