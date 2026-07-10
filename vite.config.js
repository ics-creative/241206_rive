import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "./",
  publicDir: "../static",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
});
