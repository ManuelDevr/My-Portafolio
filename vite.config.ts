import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'
import path from 'path'

export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
