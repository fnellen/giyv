import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compressor(), purgecss()],
  site: "https://www.giyv.eu",
  output: "static",
  image: {
    domains: ["cms.giyv.eu", "storage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  redirects: {
    "/junges-manifest": {
      status: 301,
      destination: "/blog/junges-manifest",
    },
    "/manifesto-giovani": {
      status: 301,
      destination: "/it/blog/manifesto-dei-giovani",
    },
    "/youth-manifesto": {
      status: 301,
      destination: "/en/blog/youth-manifesto",
    },
  },
});
