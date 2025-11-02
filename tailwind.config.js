/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cerkon-orange': '#F97316', 
        'cerkon-dark': '#111827',   
        'cerkon-light': '#FFFFFF',
        'cerkon-gray': '#6B7280',   
      },
      
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], 
        'heading': ['Poppins', 'sans-serif'], 
      },

      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseLight: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.5s ease-out forwards',
        'pulse-light': 'pulseLight 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      backgroundImage: {
        // --- Patrón de circuito (mantener por si acaso, pero no lo usaremos en Home.jsx) ---
        'circuit-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.1'%3E%3Cpath d='M0 39.5S1.1 38.1 1.5 38c.4-.1.9-.3 1.4-.6.5-.2 1.2-.5 1.8-.9.6-.4 1.4-1 2-1.7.6-.7 1.3-1.6 1.8-2.6.5-1 1-2.2 1-3.4 0-1.2-.5-2.4-1-3.4s-1.3-1.9-1.8-2.6C6 21 5.4 20 4.8 19.3c-.6-.7-1.2-1.3-1.8-1.7-.5-.4-1.1-.7-1.4-.9-.4-.2-.9-.4-1.4-.6C.1 16 0 15.5 0 15.5v-1.5c0-.1 1.1 1.3 1.5 1.4.4.1.9.3 1.4.6.5.2 1.2.5 1.8.9.6.4 1.4 1 2 1.7.6.7 1.3 1.6 1.8 2.6.5 1 1 2.2 1 3.4 0 1.2-.5 2.4-1 3.4s-1.3 1.9-1.8-2.6c-.6.7-1.3 1.3-2 1.7-.6.4-1.2.7-1.8.9-.5.2-1 .4-1.4.6C1.1 23.9 0 24.5 0 24.5v1.5c0-.1 1.1 1.3 1.5 1.4.4.1.9.3 1.4.6.5.2 1.2.5 1.8.9.6.4 1.4 1 2 1.7.6.7 1.3 1.6 1.8 2.6.5 1 1 2.2 1 3.4 0 1.2-.5 2.4-1 3.4s-1.3 1.9-1.8 2.6c-.6.7-1.3 1.3-2 1.7-.6.4-1.2.7-1.8.9-.5.2-1 .4-1.4.6C1.1 38.9 0 39.5 0 39.5v.5zm40 .5S38.9.1 38.5 0c-.4.1-.9.3-1.4.6-.5.2-1.2.5-1.8.9-.6.4-1.4 1-2 1.7-.6.7-1.3 1.6-1.8 2.6-.5 1-1 2.2-1 3.4 0 1.2.5 2.4 1 3.4s1.3 1.9 1.8 2.6c.6.7 1.3 1.3 2 1.7.6.4 1.2.7 1.8.9.5.2 1 .4 1.4.6C38.9 16 40 15.5 40 15.5v1.5c0 .1-1.1-1.3-1.5-1.4-.4-.1-.9-.3-1.4-.6-.5-.2-1.2-.5-1.8-.9-.6-.4-1.4-1-2-1.7-.6-.7-1.3-1.6-1.8-2.6-.5-1-1-2.2-1-3.4 0-1.2.5-2.4 1 3.4s1.3 1.9 1.8 2.6c.6.7 1.3 1.3 2 1.7.6.4 1.2.7 1.8.9.5.2 1 .4 1.4.6C38.9 23.9 40 24.5 40 24.5v-1.5c0 .1-1.1-1.3-1.5-1.4-.4-.1-.9-.3-1.4-.6-.5-.2-1.2-.5-1.8-.9-.6-.4-1.4-1-2-1.7-.6-.7-1.3-1.6-1.8-2.6-.5-1-1-2.2-1-3.4 0-1.2.5-2.4 1 3.4s1.3 1.9 1.8 2.6c.6.7 1.3 1.3 2 1.7.6.4 1.2.7 1.8.9-.5.2-1 .4-1.4.6C38.9 38.9 40 39.5 40 39.5v.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        // --- 💡 NUEVO FONDO DE CABLES 💡 ---
        'cables-pattern': "url('/images/background_cables.jpg')",
      },
    },
  },
  plugins: [],
}