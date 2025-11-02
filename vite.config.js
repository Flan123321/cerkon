import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// BORRAMOS la importación de @tailwindcss/vite

// https://vitejs.dev/config/
export default defineConfig({

  base: '/cerkon/',
  plugins: [
    react()
    // BORRAMOS tailwindcss() de aquí
  ],
})