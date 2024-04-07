import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B7klFz83.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_2Dm0nmlu.mjs');
const _page1 = () => import('./chunks/404_BfiMchrX.mjs');
const _page2 = () => import('./chunks/_slug__COHa51Mh.mjs');
const _page3 = () => import('./chunks/_page__C-guddb0.mjs');
const _page4 = () => import('./chunks/brain_fatigue_DW5kpbdH.mjs');
const _page5 = () => import('./chunks/calf_loosening_BtZcHemA.mjs');
const _page6 = () => import('./chunks/cerebrospinal_fluid_D2PjllbG.mjs');
const _page7 = () => import('./chunks/contact_CoqhcNQa.mjs');
const _page8 = () => import('./chunks/enterprise_DEzU-xW9.mjs');
const _page9 = () => import('./chunks/FAQ_D-5Cmec8.mjs');
const _page10 = () => import('./chunks/first_time_DhMcGzC1.mjs');
const _page11 = () => import('./chunks/greeting_DOiNGCT6.mjs');
const _page12 = () => import('./chunks/indefinite_complaint_BgoAYw0f.mjs');
const _page13 = () => import('./chunks/intestinal_therapy_BPhmnwe9.mjs');
const _page14 = () => import('./chunks/menu_price_I7W5ya_-.mjs');
const _page15 = () => import('./chunks/news_DtdsIyKU.mjs');
const _page16 = () => import('./chunks/preview_CbcdWmIx.mjs');
const _page17 = () => import('./chunks/privacy_policy_e_jIM2ej.mjs');
const _page18 = () => import('./chunks/sent-inquiry_Da5xubTr.mjs');
const _page19 = () => import('./chunks/sent-reservation_D1fxX9uW.mjs');
const _page20 = () => import('./chunks/voice_C6QiwGvU.mjs');
const _page21 = () => import('./chunks/index_C1-5W3Vu.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blogs/[page].astro", _page3],
    ["src/pages/brain_fatigue.astro", _page4],
    ["src/pages/calf_loosening.astro", _page5],
    ["src/pages/cerebrospinal_fluid.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/enterprise.astro", _page8],
    ["src/pages/FAQ.astro", _page9],
    ["src/pages/first_time.astro", _page10],
    ["src/pages/greeting.astro", _page11],
    ["src/pages/indefinite_complaint.astro", _page12],
    ["src/pages/intestinal_therapy.astro", _page13],
    ["src/pages/menu&price.astro", _page14],
    ["src/pages/news.astro", _page15],
    ["src/pages/preview.astro", _page16],
    ["src/pages/privacy_policy.astro", _page17],
    ["src/pages/sent-inquiry.astro", _page18],
    ["src/pages/sent-reservation.astro", _page19],
    ["src/pages/voice.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "320f3c1a-a094-4872-9d08-ef272be784de"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
