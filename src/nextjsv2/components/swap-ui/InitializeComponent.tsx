import React, { useState } from "react";
import deployedContracts from "~~/generated/deployedContracts";
import { useErc20Read, usePoolManagerInitialize } from "~~/generated/generated";
import { notification } from "~~/utils/scaffold-eth";

function InitializeComponent() {
  // TODO: remove all the hardcoded addresses
  const token0Addr = "0x2dafbdf11a8cf84c372539a38d781d8248399ae3";
  const token1Addr = "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4";

  const getToken0Name = useErc20Read({
    address: token0Addr,
    functionName: "name",
  });

  const getToken1Name = useErc20Read({
    address: token1Addr,
    functionName: "name",
  });

  const [token0, setToken0] = useState(getToken0Name.data);
  const [token1, setToken1] = useState(getToken1Name.data);

  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookAddress, setHookAddress] = useState(deployedContracts[31337][0].contracts.Counter.address);

  const {
    writeAsync: write,
    isLoading: isLoadingInitialize,
    isError: isErrorInitialize,
    error: errorInitialize,
    data: dataInitialize,
  } = usePoolManagerInitialize({
    address: "0x565506C573abFE24Eb6abb7c0D8C809aCe1f638D",
  });

  const handleInitialize = async () => {
    try {
      await write({
        args: [
          {
            currency0: token0Addr,
            currency1: token1Addr,
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
          Token0: {getToken0Name.data}
          <br />
          Token1: {getToken1Name.data}
          <br />
          Swap Fee: {swapFee.toString()}
          <br />
          Tick Spacing: {tickSpacing.toString()}
          <br />
          Hook Address: {hookAddress}
          <br />
          Tx ID: {dataInitialize.hash}
        </div>,
      );
    } catch (error) {
      notification.error(
        <div className="text-left">
          Error Initializing Pool
          {errorInitialize?.message}
        </div>,
      );
    }
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
              value={token0}
              onChange={e => setToken0(e.target.value)}
            >
              <option>{getToken0Name.data}</option>
              <option>{getToken1Name.data}</option>
            </select>
          </div>
          <div className="flex flex-col justify-end">
            <label className="label text-left block">
              <span className="label-text">Token1</span>
            </label>
            <select
              className="select select-bordered w-full mt-2"
              value={token1}
              onChange={e => setToken1(e.target.value)}
            >
              <option>{getToken0Name.data}</option>
              <option>{getToken1Name.data}</option>
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
