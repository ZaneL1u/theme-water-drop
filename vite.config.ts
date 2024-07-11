// import { fileURLToPath } from 'node:url'
// import path from 'node:path'
import vikeSolid from 'vike-solid/vite'
import vike from 'vike/plugin'

import type { UserConfig } from 'vite'

export default {
  // build: {
  //   outDir: fileURLToPath(new URL('./templates/assets/dist', import.meta.url)),
  //   emptyOutDir: true,
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/main.ts'),
  //     name: 'main',
  //     fileName: 'main',
  //     formats: ['iife'],
  //   },
  // },
  plugins: [
    vike({
      prerender: true,
      includeAssetsImportedByServer: true,
    }),
    vikeSolid(),
  ],
} satisfies UserConfig
