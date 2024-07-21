// @ts-check
import { mergeConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"

export const defaultConfig = defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [visualizer()]
});

export const reactConfig = mergeConfig(defaultConfig, {
  plugins: [react()],
});
