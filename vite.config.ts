import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
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
});
