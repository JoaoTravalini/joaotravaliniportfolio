import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  envPrefix: 'VITE_APP_',
  server: {
    host: '127.0.0.1',
  },
  preview: {
    host: '127.0.0.1',
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;

          if (id.includes('@react-three') || id.includes('three')) {
            return 'three';
          }

          if (id.includes('react') || id.includes('scheduler')) {
            return 'react';
          }

          return 'vendor';
        },
      },
    },
  },
})
