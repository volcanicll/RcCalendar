import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "rc-cadenar",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `rcCalendar.${format}.js`,
    },
  },
});
