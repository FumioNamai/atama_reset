import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

import preact from "@astrojs/preact";

import { siteMeta } from './src/library/constants';
const { siteUrl } = siteMeta;

// https://astro.build/config
export default defineConfig({
  integrations: [preact({
    compat: true
  })],
  image: {
    remotePatterns:[{ protocol: "https" }]
  },
  output: "server",
  adapter: netlify(),
  site: siteUrl,
});
