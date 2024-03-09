import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  server: {
    proxy: {
      'eo-space-vue/db': {
        target: 'http://localhost:5173/eo-space-vue/', // Замените на URL вашего локального сервера с файлом tasks.json
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/db/, '')
      }
    }
  }
})
