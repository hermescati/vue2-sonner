import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue2(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/packages/index.ts'),
      name: 'Vue2Sonner',
      fileName: (format) => `vue2-sonner.${format === 'es' ? 'es.js' : 'umd.cjs'}`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})