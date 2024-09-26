import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/kasa_app/",
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // Cela vous permet d'utiliser "@/assets" par exemple
    },
  },
});
