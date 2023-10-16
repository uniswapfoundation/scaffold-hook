import { useState } from "react";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { QRCodeSVG } from "qrcode.react";
import CopyToClipboard from "react-copy-to-clipboard";
import { erc20ABI, useContractRead, useDisconnect, useSwitchNetwork } from "wagmi";
import {
  ArrowLeftOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";
import {
  Address,
  Balance,
  BlockieAvatar,
  TOKEN0_CONTRACT_ADDRESS,
  TOKEN1_CONTRACT_ADDRESS,
} from "~~/components/scaffold-eth";
import { useAutoConnect, useNetworkColor } from "~~/hooks/scaffold-eth";
import { getBlockExplorerAddressLink, getTargetNetwork } from "~~/utils/scaffold-eth";
import { Abi } from "viem";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  useAutoConnect();
  const networkColor = useNetworkColor();
  const configuredNetwork = getTargetNetwork();
  const { disconnect } = useDisconnect();
  const { switchNetwork } = useSwitchNetwork();
  const [addressCopied, setAddressCopied] = useState(false);
  const [address, setAddress] = useState("");
  const { data: balanceToken0 } = useContractRead({
    chainId: getTargetNetwork().id,
    address: "0x2dafbdf11a8cf84c372539a38d781d8248399ae3",
    abi: erc20ABI as Abi,
    functionName: "balanceOf",
    args: [address],
  });

  const { data: balanceToken1 } = useContractRead({
    chainId: getTargetNetwork().id,
    address: "0xa8ceafb1940244f2f022ff8440a42411b4f07fc4",
    abi: erc20ABI as Abi,
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(getTargetNetwork(), account.address)
          : undefined;
        if (account) {
          setAddress(account.address);
        }

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <Button
                    className="bg-gradient-to-tr
                  from-[#ff0080] to-[#7928ca] text-white opacity-50
                  hover:opacity-100
                  hover:transition-opacity duration-100 ease-in-out
                  hover:scale-110 transform  
                  "
                    onClick={openConnectModal}
                    type="button"
                    variant="light"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported || chain.id !== configuredNetwork.id) {
                return (
                  // <div className="dropdown dropdown-end">
                  //   <label tabIndex={0} className="btn btn-error btn-sm dropdown-toggle gap-1">
                  //     <span>Wrong network</span>
                  //     <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
                  //   </label>
                  //   <ul
                  //     tabIndex={0}
                  //     className="dropdown-content menu p-2 mt-1 shadow-center shadow-accent bg-base-200 rounded-box gap-1"
                  //   >
                  //     <li>
                  //       <button
                  //         className="btn-sm !rounded-xl flex py-3 gap-3"
                  //         type="button"
                  //         onClick={() => switchNetwork?.(configuredNetwork.id)}
                  //       >
                  //         <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" />
                  //         <span className="whitespace-nowrap">
                  //           Switch to <span style={{ color: networkColor }}>{configuredNetwork.name}</span>
                  //         </span>
                  //       </button>
                  //     </li>
                  //     <li>
                  //       <button
                  //         className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
                  //         type="button"
                  //         onClick={() => disconnect()}
                  //       >
                  //         <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Disconnect</span>
                  //       </button>
                  //     </li>
                  //   </ul>
                  // </div>
                  <div className="flex justify-end items-center">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered" color="danger" size="sm">
                          Wrong Network
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu varifant="bordered" aria-label="Network Actions">
                        <DropdownItem onClick={() => switchNetwork?.(configuredNetwork.id)}>
                          <span className="flex items-center gap-3">
                            <ArrowsRightLeftIcon className="h-6 w-4" />
                            <span>
                              Switch to <span style={{ color: networkColor }}>{configuredNetwork.name}</span>
                            </span>
                          </span>
                        </DropdownItem>
                        <DropdownItem color="danger" onClick={() => disconnect()}>
                          <span className="flex items-center gap-3">
                            <ArrowLeftOnRectangleIcon className="h-6 w-4" /> Disconnect
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                );
              }

              return (
                <div className="px-2 flex justify-end items-center">
                  <Dropdown>
                    <DropdownTrigger>
                      <div className="flex flex-col items-center mr-1">
                        <Balance address={account.address} className="min-h-0 h-auto" />
                        <span className="text-xs" style={{ color: networkColor }}>
                          {chain.name}
                        </span>
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem>
                        <CopyToClipboard text={TOKEN0_CONTRACT_ADDRESS || "0"}>
                          <div className="flex flex-col items-center">
                            <span className="text-xs">Token 0</span>
                            <span className="text-xs">{(balanceToken0?.toString() / 10 ** 18).toFixed(3)}</span>
                          </div>
                        </CopyToClipboard>
                      </DropdownItem>
                      <DropdownItem>
                        <CopyToClipboard text={TOKEN1_CONTRACT_ADDRESS || "0"}>
                          <div className="flex flex-col items-center">
                            <span className="text-xs">Token 1</span>
                            <span className="text-xs">{(balanceToken1?.toString() / 10 ** 18).toFixed(3)}</span>
                          </div>
                        </CopyToClipboard>
                      </DropdownItem>
                    </DropdownMenu>
                    {/* show balanceToken0 */}
                    {/* </div> */}
                  </Dropdown>

                  {/* <div className="dropdown dropdown-end leading-3">
                    <label
                      tabIndex={0}
                      className="btn btn-secondary btn-sm pl-0 pr-2 shadow-md dropdown-toggle gap-0 !h-auto"
                    >
                      <BlockieAvatar address={account.address} size={30} ensImage={account.ensAvatar} />
                      <span className="ml-2 mr-1">{account.displayName}</span>
                      <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu z-[2] p-2 mt-2 shadow-center shadow-accent bg-base-200 rounded-box gap-1"
                    >
                      <li>
                        {addressCopied ? (
                          <div className="btn-sm !rounded-xl flex gap-3 py-3">
                            <CheckCircleIcon
                              className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                              aria-hidden="true"
                            />
                            <span className=" whitespace-nowrap">Copy address</span>
                          </div>
                        ) : (
                          <CopyToClipboard
                            text={account.address}
                            onCopy={() => {
                              setAddressCopied(true);
                              setTimeout(() => {
                                setAddressCopied(false);
                              }, 800);
                            }}
                          >
                            <div className="btn-sm !rounded-xl flex gap-3 py-3">
                              <DocumentDuplicateIcon
                                className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                                aria-hidden="true"
                              />
                              <span className=" whitespace-nowrap">Copy address</span>
                            </div>
                          </CopyToClipboard>
                        )}
                      </li>
                      <li>
                        <label htmlFor="qrcode-modal" className="btn-sm !rounded-xl flex gap-3 py-3">
                          <QrCodeIcon className="h-6 w-4 ml-2 sm:ml-0" />
                          <span className="whitespace-nowrap">View QR Code</span>
                        </label>
                      </li>
                      <li>
                        <button className="menu-item btn-sm !rounded-xl flex gap-3 py-3" type="button">
                          <ArrowTopRightOnSquareIcon className="h-6 w-4 ml-2 sm:ml-0" />
                          <a
                            target="_blank"
                            href={blockExplorerAddressLink}
                            rel="noopener noreferrer"
                            className="whitespace-nowrap"
                          >
                            View on Block Explorer
                          </a>
                        </button>
                      </li>
                      <li>
                        <button
                          className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
                          type="button"
                          onClick={() => disconnect()}
                        >
                          <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Disconnect</span>
                        </button>
                      </li>
                    </ul>
                  </div> */}
                  <Dropdown backdrop="blur">
                    <DropdownTrigger>
                      <Button variant="default">
                        <BlockieAvatar address={account.address} size={30} ensImage={account.ensAvatar} />
                        <span className="ml-2 mr-1">{account.displayName}</span>
                        <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu variant="faded" aria-label="Account Actions">
                      <DropdownItem variant="light">
                        {/* add button and isLoading if clicked onCopy */}

                        <Button
                          className="flex w-full"
                          onClick={() => {
                            setAddressCopied(true);
                            // copy address to clipboard
                            navigator.clipboard.writeText(account.address);
                            setTimeout(() => {
                              setAddressCopied(false);
                            }, 800);
                          }}
                          variant="light"
                        >
                          <DocumentDuplicateIcon
                            className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                            aria-hidden="true"
                          />
                          Copy Address
                        </Button>
                      </DropdownItem>

                      <DropdownItem>
                        <Link target="_blank" href={blockExplorerAddressLink} rel="noopener noreferrer">
                          View on Block Explorer
                        </Link>
                      </DropdownItem>
                      <DropdownItem color="danger" onClick={() => disconnect()}>
                        Disconnect
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <div>
                    <input type="checkbox" id="qrcode-modal" className="modal-toggle" />
                    <label htmlFor="qrcode-modal" className="modal cursor-pointer">
                      <label className="modal-box relative">
                        {/* dummy input to capture event onclick on modal box */}
                        <input className="h-0 w-0 absolute top-0 left-0" />
                        <label
                          htmlFor="qrcode-modal"
                          className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3"
                        >
                          ✕
                        </label>
                        <div className="space-y-3 py-6">
                          <div className="flex space-x-4 flex-col items-center gap-6">
                            <QRCodeSVG value={account.address} size={256} />
                            <Address address={account.address} format="long" disableAddressLink />
                          </div>
                        </div>
                      </label>
                    </label>
                  </div>
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
