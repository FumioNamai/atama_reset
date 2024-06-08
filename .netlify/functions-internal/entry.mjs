import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_c9ff411b.mjs';

const _page0  = () => import('./chunks/generic_c0dd9395.mjs');
const _page1  = () => import('./chunks/index_ac8759ab.mjs');
const _page2  = () => import('./chunks/indefinite_complaint_91bb7be3.mjs');
const _page3  = () => import('./chunks/cerebrospinal_fluid_9bbc86a5.mjs');
const _page4  = () => import('./chunks/intestinal_therapy_c4233e3c.mjs');
const _page5  = () => import('./chunks/sent-reservation_65c6230c.mjs');
const _page6  = () => import('./chunks/calf_loosening_78ca35f8.mjs');
const _page7  = () => import('./chunks/privacy_policy_bdf37b0e.mjs');
const _page8  = () => import('./chunks/brain_fatigue_95a8ee25.mjs');
const _page9  = () => import('./chunks/sent-inquiry_e8baf08c.mjs');
const _page10  = () => import('./chunks/enterprise_81cd2afe.mjs');
const _page11  = () => import('./chunks/first_time_3722b724.mjs');
const _page12  = () => import('./chunks/menu_price_f2f65fc2.mjs');
const _page13  = () => import('./chunks/greeting_37adcfaa.mjs');
const _page14  = () => import('./chunks/contact_835c0cb6.mjs');
const _page15  = () => import('./chunks/preview_bc15ebcb.mjs');
const _page16  = () => import('./chunks/_page__4962094f.mjs');
const _page17  = () => import('./chunks/voice_cf4ab685.mjs');
const _page18  = () => import('./chunks/_slug__cc7108cf.mjs');
const _page19  = () => import('./chunks/news_28c562ab.mjs');
const _page20  = () => import('./chunks/404_3f92b424.mjs');
const _page21  = () => import('./chunks/FAQ_f254791d.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/indefinite_complaint.astro", _page2],["src/pages/cerebrospinal_fluid.astro", _page3],["src/pages/intestinal_therapy.astro", _page4],["src/pages/sent-reservation.astro", _page5],["src/pages/calf_loosening.astro", _page6],["src/pages/privacy_policy.astro", _page7],["src/pages/brain_fatigue.astro", _page8],["src/pages/sent-inquiry.astro", _page9],["src/pages/enterprise.astro", _page10],["src/pages/first_time.astro", _page11],["src/pages/menu&price.astro", _page12],["src/pages/greeting.astro", _page13],["src/pages/contact.astro", _page14],["src/pages/preview.astro", _page15],["src/pages/blogs/[page].astro", _page16],["src/pages/voice.astro", _page17],["src/pages/blog/[slug].astro", _page18],["src/pages/news.astro", _page19],["src/pages/404.astro", _page20],["src/pages/FAQ.astro", _page21]]);
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
