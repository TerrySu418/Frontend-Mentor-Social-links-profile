import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://terrysu418.github.io/Frontend-Mentor-Social-links-profile",
  plugins: [react(), tailwindcss(),],
  
})
