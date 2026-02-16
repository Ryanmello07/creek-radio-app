import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/icecast-status': {
        target: 'https://creekradio.nohost.me',
        changeOrigin: true,
        rewrite: (path) => '/status-json.xsl',
      },
    },
  },
});
