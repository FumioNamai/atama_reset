import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0cd4797f.mjs';

const _page0  = () => import('./chunks/generic_4c47d7bb.mjs');
const _page1  = () => import('./chunks/index_3a8a6d8b.mjs');
const _page2  = () => import('./chunks/indefinite_complaint_3c9601f3.mjs');
const _page3  = () => import('./chunks/cerebrospinal_fluid_5b7714cc.mjs');
const _page4  = () => import('./chunks/intestinal_therapy_0e953685.mjs');
const _page5  = () => import('./chunks/sent-reservation_cd852cf5.mjs');
const _page6  = () => import('./chunks/calf_loosening_c3c085f2.mjs');
const _page7  = () => import('./chunks/privacy_policy_246f6986.mjs');
const _page8  = () => import('./chunks/brain_fatigue_c680e7cb.mjs');
const _page9  = () => import('./chunks/sent-inquiry_3499df46.mjs');
const _page10  = () => import('./chunks/enterprise_95a82d29.mjs');
const _page11  = () => import('./chunks/first_time_b2d51181.mjs');
const _page12  = () => import('./chunks/menu_price_6197a6f2.mjs');
const _page13  = () => import('./chunks/greeting_3ae2f122.mjs');
const _page14  = () => import('./chunks/contact_27038021.mjs');
const _page15  = () => import('./chunks/preview_3ee1db64.mjs');
const _page16  = () => import('./chunks/_page__b90a535a.mjs');
const _page17  = () => import('./chunks/voice_04b14a69.mjs');
const _page18  = () => import('./chunks/_slug__97baa048.mjs');
const _page19  = () => import('./chunks/news_f1019b1d.mjs');
const _page20  = () => import('./chunks/404_fcd2d93e.mjs');
const _page21  = () => import('./chunks/FAQ_cd2ad43a.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/indefinite_complaint.astro", _page2],["src/pages/cerebrospinal_fluid.astro", _page3],["src/pages/intestinal_therapy.astro", _page4],["src/pages/sent-reservation.astro", _page5],["src/pages/calf_loosening.astro", _page6],["src/pages/privacy_policy.astro", _page7],["src/pages/brain_fatigue.astro", _page8],["src/pages/sent-inquiry.astro", _page9],["src/pages/enterprise.astro", _page10],["src/pages/first_time.astro", _page11],["src/pages/menu&price.astro", _page12],["src/pages/greeting.astro", _page13],["src/pages/contact.astro", _page14],["src/pages/preview.astro", _page15],["src/pages/blogs/[page].astro", _page16],["src/pages/voice.astro", _page17],["src/pages/blog/[slug].astro", _page18],["src/pages/news.astro", _page19],["src/pages/404.astro", _page20],["src/pages/FAQ.astro", _page21]]);
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
