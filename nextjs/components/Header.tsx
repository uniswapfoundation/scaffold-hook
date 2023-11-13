import React from "react";
import { useRouter } from "next/router";
import { Icons as icons } from "./assets/Icons";
import { NetworkSwitcher } from "./scaffold-eth/NetworkSwitcher";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { hardhat } from "viem/chains";
import { useChainId } from "wagmi";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const isActiveLink = (router: any, href: string) => router.pathname === href;
/**
 * Site header
 */
export const Header = () => {
  const router = useRouter();
  const chainId = useChainId();
  const redirectLink = (event: any, href: string) => {
    event.preventDefault();
    router.push(href);
  };
  const navLinks = (
    <>
      <NavbarItem
        className="cursor-pointer"
        isActive={isActiveLink(router, "/")}
        onClick={(event: any) => redirectLink(event, "/")}
      >
        Home
      </NavbarItem>
      <NavbarItem
        className="cursor-pointer"
        isActive={isActiveLink(router, "/debug")}
        onClick={(event: any) => redirectLink(event, "/debug")}
      >
        Debug Contracts
      </NavbarItem>

      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="
            bg-transparent border-0 p-0 !hover:bg-transparent hover:border-0 hover:shadow-none
            "
              endContent={icons.chevron}
              radius="sm"
              variant="light"
            >
              <NavbarItem
                isActive={isActiveLink(router, "/swap-ui")}
                // onClick={(event: any) => redirectLink(event, "/swap-ui")}
                // // make clickable
                className="cursor-pointer "
              >
                Playground
              </NavbarItem>
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label="Uniswap features"
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          <DropdownItem
            key="swap"
            startContent={icons.scale}
            description="Create a Pool on Uniswap V4"
            onClick={(event: any) => redirectLink(event, "/swap-ui?page=initialize")}
          >
            Initialize Pool
          </DropdownItem>
          <DropdownItem
            key="Liquidity management"
            startContent={icons.activity}
            description="Manage liquidity in Uniswap V4 Pools"
            onClick={(event: any) => redirectLink(event, "/swap-ui?page=liquidity")}
          >
            Add Liquidity
          </DropdownItem>
          <DropdownItem
            key="swap"
            startContent={icons.flash}
            description="Swap tokens using Uniswap V4"
            onClick={(event: any) => redirectLink(event, "/swap-ui?page=swap")}
          >
            Swap
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {chainId === hardhat.id && (
        <NavbarItem
          isActive={isActiveLink(router, "/blockexplorer")}
          onClick={(event: any) => redirectLink(event, "/blockexplorer")}
          className="cursor-pointer "
        >
          Block Explorer
        </NavbarItem>
      )}
    </>
  );

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      maxWidth="full"
      // className="px-10 md:px-0"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-purple-600",
        ],
        base: "px-10 md:px-0",
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">scaffold-hook</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <RainbowKitCustomConnectButton />
        </NavbarItem>
        <NavbarItem>
          <NetworkSwitcher />
        </NavbarItem>
        <NavbarItem>
          <FaucetButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
