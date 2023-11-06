import { MetaHeader } from "~~/components/MetaHeader";
import LiquidityComponent from "./LiquidityComponent";

const LiquidityUI = () => {
  
  return (
    <>
      <MetaHeader title="Swap UI | Uniswap Project" description="Swap and manage your tokens seamlessly." />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <LiquidityComponent />
      </div>
    </>
  );
};

export default LiquidityUI;
