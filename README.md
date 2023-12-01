# scaffold-hook

_Develop and test Uniswap v4 Hooks with minimal interfaces for the swap lifecycle (pool creation, liquidity provision, and swapping)_

> _inspired by [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth-2)_

## Features

✅ Template hook with deployment commands

✅ User interfaces for: pool creation, liquidity creation, and swapping

✅ Local network (anvil) with predeployed Uniswap v4

✅ Testnet support

✅ Foundry (hardhat support coming later)

---

# Setup

_requires [foundry](https://book.getfoundry.sh/getting-started/installation) & [node 18+](https://nodejs.org/en/download)_

## Linux / WSL2 (TSTORE)

Please update [foundry.toml](foundry.toml#L9) to use the linux `solc`

Mac users do not need to change anything by default

## Install Dependencies

```bash
forge install

cd nextjs/
npm install
```

## Define environment variables

```bash
cp .env.example .env
```

See [Environment](#environment-variables) additional setup

---

## Get Started

1. Start the local network, with v4 contracts predeployed

   ```bash
   # root of the repository
   cd scaffold-hook/
   npm run anvil
   ```

2. Deploy the template hook

   ```bash
   # root of the repository
   cd scaffold-hook/
   forge build
   npm run deploy:anvil
   ```

3. Update [wagmi.config.ts](nextjs/wagmi.config.ts) with the hook address from [run-latest.json](/broadcast/DeployHook.s.sol/31337/run-latest.json)

4. Regenerate react hooks, addresses, and ABIs

   ```bash
   cd nextjs/
   npm run wagmi
   ```

5. Start the webapp
   ```bash
   cd nextjs/
   npm run dev
   ```

## Hook Configuration

Modifying the file name, contract name, or _hook flags_ will require configuration:

Renaming -- update [.env](.env)

```bash
# Hook Contract, formatted: <filename.sol>:<contractName>
HOOK_CONTRACT="Counter.sol:Counter"
```

Changing hook flags -- update [.env](.env) and ensure `getHookCalls()` is in agreement

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

## Deploying to Testnets

_Ensure your wallet is funded with testnet gas (ETH)_

- `npm run deploy:anvil`

- `npm run deploy:goerli`

- `npm run deploy:arbitrum-goerli`

- `npm run deploy:arbitrum-sepolia`

- `npm run deploy:optimism-goerli`

- `npm run deploy:base-goerli`

- `npm run deploy:sepolia`

- `npm run deploy:scroll-sepolia`

- `npm run deploy:polygon-mumbai`

- `npm run deploy:polygon-zkevm-testnet`

## Additional Configuration

### Custom Tokens

While `scaffold-hook` ships solmate's `MockERC20` on local and testnet, you can provide your own custom tokens:

1. define them in [wagmi.config.ts](nextjs/wagmi.config.ts#L80), and regenerate the codegen: `npm run wagmi`
2. import the generated addresses and edit [`TOKEN_ADDRESSES`](nextjs/utils/config.ts)

### Debuggable Hook (etherscan-style contract interface)

1. define the hook in [wagmi.config.ts](nextjs/wagmi.config.ts#L15), and regenerate the codegen: `npm run wagmi`
2. import the generated types and edit [`DEBUGGABLE_ADDRESSES`](nextjs/utils/config.ts)

## Environment Variables

- `ANVIL_FORK_URL`: RPC URL for anvil fork mode
- `ETHERSCAN_API_KEY`: Your Etherscan API Key
- `FORGE_PRIVATE_KEY`: The private key of the wallet for testnet deployments

# Learn more

To learn more about [Next.js](https://nextjs.org), [Foundry](https://book.getfoundry.sh/) or [wagmi](https://wagmi.sh), check out the following resources:

- [Foundry Documentation](https://book.getfoundry.sh/) – learn more about the Foundry stack (Anvil, Forge, etc).
- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [@wagmi/cli Documentation](https://wagmi.sh/cli) – learn more about the wagmi CLI.
- [Next.js Documentation](https://nextjs.org/docs) learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
