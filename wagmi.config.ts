import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

export default defineConfig({
  out: 'src/nextjsv2/generated/generated.ts',
  plugins: [
    foundry({

      project: './contracts',
    }),
    react(),
  ],
})
