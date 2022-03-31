import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.vitest.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: './src/test/setup.ts',
  },
})