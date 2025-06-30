import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false, // Отключаем минификацию HTML
    cssMinify: true, // Включаем минификацию CSS
    rollupOptions: {
      output: {
        // Настройки для CSS
        assetFileNames: assetInfo => {
          if (assetInfo.name.endsWith('.css')) {
            return 'src/css/[name][extname]';
          }
          return 'src/[name]-[hash][extname]';
        },
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 3000,
    open: true,
  },
});
