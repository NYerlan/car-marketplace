import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allow external access
    port: 5173,
    watch: {
      usePolling: true  // Required for file watching in Docker
    }
  }
});