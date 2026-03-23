// vite.config.js
// The proxy tells Vite: "any request starting with /api,
// forward it to the Express server on port 5000."
// This avoids CORS issues during development.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
