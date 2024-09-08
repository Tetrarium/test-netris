import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: './',
  root: './src',
  publicDir: '../public',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react({ plugins: [] }),
    paths({ root: '../' }),
  ],
});
