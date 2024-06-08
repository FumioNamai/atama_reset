import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import preact from "@astrojs/preact";
import { siteMeta } from './src/library/constants';
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
const {
  siteUrl
} = siteMeta;


// https://astro.build/config
export default defineConfig({
  integrations: [preact({
    compat: true
  }), sitemap(), partytown({
    config: {
      forward:['dataLayer.push'],
    },
  })],
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  output: "hybrid",
  // output: "server",
  adapter: netlify(),
  site: siteUrl
});
