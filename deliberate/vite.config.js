import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built app works from any folder or static host (e.g. GitHub Pages).
export default defineConfig({
  plugins: [react()],
  base: './',
})
