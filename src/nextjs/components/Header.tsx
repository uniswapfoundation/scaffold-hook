import React, { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Bars3Icon, BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} color={isActive ? "secondary" : "foreground"} passHref>
      {children}
    </Link>
  );
};

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
      <NavbarItem isActive={isActiveLink(router, "/")} onClick={(event: any) => redirectLink(event, "/")}>
        Home
      </NavbarItem>
      <NavbarItem isActive={isActiveLink(router, "/debug")} onClick={(event: any) => redirectLink(event, "/debug")}>
        {/* <NavLink href="/debug" > */}
        Debug Contracts
        {/* </NavLink> */}
      </NavbarItem>
      <NavbarItem isActive={isActiveLink(router, "/swap-ui")} onClick={(event: any) => redirectLink(event, "/swap-ui")}>
        Example UI
      </NavbarItem>
      <NavbarItem
        isActive={isActiveLink(router, "/blockexplorer")}
        onClick={(event: any) => redirectLink(event, "/blockexplorer")}
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
