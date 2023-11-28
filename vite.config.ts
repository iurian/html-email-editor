import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { open: true, host: 'localhost', port: 3000 },
  build: {
    outDir: 'dist',
    rollupOptions: {
      treeshake: false,
      moduleContext: {
        './node_modules/pdfmake/build/vfs_fonts.js': 'window',
      },
    },
  },
});
