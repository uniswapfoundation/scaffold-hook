import { useState } from "react";
import Image from "next/image";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Abi, createWalletClient, http, parseEther } from "viem";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { enabledChains } from "~~/services/web3/wagmiConnectors";
import { notification } from "~~/utils/scaffold-eth";

export const NetworkSwitcher = () => {
  const { chain: chainCurrent } = useNetwork();
  console.log("🚀 ~ file: NetworkSwitcher.tsx:10 ~ NetworkSwitcher ~ chain:", chainCurrent);
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork({
    throwForSwitchChainNotSupported: true,
    onError(error) {
      console.log("Error", error);
      notification.error(
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-bold">Error switching networks</div>
          <div className="text-sm">{error.message}</div>
        </div>,
      );
    },

    onSuccess(data) {
      console.log("Success", data);
    },
  });
  console.log("🚀 ~ file: NetworkSwitcher.tsx:20 ~ NetworkSwitcher ~ chains:", chains);

  const handleNetworkSwitch = async networkId => {
    switchNetwork?.(networkId);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Switch Network</Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu for network switching">
        {enabledChains.map((chain: Chain) => {
          return (
            <DropdownItem
              key={chain.name}
              startContent={
                <Image
                  src={
                    "https://uniswaphooks.com/_next/image?url=https%3A%2F%2Fchainlist.org%2Funknown-logo.png&w=64&q=75"
                  }
                  alt={`${chain.name} logo`}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              }
              onClick={() => handleNetworkSwitch(chain.id)}
            >
              {chain.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};
