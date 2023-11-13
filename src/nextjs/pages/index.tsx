import NextLink from "next/link";
import { Button, Code, Snippet } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { FaGithub } from "react-icons/fa";
import { size } from "viem";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import Hook from "~~/components/hookspage/hooks-model";
import { subtitle, title } from "~~/components/primitives";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const codeColorVariant = ["primary", "secondary", "success", "warning", "error"];
const technicalDetails = [
  "The `DeployHook.s.sol` file contains the script necessary for initializing and deploying your hook.",
  "Remember to set the correct network in your hardhat config if you're not using the default local network.",
  "The Wagmi hooks are auto-generated code wrapping your smart contract for React, providing custom hooks for common interactions.",
  // Add more technical details as necessary
];

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
                Setup your own&nbsp;
              </h1>
              <h1 className={title({ color: "violet", size: "lg" })}>Hook&nbsp;</h1>
              <br />
              <h1 className={title({ size: "lg" })}>in less than 10 minutes.</h1>
              <h4 className={subtitle({ class: "mt-4", size: "lg" })}>
                Scaffold-Hook is a framework for fast and easy hook development .
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

            <div className="mt-16 mx-10 px-10">
              {/* Step 1 */}
              <motion.div
                className="mx-10"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.2 }}
              >
                <div className=" w-full gap-4">
                  {/* 
        Step 1: Editing the Deployment Script
        Provides instructions for users to edit the deploy script to suit their requirements before deployment.
      */}
                  <Snippet
                    symbol=""
                    hideCopyButton
                    variant="bordered"
                    className="mb-4 break-all  whitespace-pre flex-wrap whitespace-normal whitespace-break-spaces"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span>Edit the deploy script as needed:</span>
                    {/* Highlight the file path with a calm blue color to indicate an action point */}
                    <Code color="info" css={{ fontFamily: "var(--font-mono)" }}>
                      {`contracts/script/DeployHook.s.sol`}
                    </Code>
                    <span>Execute the deployment script with the following command:</span>
                    {/* Use green to signify a successful action that should be taken */}
                    <Code block color="success" css={{ fontFamily: "var(--font-mono)" }}>
                      {`npm run deploy:anvil`}
                    </Code>
                  </Snippet>

                  {/* 
        Step 2: Updating Configuration and Generating Hooks
        This step is critical as it involves configuring the project with the correct contract address and generating the necessary hooks.
      */}
                  <Snippet
                    symbol=""
                    hideCopyButton
                    variant="bordered"
                    className="mb-4"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span>Update the Hook contract address in the following file:</span>
                    {/* Blue for informational action points */}
                    <Code block color="info" css={{ fontFamily: "var(--font-mono)" }}>
                      {`src/nextjs/wagmi.config.ts`}
                    </Code>
                    <span>Important: Generate Wagmi hooks with the updated contract address:</span>
                    {/* Red to alert users to the importance of this action */}
                    <Code block color="error" css={{ fontFamily: "var(--font-mono)" }}>
                      {`npm run generate`}
                    </Code>
                  </Snippet>

                  {/* 
        Step 3: Launching the Frontend Application
        Instructs users on how to start their frontend development server after setting up their project.
      */}
                  <Snippet
                    symbol=""
                    hideCopyButton
                    variant="bordered"
                    className="mb-4"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span>Begin development by starting the frontend application:</span>
                    {/* Orange to draw attention to the start-up process */}
                    <Code block color="warning" css={{ fontFamily: "var(--font-mono)" }}>
                      {`npm run dev`}
                    </Code>
                  </Snippet>
                </div>
              </motion.div>

              {/* ... Additional steps and animations */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
