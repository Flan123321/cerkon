// Archivo: vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cerkon/', // <-- ¡Esta línea es crucial!
  plugins: [
    react()
  ],
})