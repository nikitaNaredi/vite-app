import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Make sure it's listening on all network interfaces
    port: 5173, // The port you want to use (optional, default is 5173)
  },
});
