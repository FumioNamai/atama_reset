import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fcf20f42.mjs';

const _page0  = () => import('./chunks/generic_4129305f.mjs');
const _page1  = () => import('./chunks/index_f10dce22.mjs');
const _page2  = () => import('./chunks/indefinite_complaint_e6e0163b.mjs');
const _page3  = () => import('./chunks/cerebrospinalFluid_d5785cf9.mjs');
const _page4  = () => import('./chunks/intestinal_therapy_0c7ec53e.mjs');
const _page5  = () => import('./chunks/sent-reservation_0b1992c3.mjs');
const _page6  = () => import('./chunks/calf_loosening_09055df5.mjs');
const _page7  = () => import('./chunks/privacy_policy_ef27f54f.mjs');
const _page8  = () => import('./chunks/brain_fatigue_602c9e8a.mjs');
const _page9  = () => import('./chunks/sent-inquiry_4944a4ed.mjs');
const _page10  = () => import('./chunks/enterprise_df42ba80.mjs');
const _page11  = () => import('./chunks/first_time_6807b6be.mjs');
const _page12  = () => import('./chunks/menu_price_1d3671e4.mjs');
const _page13  = () => import('./chunks/greeting_62298889.mjs');
const _page14  = () => import('./chunks/contact_38e91479.mjs');
const _page15  = () => import('./chunks/preview_f03870f5.mjs');
const _page16  = () => import('./chunks/_page__6b197590.mjs');
const _page17  = () => import('./chunks/voice_46d70cd0.mjs');
const _page18  = () => import('./chunks/_slug__be926a14.mjs');
const _page19  = () => import('./chunks/news_8bec25bc.mjs');
const _page20  = () => import('./chunks/404_f8b9fbd4.mjs');
const _page21  = () => import('./chunks/FAQ_1f6b00f2.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/indefinite_complaint.astro", _page2],["src/pages/cerebrospinalFluid.astro", _page3],["src/pages/intestinal_therapy.astro", _page4],["src/pages/sent-reservation.astro", _page5],["src/pages/calf_loosening.astro", _page6],["src/pages/privacy_policy.astro", _page7],["src/pages/brain_fatigue.astro", _page8],["src/pages/sent-inquiry.astro", _page9],["src/pages/enterprise.astro", _page10],["src/pages/first_time.astro", _page11],["src/pages/menu&price.astro", _page12],["src/pages/greeting.astro", _page13],["src/pages/contact.astro", _page14],["src/pages/preview.astro", _page15],["src/pages/blogs/[page].astro", _page16],["src/pages/voice.astro", _page17],["src/pages/blog/[slug].astro", _page18],["src/pages/news.astro", _page19],["src/pages/404.astro", _page20],["src/pages/FAQ.astro", _page21]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
