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

  return (
    <div className="text-gray-500">
      <div>{name}</div>
      {keys.map(key => (
        <div key={key} className="text-xs mb-2">
          <div className="">{key}</div>
          {args[key].includes("0x") ? <Address address={args[key]} /> : <div>{args[key]}</div>}
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
