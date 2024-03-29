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
});
