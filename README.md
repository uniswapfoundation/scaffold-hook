# scaffold-hook

_Develop and test Uniswap v4 Hooks with minimal interfaces for the swap lifecycle (pool creation, liquidity provision, and swapping)_

> _inspired by [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth-2)_

## Features

✅ Template hook with deployment commands

✅ Configured local network with v4 contracts pre-deployed

✅ Testnet and devnet support

✅ User interfaces for: pool creation, liquidity creation, and swapping

✅ Foundry

---

## Setup

_requires [foundry](https://book.getfoundry.sh/getting-started/installation) & [node 18+](https://nodejs.org/en/download)_

Install Dependencies

```bash
forge install
npm install
```

Define environment variables

```bash
cp .env.example .env
```

---

## Get Started

1. Start the local network, with v4 contracts predeployed

   ```bash
   npm run anvil
   ```

2. Deploy the template hook

   ```
   npm run deploy:anvil
   ```

3. Update [wagmi.config.ts](src/nextjsv2/wagmi.config.ts) with the hook address from [run-latest.json](/broadcast/DeployHook.s.sol/31337/run-latest.json)

4. Regenerate react hooks, addresses, and ABIs

   ```bash
   npm run wagmi
   ```

5. Start the webapp
   ```
   npm run dev
   ```

## Hook Configuration

If you rename your hook file or contract name -- Update [.env](.env)

```bash
# Hook Contract, formatted: <filename.sol>:<contractName>
HOOK_CONTRACT="Counter.sol:Counter"
```

If you updated your hook's interfaces -- Update [.env](.env) and ensure `getHookCalls()` is in agreement

```bash
# in .env
# Hook Flags
BEFORE_SWAP=true
AFTER_SWAP=true
BEFORE_MODIFY_POSITION=true
AFTER_MODIFY_POSITION=true
BEFORE_INITIALIZE=false
AFTER_INITIALIZE=false
BEFORE_DONATE=false
AFTER_DONATE=false
```

```solidity
// in Hook Contract
function getHooksCalls() public pure returns (Hooks.Calls memory) {
    return Hooks.Calls({
        beforeInitialize: false,
        afterInitialize: false,
        beforeModifyPosition: true,
        afterModifyPosition: true,
        beforeSwap: true,
        afterSwap: true,
        beforeDonate: false,
        afterDonate: false
    });
}
```

## Additional Configuration

TODO: document [config.ts](src/nextjsv2/utils/config.ts)

## (TODO) Set up environment

You will first need to set up your `.env` to tell Forge where to deploy your contract.

Go ahead and open up your `.env` file, and enter the following env vars:

- `ETHERSCAN_API_KEY`: Your Etherscan API Key.
- `FORGE_RPC_URL`: The RPC URL of the network to deploy to.
- `FORGE_PRIVATE_KEY`: The private key of the wallet you want to deploy from.

# Learn more

To learn more about [Next.js](https://nextjs.org), [Foundry](https://book.getfoundry.sh/) or [wagmi](https://wagmi.sh), check out the following resources:

- [Foundry Documentation](https://book.getfoundry.sh/) – learn more about the Foundry stack (Anvil, Forge, etc).
- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [@wagmi/cli Documentation](https://wagmi.sh/cli) – learn more about the wagmi CLI.
- [Next.js Documentation](https://nextjs.org/docs) learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
