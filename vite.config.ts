import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/styles/quasar-variables.scss'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')  // Define o alias '@' para o diretório 'src'
    }
  }
})