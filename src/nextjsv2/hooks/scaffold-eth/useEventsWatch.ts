
import { useEffect, useRef } from "react";
import { usePublicClient } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";
import { Contract, ContractName } from "~~/utils/scaffold-eth/contract";

type UseEventWatchParams = {
    deployedContractData?: Contract<ContractName>;
    onEvent: (e: any) => void;
    chainId?: number;
};

export const useEventWatch = ({
    deployedContractData,
    onEvent,
    chainId = scaffoldConfig.targetNetwork.id,
}: UseEventWatchParams) => {
    const publicClient = usePublicClient({ chainId });
    const unwatchHandlerRef = useRef<() => void>(() => undefined);

    useEffect(() => {
        const { address, abi } = deployedContractData ?? { address: "", abi: [] };
        console.log("useEventWatch", { address, abi });
        if (!address || !abi) return;
        publicClient.watchContractEvent({
            address,
            abi,
            onLogs: logs => onEvent(logs),
        });
        unwatchHandlerRef.current = publicClient.watchContractEvent({
            address,
            abi,
            onLogs: logs => onEvent(logs),
        });

        return () => {
            if (!!unwatchHandlerRef.current) unwatchHandlerRef.current();
        };
    }, [deployedContractData, onEvent, publicClient]);

    return { unwatch: unwatchHandlerRef.current };
};