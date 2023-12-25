import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/npm run
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "AppSpecs",
      filename: "remoteEntry.js",
      exposes: {
        "./AppSpecs": "./src/AppSpecs",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false ,
    cssCodeSplit: false,
  },
});
