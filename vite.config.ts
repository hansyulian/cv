import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

const config = defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_mantine";`,
      },
      postcss: {
        plugins: {
          "postcss-preset-mantine": {},
          "postcss-simple-vars": {
            variables: {
              "mantine-breakpoint-xs": "36em",
              "mantine-breakpoint-sm": "48em",
              "mantine-breakpoint-md": "62em",
              "mantine-breakpoint-lg": "75em",
              "mantine-breakpoint-xl": "88em",
            },
          },
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: "~", replacement: resolve(__dirname, "src") },
      { find: "~test", replacement: resolve(__dirname, "test") },
    ],
  },
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(config as any).test = {
  environment: "jsdom",
  globals: true,
  setupFiles: "./vitest.setup.js",
};

export default config;
