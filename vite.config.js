import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

const base = process.env.VITE_BASE_PATH || '/'

/** Serve app.html at / during local dev (root index.html is GitHub Pages redirect only). */
function devAppEntry() {
  return {
    name: 'dev-app-entry',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [pathname] = (req.url ?? '/').split('?')
        if (
          pathname === '/' ||
          pathname === '/index.html' ||
          pathname === '/docs' ||
          pathname === '/docs/'
        ) {
          req.url = '/app.html'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), devAppEntry()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app.html'),
      },
    },
  },
})
