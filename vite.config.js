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
    allowedHosts: ['52c33dd3e35c.ngrok-free.app'], // 👈 add your ngrok URL here
    port: 5173, // or whatever you're using
    host: true, // allow external access if needed
  },
})
