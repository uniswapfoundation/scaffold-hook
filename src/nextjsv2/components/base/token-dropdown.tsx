import { Select, SelectItem, Tooltip } from "@nextui-org/react";
import { FetchTokenResult } from "wagmi/dist/actions";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export function TokenDropdown({
  label,
  tooltipText,
  options,
  onChange,
}: {
  label: string;
  tooltipText: string;
  options: FetchTokenResult[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col justify-end">
      <label className="label text-left flex justify-between">
        <span className="label-text">{label}</span>
        <Tooltip content={tooltipText}>
          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Tooltip>
      </label>
      <Select onChange={onChange} placeholder="Select a token" variant="flat">
        {options.map(option => (
          <SelectItem key={option.address} value={option.address} textValue={option.name}>
            <div>
              {option.name} ({option.address.slice(0, 6)}...{option.address.slice(-4)})
            </div>
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
