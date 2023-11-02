import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Zidaricandrej.com/Projects/modernApp/dist/',
  build: {
    outDir: 'dist'
  }
});
