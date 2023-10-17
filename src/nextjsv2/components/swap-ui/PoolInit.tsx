import { MetaHeader } from "~~/components/MetaHeader";
import InitializeComponent from "./InitializeComponent";

const PoolInit = () => {
  
  return (
    <>
      <MetaHeader title="Swap UI | Uniswap Project" description="Swap and manage your tokens seamlessly." />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <InitializeComponent />
      </div>
    </>
  );
};

export default PoolInit;
