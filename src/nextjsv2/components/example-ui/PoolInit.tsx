import { Button, Card, Divider, Input, Select, SelectItem, Spacer, Tab, Tabs, Text } from "@nextui-org/react";
import { MetaHeader } from "~~/components/MetaHeader";
import SwapComponent from "./swapComponent";
import { useState } from "react";
import { usePoolManagerGetLiquidity, usePoolManagerPools } from "~~/generated/generatedTypes";
import InitializeComponent from "./InitializeComponent";

interface PoolInput {
  currency0: string;
  currency1: string;
  fee: number;
  tickSpacing: number;
  hooks: string;
}

const PoolInit = () => {
  const [pools, setPools] = useState<PoolInput[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [newPoolID, setNewPoolID] = useState<PoolInput>();

  const addPool = () => {
    const newPool = newPoolID!;
    setPools(prevPools => [...prevPools, newPool]);
    setShowInput(false);
    setNewPoolID(undefined);
  };

  const {
    data: poolManagerPools,
    isLoading,
    isError,
  } = usePoolManagerPools({
    address: "0x565506C573abFE24Eb6abb7c0D8C809aCe1f638D",
    args: ["0xfd5760f27378b822bb5a39d2b76e3523cc538841e47ca97b08ee1a34a037ad89"],
  });

  const {
    data: poolManagerPools2,
    isLoading: isLoading2,
    isError: isError2,
  } = usePoolManagerGetLiquidity({
    address: "0x565506C573abFE24Eb6abb7c0D8C809aCe1f638D",
    args: ["0xfd5760f27378b822bb5a39d2b76e3523cc538841e47ca97b08ee1a34a037ad89"],
  });

  console.log(poolManagerPools2, "poolManagerPools2", isLoading2, isError2);

  console.log(poolManagerPools, "poolManagerPools", isLoading, isError);

  return (
    <>
      <MetaHeader title="Swap UI | Uniswap Project" description="Swap and manage your tokens seamlessly." />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex items-center w-full max-w-xl px-6 py-4 ">
          <Select
            label="Select a pool"
            placeholder="Select a pool"
            labelPlacement="outside"
            color="danger"
            className="flex-grow"
            variant="bordered"
          >
            {pools.map(pool => (
              <SelectItem key={pool.value} value={pool.value}>
                {pool.label}
              </SelectItem>
            ))}
          </Select>
          <Button className=" align-bottom self-end ml-2" variant="ghost" onClick={() => setShowInput(!showInput)}>
            Add
          </Button>
        </div>

        {showInput && (
          <form onSubmit={addPool} className="max-w-xl w-full">
            <div className="flex items-center w-full max-w-xl pb-4 px-6 gap-2">
              <Input
                variant="bordered"
                placeholder="Enter Pool ID"
                value={newPoolID}
                onChange={e => setNewPoolID(e.target.value)}
                isRequired
                type="text"
              />
              <Button variant="ghost" color="success" type="submit">
                Confirm
              </Button>
            </div>
          </form>
        )}

        <InitializeComponent />
      </div>
    </>
  );
};

export default PoolInit;
