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
  output: "static",
  // output: "server",
  // adapter: netlify({
    // Edge Functions をローカルで有効にしない（必要な場合のみ設定）
    // edgeMiddleware: false
  // }),
  site: siteUrl
});
