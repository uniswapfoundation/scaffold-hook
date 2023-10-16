import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { poolManagerABI } from './generated/PoolManager.sol/PoolManager'



export default defineConfig({
    out: 'generated/generatedTypes.ts',
    contracts: [
        {
            name: 'PoolManager',
            abi: poolManagerABI,
        },
    ],
    plugins: [
        react(),
    ],

})
