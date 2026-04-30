import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment, set base to repo name if deploying to github.com/user/MarioKiroForm
  // For custom domain (forms.mariokiro.com), set base to '/'
  base: '/',
})
