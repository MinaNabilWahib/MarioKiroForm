import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Vercel and custom domains, use '/'
  // For GitHub Pages repo deployment, use '/REPO_NAME/'
  base: '/',
})

