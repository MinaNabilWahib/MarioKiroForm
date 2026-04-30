import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages repo deployment, set base to /REPO_NAME/
  // For custom domain (forms.mariokiro.com), change this to '/'
  base: '/MarioKiroForm/',
})

