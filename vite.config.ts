import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  publicDir: resolve(__dirname, 'public'),
  plugins: [
    react(),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        projects: resolve(root, 'projects', 'index.html'),
        script: resolve(root, 'assets/scripts/script.js'),
        profilerotator: resolve(root, 'assets/scripts/profilerotator.js'),
        notfound: resolve(root, 'pages/not_found.html'),
        unauthorized: resolve(root, 'pages/unauthorized.html'),
        forbidden: resolve(root, 'pages/forbidden.html'),
      }
    }
  },
})
