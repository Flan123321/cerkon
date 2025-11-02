import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cerkon/', // <-- ¡Esta línea es crucial!
  plugins: [
    react()
  ],
})