import { NumericInput } from "./numeric-input";
import { Accordion, AccordionItem } from "@nextui-org/react";

export function PoolKeyId({
  swapFee,
  setSwapFee,
  tickSpacing,
  setTickSpacing,
  hookAddress,
  setHookAddress,
}: {
  swapFee: bigint;
  setSwapFee: React.Dispatch<React.SetStateAction<bigint>>;
  tickSpacing: bigint;
  setTickSpacing: React.Dispatch<React.SetStateAction<bigint>>;
  hookAddress: `0x${string}`;
  setHookAddress: React.Dispatch<`0x${string}`>;
}) {
  return (
    <Accordion variant="bordered">
      <AccordionItem key="1" aria-label="PoolKey Identifier" title="PoolKey Identifier">
        <NumericInput
          type="number"
          placeholder="Swap Fee"
          tooltipText="Transaction fee for swapping tokens."
          value={swapFee.toString()}
          onChange={e => setSwapFee(BigInt(e.target.value))}
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
