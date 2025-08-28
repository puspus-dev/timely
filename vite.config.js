// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/timely/", // GitHub Pages path
  plugins: [react()],
});
