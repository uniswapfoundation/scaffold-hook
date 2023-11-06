import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Tooltip } from "@nextui-org/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export function NumericInput({
  type,
  placeholder,
  tooltipText,
  value,
  onChange,
}: {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  tooltipText: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col justify-end">
      <label className="label text-left  flex justify-between">
        <span className="label-text">{placeholder}</span>
        <Tooltip content={tooltipText}>
          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Tooltip>
      </label>
      <input
        type={type}
        className="input input-bordered w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
