/// <reference types="vitest" />
/// <reference types="vitest/config" />

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
  const environment = env.VITE_REACT_APP_ENVIRONMENT;

  return {
    plugins: [
      react(),
      svgr(),
      (environment === 'STAGING' || environment === 'PRODUCTION') &&
        removeConsole({
          includes: ['log', 'debug', 'error', 'info'],
        }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/vitest.setup.ts',
      css: true,
      testTimeout: 5000,
      reporters: ['verbose'],
      exclude: ['**/node_modules/**', '**/dist/**'],
    },
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
