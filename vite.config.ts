import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-plugin-electron/simple';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      main:{
        entry: 'electron/main.ts',
      },
      preload:{
        input:path.join(__dirname,'/electron/preload.ts')
      }
      
    }),
  ],
  resolve: {
    alias: {
      '_': path.resolve('./src')
    }
  }
})
