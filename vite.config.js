import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/My-Portfolio/', //this is GitHub repo name
  plugins: [react()],
})
