import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    
    open: true,
    proxy: {
      '/api': {
        target: 'https://api.timbu.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        path : "/images"
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
