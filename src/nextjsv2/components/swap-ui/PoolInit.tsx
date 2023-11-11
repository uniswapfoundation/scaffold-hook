import InitializeComponent from "./InitializeComponent";
import { MetaHeader } from "~~/components/MetaHeader";

const PoolInit = () => {
  return (
    <>
      <MetaHeader title="Init UI | Uniswap Hooks" description="Swap and manage your tokens seamlessly." />
      <div className="flex flex-col items-center justify-center  h-full  py-20 bg-gray-100">
        <InitializeComponent />
      </div>
    </>
  );
};

export default PoolInit;
