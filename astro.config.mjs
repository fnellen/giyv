import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "https://www.giyv.eu",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  image: {
    domains: ["cms.giyv.eu", "storage.googleapis.com"],
    remotePatterns: [{ protocol: "https" }],
  },
});
