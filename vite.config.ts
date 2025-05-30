import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from "tailwindcss";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  server: {
    open: true,
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
