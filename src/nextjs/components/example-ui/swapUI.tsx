import { Button, Card, Divider, Input, Select, SelectItem, Spacer, Tab, Tabs, Text } from "@nextui-org/react";
import { MetaHeader } from "~~/components/MetaHeader";

const SwapUI_New = () => {
  return (
    <>
      {/* <MetaHeader title="Swap UI | Uniswap Project" description="Swap and manage your tokens seamlessly." /> */}
      {/* <div className="flex items-center justify-center h-screen bg-gray-100">
        <Card isHoverable shadow="md" width="max-w-xl">
          <Tabs onChange={value => console.log(value)}>
            <Tab key="Swap" title="swap">
              <Spacer y={1} />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-end">
                   <Text>From:</Text> 
                  <Select placeholder="Choose token" defaultValue="ETH">
                    <SelectItem key="ETH" value="ETH">
                      ETH
                    </SelectItem>
                    <SelectItem key="DAI" value="DAI">
                      DAI
                    </SelectItem>
                  </Select>
                </div>
                <div className="flex flex-col justify-end">
                  <Input placeholder="Amount" />
                </div>
                <div className="flex flex-col justify-end">
                   <Text>To:</Text> 
                  <Select placeholder="Choose token" defaultValue="DAI">
                    <SelectItem value="DAI" key={"DAI"}>
                      DAI
                    </SelectItem>
                    <SelectItem value="ETH" key="ETH">
                      ETH
                    </SelectItem>
                  </Select>
                </div>
                <div className="flex flex-col justify-end">
                  <Input placeholder="Amount" disabled />
                </div>
              </div>
              <Spacer y={1} />
              <Button fullWidth color="primary">
                Swap
              </Button>
            </Tab>
           <Tab key="Liquidity" title="liquidity">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-end">
                  <Text>From:</Text>
                  <Select placeholder="Choose token" defaultValue="ETH">
                    <SelectItem key="ETH">ETH</SelectItem>
                    <SelectItem key="DAI">DAI</SelectItem>
                  </Select>
                </div>
                <div className="flex flex-col justify-end">
                  <Input placeholder="Amount" />
                </div>
                <div className="flex flex-col justify-end">
                  <Text>To:</Text>
                  <Select placeholder="Choose token" defaultValue="DAI">
                    <SelectItem value="DAI" key={"DAI"}>
                      DAI
                    </SelectItem>
                    <SelectItem value="ETH" key="ETH">
                      ETH
                    </SelectItem>
                  </Select>
                </div>
                <div className="flex flex-col justify-end">
                  <Input placeholder="Amount" disabled />
                </div>
              </div>
            </Tab> 
          </Tabs>
          <Divider />
          <Button fullWidth color="secondary">
            Add Liquidity
          </Button>
          <Spacer y={1} />
          <Button fullWidth color="secondary">
            Remove Liquidity
          </Button>
        </Card>
      </div> */}
    </>
  );
};

const pools = [
  {
    value: "ETH",
    label: "ETH",
  },
];

const SwapUI = () => {
  return (
    <>
      <MetaHeader title="Swap UI | Uniswap Project" description="Swap and manage your tokens seamlessly.">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Select
          label="Select a pool"
          placeholder="Select a pool"
          labelPlacement="outside"
          className=" max-w-xl p-6  "
          classNames={{
            mainWrapper: "bg-white radius-lg rounded-xl",
          }}
          variant="bordered"
        >
          {pools.map(pool => (
            <SelectItem key={pool.value} value={pool.value} variant="light" className="bg-white">
              {pool.label}
            </SelectItem>
          ))}
        </Select>

        <div className="card shadow-2xl p-6 bg-white rounded-xl border-2 border-pink-400  min-w-[34rem] max-w-xl transition-shadow hover:shadow-none">
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
                <select className="select select-bordered w-full mt-2">
                  <option>ETH</option>
                  <option>DAI</option>
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <input type="number" className="input input-bordered w-full mt-6" placeholder="Amount" />
              </div>
              <div className="flex flex-col justify-end">
                <label className="label text-left block">
                  <span className="label-text">To:</span>
                </label>
                <select className="select select-bordered w-full mt-2">
                  <option>DAI</option>
                  <option>ETH</option>
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <input type="number" className="input input-bordered w-full mt-6" placeholder="Amount" disabled />
              </div>
            </div>

            <button className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4">
              Swap
            </button>

            <div className="border-t-2 border-gray-200 pt-4 mt-4">
              <div className="grid grid-rows-3 gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Liquidity Available:</span>
                  <span className="font-bold ml-2">1000 ETH</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Fee:</span>
                  <span className="font-bold ml-2">0.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Slippage:</span>
                  <span className="font-bold ml-2">0.2%</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <button className="btn btn-outline w-1/2 hover:bg-indigo-100 hover:shadow-md transition-all">
                Add Liquidity
              </button>
              <button className="btn btn-outline w-1/2 hover:bg-indigo-100 hover:shadow-md transition-all">
                Remove Liquidity
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapUI;
