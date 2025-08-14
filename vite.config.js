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
  // build: {
  //   // Enable CSS code splitting
  //   cssCodeSplit: true,

  //   // Minimize CSS
  //   minify: "esbuild",

  //   // Configure rollup options
  //   rollupOptions: {
  //     output: {
  //       // Separate CSS files
  //       assetFileNames: "assets/[name]-[hash][extname]",
  //     },
  //   },
  // },

  // build: {
  //   // Enable CSS code splitting
  //   cssCodeSplit: true,

  //   // Minimize CSS
  //   minify: "esbuild",

  //   // Configure rollup options
  //   rollupOptions: {
  //     output: {
  //       // Separate CSS files
  //       assetFileNames: "assets/[name]-[hash][extname]",

  //       // Split vendor chunks
  //       manualChunks(id) {
  //         if (id.includes("node_modules")) {
  //           return id
  //             .toString()
  //             .split("node_modules/")[1]
  //             .split("/")[0]
  //             .toString();
  //         }
  //       },
  //     },
  //   },
  // },

  build: {
    cssCodeSplit: true,
    minify: "esbuild",

    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",

        // Split vendor chunks for better caching
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },

  // Optional: Configure dev server
  server: {
    port: 3000,
    open: true,
  },
});
