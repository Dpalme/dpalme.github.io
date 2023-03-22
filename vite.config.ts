import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      open: true,
    },
    ssr: {
      target: 'node',
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            './index.html'
          ),
          about: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            './about/index.html'
          ),
          work: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            './work/index.html'
          ),
          projects: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            './projects/index.html'
          ),
          workAndreas: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            './work/andreas/index.html'
          ),
          workMRP: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            './work/mrp/index.html'
          ),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './src'
        ),
        '@shared': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './src/shared'
        ),
        '@assets': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './src/assets'
        ),
      },
    },
    base: env.BASE_URL || '',
  };
});
