import { useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Abi, createWalletClient, http, parseEther } from "viem";
import { erc20ABI, useAccount, useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { hardhat } from "wagmi/chains";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { useAccountBalance, useTransactor } from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth/";

// Number of ETH faucet sends to an address
const NUM_OF_ETH = "1";
const FAUCET_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const NUM_OF_DAI = "100";
export const TOKEN1_CONTRACT_ADDRESS = "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4";
export const TOKEN0_CONTRACT_ADDRESS = "0x2dafbdf11a8cf84c372539a38d781d8248399ae3";

const localWalletClient = createWalletClient({
  chain: hardhat,
  transport: http(),
});

/**
 * FaucetButton button which lets you grab eth.
 */
export const FaucetButton = () => {
  const { address } = useAccount();
  const { balance } = useAccountBalance(address);

  const {
    data: resultT1,
    isLoading: isLoadingT1,
    writeAsync: writeAsyncT1,
  } = useContractWrite({
    chainId: getTargetNetwork().id,
    account: FAUCET_ADDRESS.toLowerCase(),
    address: TOKEN1_CONTRACT_ADDRESS.toLowerCase(),
    functionName: "transfer",
    abi: erc20ABI as Abi,
    args: [address, parseEther(NUM_OF_DAI)],
  });

  const {
    data: resultT0,
    isLoading: isLoadingT0,
    writeAsync: writeAsyncT0,
  } = useContractWrite({
    chainId: getTargetNetwork().id,
    account: FAUCET_ADDRESS.toLowerCase(),
    address: TOKEN0_CONTRACT_ADDRESS.toLowerCase(),
    functionName: "transfer",
    abi: erc20ABI as Abi,
    args: [address, parseEther(NUM_OF_DAI)],
  });

  const { chain: ConnectedChain } = useNetwork();

  const [loading, setLoading] = useState(false);

  const faucetTxn = useTransactor(localWalletClient);

  const sendETH = async () => {
    try {
      setLoading(true);
      await faucetTxn({
        chain: hardhat,
        account: FAUCET_ADDRESS,
        to: address,
        value: parseEther(NUM_OF_ETH),
      });
      setLoading(false);
    } catch (error) {
      console.error("⚡️ ~ file: FaucetButton.tsx:sendETH ~ error", error);
      setLoading(false);
    }
  };

  const sendToken0 = async () => {
    try {
      setLoading(true);

      await faucetTxn(writeAsyncT0);
      setLoading(false);
    } catch (error) {
      console.error("⚡️ ~ file: FaucetButton.tsx:send Token0 ~ error", error);
      setLoading(false);
    }
  };
  const sendToken1 = async () => {
    try {
      setLoading(true);

      await faucetTxn(writeAsyncT1);
      setLoading(false);
    } catch (error) {
      console.error("⚡️ ~ file: FaucetButton.tsx:send Token1 ~ error", error);
      setLoading(false);
    }
  };

  // Render only on local chain
  if (ConnectedChain?.id !== hardhat.id) {
    return null;
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        {/* add faucet button */}
        <Button
          variant="ghost"
          color="warning"
          spinner={
            <svg
              className="animate-spin h-5 w-5 text-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          }
          // spinnerPlacement="start"
          isLoading={isLoadingT0 || isLoadingT1 || loading}
          disabled={loading}
        >
          <BanknotesIcon className="h-4 w-4" />
          <span className="ml-2">Faucet</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" color="warning">
        <DropdownItem onClick={sendETH}>ETH</DropdownItem>
        <DropdownItem onClick={sendToken0}>Token0</DropdownItem>
        <DropdownItem onClick={sendToken1}>Token1</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    // <div
    //   className={
    //     balance
    //       ? ""
    //       : "tooltip tooltip-bottom tooltip-secondary tooltip-open font-bold before:left-auto before:transform-none before:content-[attr(data-tip)] before:right-0"
    //   }
    //   data-tip="Grab funds from faucet"
    // >
    //   <button className="btn btn-secondary btn-sm px-2 rounded-full" onClick={sendETH} disabled={loading}>
    //     {!loading ? (
    //       <BanknotesIcon className="h-4 w-4" />
    //     ) : (
    //       <span className="loading loading-spinner loading-xs"></span>
    //     )}
    //   </button>

    //   <div /*...similar code for tooltip etc. */>
    //     <button className="btn btn-secondary btn-sm px-2 rounded-full" onClick={sendToken0} disabled={loading}>
    //       {!loading ? "Token0" : <span className="loading loading-spinner loading-xs"></span>}
    //     </button>
    //   </div>
    //   <div /*...similar code for tooltip etc. */>
    //     <button className="btn btn-secondary btn-sm px-2 rounded-full" onClick={sendToken1} disabled={loading}>
    //       {!loading ? "Token1" : <span className="loading loading-spinner loading-xs"></span>}
    //     </button>
    //   </div>
    // </div>
  );
};
