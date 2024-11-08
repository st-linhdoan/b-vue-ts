import Path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    port: 3000, // Change this to your desired port
  },
  publicDir: './src/assets',
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, './src'),
      '@app': Path.resolve(__dirname, './src/app'),
      '@config': Path.resolve(__dirname, './src/config'),
      '@stylesheet': Path.resolve(__dirname, './src/stylesheet'),
      '@shared': Path.resolve(__dirname, './src/app/shared'),
      '@core': Path.resolve(__dirname, './src/app/core'),
      '@assets': Path.resolve(__dirname, './src/assets'),
    },
  },
});
