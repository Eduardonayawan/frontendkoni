import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default {
  // Default settings should handle most scenarios
  build: {
    // No need to externalize bootstrap unless you're doing so intentionally
    rollupOptions: {
      // Only add external libraries here if you're intentionally excluding them from the bundle
      // external: ['bootstrap']
    }
  }
}
