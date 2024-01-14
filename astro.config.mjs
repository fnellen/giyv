import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://www.giyv.eu",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  image: {
    domains: ["cms.giyv.eu", "storage.googleapis.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  redirects: {
    "/junges-manifest": "/blog/junges-manifest",
    "/manifesto-giovani": "/it/blog/manifesto-dei-giovani",
  },
});
