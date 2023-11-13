import { Address, AddressInput } from "../scaffold-eth";
import { NumericInput } from "./numeric-input";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { getPoolId } from "~~/utils/v4helpers";

export function PoolKeyId({
  currency0,
  currency1,
  swapFee,
  setSwapFee,
  tickSpacing,
  setTickSpacing,
  hookAddress,
  setHookAddress,
}: {
  currency0: string;
  currency1: string;
  swapFee: bigint;
  setSwapFee: React.Dispatch<React.SetStateAction<bigint>>;
  tickSpacing: bigint;
  setTickSpacing: React.Dispatch<React.SetStateAction<bigint>>;
  hookAddress: `0x${string}`;
  setHookAddress: React.Dispatch<`0x${string}`>;
}) {
  const poolId = getPoolId({
    currency0,
    currency1,
    fee: Number(swapFee),
    tickSpacing: Number(tickSpacing),
    hooks: hookAddress,
  });
  return (
    <Accordion variant="flat">
      <AccordionItem
        key="1"
        aria-label="PoolKey Identifier"
        startContent={
          <div className="flex flex-grow gap-4  items-center justify-between min-w-max ">
            <span className="text-md font-semibold text-gray-500">PoolKey ID</span>
            <div className="flex ">
              <AddressInput value={poolId} onChange={() => null} />
            </div>
          </div>
        }
      >
        <div className="flex gap-2 center justify-between w-full mb-3">
          <div className="gap-2 center items-center justify-between w-full">
            <span className="text-md font-semibold text-gray-500">Currency 0</span>
            <Address address={currency0} />
          </div>
          <div className="gap-2 center items-center justify-between w-full">
            <span className="text-md font-semibold text-gray-500">Currency 1</span>
            <Address address={currency1} />
          </div>
        </div>

        <NumericInput
          type="number"
          placeholder="Swap Fee"
          tooltipText="Transaction fee for swapping tokens, as a percentage."
          value={(Number(swapFee) / 10_000).toString()}
          onChange={e => setSwapFee(BigInt(Number(e.target.value) * 10_000))}
        />
        <NumericInput
          type="number"
          placeholder="Tick Spacing"
          tooltipText="The minimum price movement between ticks."
          value={tickSpacing.toString()}
          onChange={e => setTickSpacing(BigInt(e.target.value))}
        />
        <NumericInput
          type="text"
          placeholder="Hook Address"
          tooltipText="Smart contract address for custom logic."
          value={hookAddress}
          onChange={e => setHookAddress(e.target.value as `0x${string}`)}
        />
      </AccordionItem>
    </Accordion>
  );
}
