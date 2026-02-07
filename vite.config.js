import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
   test: {
    globals: true,         // use global test functions like `test`, `expect`
    environment: 'jsdom',  // simulate browser environment
    setupFiles: './src/setupTests.js' // optional for jest-dom
  },
  
})
