import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// step 2.1 to import tailwindcss in vite.config.js
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  // step 2.2 was added tailwindcss(), in the plugins array
  plugins: [react(),tailwindcss()],
  // step 2.3 to import tailwindcss in index.css
  preview:{
    allowedHosts:['.onrender.com']
  }
})
