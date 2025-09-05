import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import pkg from './package.json'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const HOST = pkg.env?.HOST || '127.0.0.1'
const PORT = pkg.env?.PORT || 3000
const WS = pkg.env?.WS || 3001

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ projects: [ 'tsconfig.app.json' ] })
  ],

  resolve: {
    alias: { '@styles': resolve(__dirname, 'src/styles') },
    extensions: [ '.scss', '.ts', '.tsx' ],
  },

  server: {
    port: PORT,
    strictPort: true,

    host: HOST || false,
    hmr: !HOST ? undefined : {
      protocol: "ws",
      host: HOST,
      port: WS,
    },
  },
})
