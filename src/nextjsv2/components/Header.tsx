import React, { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { Icons as icons } from "./assets/Icons";

const isActiveLink = (router: any, href: string) => router.pathname === href;
/**
 * Site header
 */
export const Header = () => {
  const router = useRouter();
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
        {/* <NavLink href="/debug" > */}
        Debug Contracts
        {/* </NavLink> */}
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
                isActive={isActiveLink(router, "/example-ui")}
                // onClick={(event: any) => redirectLink(event, "/example-ui")}
                // // make clickable
                className="cursor-pointer "
              >
                Playground
              </NavbarItem>
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label="Uniswao features"
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          <DropdownItem
            key="swap"
            startContent={icons.flash}
            description="Swap tokens using Uniswap V4"
            onClick={(event: any) => redirectLink(event, "/example-ui?page=swap")}
          >
            Swap UI
          </DropdownItem>
          <DropdownItem
            key="Liquidity management"
            startContent={icons.activity}
            description="Manage liquidity in Uniswap V4 Pools"
            onClick={(event: any) => redirectLink(event, "/example-ui?page=pool")}
          >
            Add Liquidity
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavbarItem
        isActive={isActiveLink(router, "/blockexplorer")}
        onClick={(event: any) => redirectLink(event, "/blockexplorer")}
        className="cursor-pointer "
      >
        Block Explorer
      </NavbarItem>
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
        <p className="font-bold text-inherit">Scaffold-UNIv4</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <RainbowKitCustomConnectButton />
        </NavbarItem>
        <NavbarItem>
          <FaucetButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
