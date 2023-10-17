import { useState } from "react";
import SwapComponent from "./swapComponent";
import { Button, Card, Divider, Input, Select, SelectItem, Spacer, Tab, Tabs, Text } from "@nextui-org/react";
import { MetaHeader } from "~~/components/MetaHeader";
import { usePoolManagerGetLiquidity, usePoolManagerPools } from "~~/generated/generatedTypes";

interface PoolInput {
  currency0: string;
  currency1: string;
  fee: number;
  tickSpacing: number;
  hooks: string;
  poolID: string;
}

const SwapUI = () => {
  const [pools, setPools] = useState<PoolInput[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [newPoolID, setNewPoolID] = useState<string>();
  const [poolKey, setPoolKey] = useState<PoolInput>();
  const [poolKeySelected, setPoolKeySelected] = useState<PoolInput>();

  const addPool = () => {
    const newPool = newPoolID ? { ...poolKey, poolID: newPoolID } : poolKey;
    setPools([...pools, newPool]);
    setShowInput(false);
    setPoolKey(undefined);
    setNewPoolID(undefined);
  };

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
            onSelectionChange={key => {
              setPoolKeySelected(pools.find(pool => pool.poolID === key));
            }}
          >
            {pools.map(pool => (
              <SelectItem key={pool.poolID} value={pool.poolID}>
                {pool.poolID}
              </SelectItem>
            ))}
          </Select>
          <Button className=" align-bottom self-end ml-2" variant="ghost" onClick={() => setShowInput(!showInput)}>
            Add
          </Button>
        </div>

        {showInput && (
          <form onSubmit={addPool} className="max-w-xl w-full">
            <div className="flex items-end justify-end w-full max-w-xl pb-4 px-6 gap-2">
              <div className="flex flex-col w-full gap-2">
                <Input
                  variant="bordered"
                  placeholder="Enter Pool ID"
                  value={newPoolID}
                  onChange={e => setNewPoolID(e.target.value)}
                  isRequired
                  type="text"
                />
                <Input
                  variant="bordered"
                  placeholder="Enter PoolKey Tuple [currency0, currency1, fee, tickSpacing, hooksData]"
                  isRequired
                  type="text"
                  onChange={e => setPoolKey(JSON.parse(e.target.value) as PoolInput)}
                />
              </div>
              <Button variant="ghost" color="success" type="submit">
                Confirm
              </Button>
            </div>
          </form>
        )}

        <SwapComponent poolKey={poolKey} />
      </div>
    </>
  );
};

export default SwapUI;
