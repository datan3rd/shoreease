import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages friendly config:
// - base: './' ensures assets work regardless of the repo name / subpath
// - GEMINI_API_KEY can be provided via env files OR CI secrets (process.env)
export default defineConfig(({ mode }) => {
  const envFromFiles = loadEnv(mode, '.', '');
  const geminiKey = process.env.GEMINI_API_KEY ?? envFromFiles.GEMINI_API_KEY;

  return {
    base: './',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(geminiKey),
      'process.env.GEMINI_API_KEY': JSON.stringify(geminiKey),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
