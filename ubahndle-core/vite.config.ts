import { defineConfig } from "vite"
import { resolve } from "node:path"

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"]
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.tsx"),
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'semantic-ui-react',
        'react-i18next',
        'i18next',
        'i18next-browser-languagedetector',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  }
})
