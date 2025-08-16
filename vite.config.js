import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Hometrace",
        short_name: "HTC",
        description:
          "Hometrace is a property tech app helping people find houses or land to rent or buy, and connect with trusted agents.",
        theme_color: "#ffffff",
        background_color: "#000000",
        display: "standalone",
        start_url: "/",
      },
    }),
  ],
});
