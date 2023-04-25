/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    coverage: {
      provider: "c8",
      all: true,
      enabled: true,
      reporter: ["text"],
      include: ["**/*.{jsx,tsx}"],
      exclude: ["src/main.tsx"],
    },
  },
});
