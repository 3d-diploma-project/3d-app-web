/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import restart from 'vite-plugin-restart'
import { configDefaults } from 'vitest/config'

const exclude = [
  ...configDefaults.exclude,
  '**/translations/**',
  '*config.js',
  '*config.ts',
  './vite-env.d.ts',
  './src/main.tsx',
  './src/App.tsx',
  './src/vite-env.d.ts',
  'src/tests/setup.ts',
  './vite.config.ts'
]

export default defineConfig({
  plugins: [react(), glsl(), restart({ restart: ['../public/**'] })],
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    exclude,
    coverage: {
      reporter: ['lcov', 'text'],
      exclude
    }
  }
})
