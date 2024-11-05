import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import removeConsole from 'vite-plugin-remove-console';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  const environment = env.VITE_ENVIRONMENT;

  return {
    plugins: [
      react(),
      svgr(),
      (environment === 'STAGING' || environment === 'PRODUCTION') &&
        removeConsole({
          includes: ['log', 'debug', 'error', 'info'],
        }),
    ],
    server: {
      port: 3000,
      open: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  };
});
