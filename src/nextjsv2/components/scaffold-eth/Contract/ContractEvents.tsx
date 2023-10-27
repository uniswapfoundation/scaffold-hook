import { Address } from "../Address";

type ContractEventEntryProps = {
  name: string;
  args: Record<string, any>;
};

type ContractEventProps = {
  logs: any[];
};

const ContractEventEntry = ({ name, args }: ContractEventEntryProps) => {
  const keys = Object.keys(args);

  console.log("Event(s) emitted:", args);

  return (
    <div className="text-gray-500">
      <div>{name}</div>
      {keys.map(key => (
        <div key={key} className="text-xs mb-2 flex text-ellipsis">
          <div
            className="
            text-gray-800
            font-semibold
            font-mono
            text-xs
            overflow-ellipsis
            overflow-hidden
            whitespace-nowrap
            w-full
            break-all
          "
          >
            {key}
          </div>
          {typeof args[key] === "string" && args[key].includes("0x") && args[key].length === 42 ? (
            <Address address={args[key]} />
          ) : (
            <div
              className="
              text-gray-600
              font-mono
              text-xs
              w-full
              text-right
              break-all
              "
            >
              {args[key]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const EventsEmitted = ({ logs = [] }: ContractEventProps) => {
  if (logs.length === 0) return <>No events emitted!</>;

  return (
    <>
      {logs.map((log, index) => (
        <>
          {" "}
          <ContractEventEntry key={index} name={log.eventName} args={log.args} />
          {index !== logs.length - 1 && <div className="divider"></div>}
        </>
      ))}
    </>
  );
};
