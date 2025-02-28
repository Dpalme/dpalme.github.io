import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      open: true,
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, './index.html'),
          about: resolve(__dirname, './about/index.html'),
          work: resolve(__dirname, './work/index.html'),
          projects: resolve(__dirname, './projects/index.html'),
          workAndreas: resolve(__dirname, './work/andreas/index.html'),
          workMRP: resolve(__dirname, './work/mrp/index.html'),
        },
      },
    },
    resolve: {
      alias: {
        '#': resolve(__dirname, './src'),
        '#shared': resolve(__dirname, './src/shared'),
        '#assets': resolve(__dirname, './src/assets'),
      },
    },
    base: env.BASE_URL || '/',
  };
});
