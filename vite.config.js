// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Optional: Configure path aliases
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
    },
  },

  // Optional: Configure build options
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,

    // Minimize CSS
    minify: "esbuild",

    // Configure rollup options
    rollupOptions: {
      output: {
        // Separate CSS files
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },

  // Optional: Configure dev server
  server: {
    port: 3000,
    open: true,
  },
});
