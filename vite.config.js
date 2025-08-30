import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['11f5f5c8c93d.ngrok-free.app'], // 👈 add your ngrok URL here
    port: 5173, // or whatever you're using
    host: true, // allow external access if needed
  },
})
