import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'

export default defineConfig({
    out: 'generated/generatedTypes.ts',
    plugins: [
      foundry({
        project: '../../contracts',
      }),
      react(),
    ],
  })
