import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';
import htmlMinifier from 'vite-plugin-html-minifier';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression({
    verbose: true,        // Output information about compressed files
    disable: false,       // Disable compression in certain environments
    threshold: 10240,     // Files larger than this will be compressed (in bytes)
    algorithm: 'gzip',    // Compression algorithm (gzip or brotli)
    ext: '.gz',
  }), htmlMinifier({
    minify: true
  })],
  build: {
    sourcemap: true
  }
})
