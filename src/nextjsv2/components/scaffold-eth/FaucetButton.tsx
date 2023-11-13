import { useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { createWalletClient, http, parseEther } from "viem";
import { useAccount, useChainId, useToken } from "wagmi";
import { hardhat } from "wagmi/chains";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { useMockErc20Mint } from "~~/generated/generated";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { TOKEN_ADDRESSES } from "~~/utils/config";

// Number of ETH faucet sends to an address
const NUM_OF_ETH = "1";
const FAUCET_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

const localWalletClient = createWalletClient({
  chain: hardhat,
  transport: http(),
});

/**
 * FaucetButton button which lets you grab eth.
 */
export const FaucetButton = () => {
  const chainId = useChainId();
  const { address } = useAccount();

  const token0 = useToken({
    address: TOKEN_ADDRESSES[0][chainId as keyof (typeof TOKEN_ADDRESSES)[0]],
  });

  const { writeAsync: writeAsyncToken0Mint } = useMockErc20Mint({
    address: TOKEN_ADDRESSES[0][chainId as keyof (typeof TOKEN_ADDRESSES)[0]],
    args: [address ?? FAUCET_ADDRESS, parseEther("1000")],
  });

  const token1 = useToken({
    address: TOKEN_ADDRESSES[1][chainId as keyof (typeof TOKEN_ADDRESSES)[1]],
  });

  const { writeAsync: writeAsyncToken1Mint } = useMockErc20Mint({
    address: TOKEN_ADDRESSES[1][chainId as keyof (typeof TOKEN_ADDRESSES)[1]],
    args: [address ?? FAUCET_ADDRESS, parseEther("1000")],
  });

  const [loading, setLoading] = useState(false);

  const faucetTxn = useTransactor(localWalletClient);

  const sendETH = async () => {
    try {
      setLoading(true);
      await faucetTxn({
        chain: hardhat,
        account: address ?? FAUCET_ADDRESS,
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

      writeAsyncToken0Mint().then(() => {
        setLoading(false);
      });
    } catch (error) {
      console.error("⚡️ ~ file: FaucetButton.tsx:send Token0 ~ error", error);
      setLoading(false);
    }
  };
  const sendToken1 = async () => {
    try {
      setLoading(true);

      writeAsyncToken1Mint().then(() => {
        setLoading(false);
      });
    } catch (error) {
      console.error("⚡️ ~ file: FaucetButton.tsx:send Token1 ~ error", error);
      setLoading(false);
    }
  };

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
          isLoading={token0.isLoading || token1.isLoading || loading}
          disabled={loading}
        >
          <BanknotesIcon className="h-4 w-4" />
          <span className="ml-2">Faucet</span>
        </Button>
      </DropdownTrigger>

      {/* really ugly, but you cant conditionally render dropdown items */}
      {chainId === hardhat.id ? (
        <DropdownMenu variant="faded" color="warning">
          <DropdownItem onClick={sendETH}>ETH</DropdownItem>
          <DropdownItem onClick={sendToken0}>{token0.data?.name ?? "Token0"}</DropdownItem>
          <DropdownItem onClick={sendToken1}>{token1.data?.name ?? "Token1"}</DropdownItem>
        </DropdownMenu>
      ) : (
        <DropdownMenu variant="faded" color="warning">
          <DropdownItem onClick={sendToken0}>{token0.data?.name ?? "Token0"}</DropdownItem>
          <DropdownItem onClick={sendToken1}>{token1.data?.name ?? "Token1"}</DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
};
