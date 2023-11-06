import NextLink from "next/link";
import { Button, Code, Snippet } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import type { NextPage } from "next";
import { FaGithub } from "react-icons/fa";
import { size } from "viem";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import Hook from "~~/components/hookspage/hooks-model";
import { subtitle, title } from "~~/components/primitives";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          {/* <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/pages/index.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code> 
            
          </p>*/}
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-2xl text-center justify-center">
              <h1
                className={title({
                  size: "lg",
                })}
              >
                Deploy your own&nbsp;
              </h1>
              <h1 className={title({ color: "violet", size: "lg" })}>Hook&nbsp;</h1>
              <br />
              <h1 className={title({ size: "lg" })}>in less than 10 minutes.</h1>
              <h4 className={subtitle({ class: "mt-4", size: "lg" })}>
                Scaffold-UNI is a framework for fast and easy hook development .
              </h4>
            </div>

            <div className="flex gap-3">
              <Link
                isExternal
                href={"text"}
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
              >
                Documentation
              </Link>
              <Link
                isExternal
                as={NextLink}
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href={"text"}
              >
                <FaGithub size={20} />
                GitHub
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-4 w-full">
              <Snippet hideSymbol hideCopyButton variant="bordered">
                <span>
                  Get started by editing <Code color="primary">packages/nextjs/pages/index.tsx</Code>
                </span>
              </Snippet>
              <Snippet hideSymbol hideCopyButton variant="bordered">
                <span>
                  Edit your smart contract <Code color="success">YourContract.sol</Code> in{" "}
                  <Code color="secondary">packages/hardhat/contracts</Code>
                </span>{" "}
              </Snippet>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
