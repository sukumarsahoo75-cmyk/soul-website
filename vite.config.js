import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // --- ADD THIS SECTION ---
    rollupOptions: {
      external: ['razorpay', 'cors'],
    },
  },
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: ['react-router-dom'],
  },
})