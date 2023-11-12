import { useState } from "react";
import SwapComponent from "./swapComponent";
import { MetaHeader } from "~~/components/MetaHeader";

interface PoolInput {
  currency0: string;
  currency1: string;
  fee: number;
  tickSpacing: number;
  hooks: string;
  poolID: string;
}

const SwapUI = () => {
  const [poolKey, setPoolKey] = useState<PoolInput>();

  return (
    <>
      <MetaHeader title="Swap UI | Uniswap Project" description="Swap and manage your tokens seamlessly." />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <SwapComponent poolKey={poolKey} />
      </div>
    </>
  );
};

export default SwapUI;
