import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://www.giyv.eu",
  output: "static",
  image: {
    domains: ["cms.giyv.eu", "storage.googleapis.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  redirects: {
    "/junges-manifest": "/blog/junges-manifest",
    "/manifesto-giovani": "/it/blog/manifesto-dei-giovani",
  },
});
