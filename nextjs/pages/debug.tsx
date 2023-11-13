import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { watchContractEvent } from "@wagmi/core";
import type { NextPage } from "next";
import { useLocalStorage } from "usehooks-ts";
import { useChainId } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractUI } from "~~/components/scaffold-eth";
import { poolManagerABI, poolManagerAddress } from "~~/generated/generated";
import { DEBUGGABLE_ADDRESSES } from "~~/utils/config";
import { notification } from "~~/utils/scaffold-eth";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";

const selectedContractStorageKey = "scaffoldEth2.selectedContract";
const contractNames = getContractNames();

const Debug: NextPage = () => {
  const chainId = useChainId();
  const [selectedContract, setSelectedContract] = useLocalStorage<ContractName>(
    selectedContractStorageKey,
    contractNames[0],
  );

  useEffect(() => {
    if (!contractNames.includes(selectedContract)) {
      setSelectedContract(contractNames[0]);
    }
  }, [selectedContract, setSelectedContract]);

  useEffect(() => {
    const unwatch = watchContractEvent(
      {
        address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
        abi: poolManagerABI,
        eventName: "Initialize",
      },
      log => {
        const successMsg = (
          <div className="w-full overflow auto">
            <p className="font-bold mt-0 mb-1">New Pool Created!</p>
            <p className="m-0 overflow-hidden flex-wrap break-all">
              - Pool ID: <code className="italic bg-base-300 text-base font-bold">{log[0].args.id}</code>
            </p>
            <p className="mt-1 break-normal">
              - Hook Address:{" "}
              <code className="italic bg-base-300 text-base font-bold break-all">{log[0].args.hooks}</code>
            </p>
          </div>
        );
        console.log(log);
        notification.success(successMsg, { duration: 1000000 });
      },
    );

    return () => unwatch();
  }, []);

  return (
    <>
      <MetaHeader
        title="Debug Contracts | Scaffold-ETH 2"
        description="Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way"
      />
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        {DEBUGGABLE_ADDRESSES.length === 0 ? (
          <p className="text-3xl mt-14">No contracts found!</p>
        ) : (
          <>
            {DEBUGGABLE_ADDRESSES.length > 1 && (
              <div className="flex flex-row gap-2 w-full max-w-7xl pb-1 px-6 lg:px-10 flex-wrap">
                <div
                  className="
                  text-md font-semibold text-neutral-500 w-full px-2
                "
                >
                  Inspect Contracts Deployed:{" "}
                </div>
                <br />
                {DEBUGGABLE_ADDRESSES.map(contract => (
                  <Button
                    variant="bordered"
                    color="default"
                    className={``}
                    key={contract.name}
                    onClick={() => setSelectedContract(contract.name)}
                  >
                    {contract.name}
                  </Button>
                ))}
              </div>
            )}
            {DEBUGGABLE_ADDRESSES.map(contract => (
              <ContractUI
                key={contract.address[chainId as keyof typeof contract.address]}
                address={contract.address}
                abi={contract.abi}
                contractName={contract.name}
                className={contract.name === selectedContract ? "" : "hidden"}
              />
            ))}
          </>
        )}
      </div>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Debug Contracts</h1>
        <p className="text-neutral">
          You can debug & interact with your deployed contracts here.
          <br /> Check{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
            packages / nextjs / pages / debug.tsx
          </code>{" "}
        </p>
      </div>
    </>
  );
};

export default Debug;
