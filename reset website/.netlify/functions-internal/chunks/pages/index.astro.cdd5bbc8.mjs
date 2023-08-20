import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.dbf8e0aa.mjs';
import 'html-escaper';
import { $ as $$Layout } from './FAQ.astro.994fc13f.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         *//* empty css                         */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "HOME", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="astro-J7PV25F6">
		<h1 class="astro-J7PV25F6">頭ほぐし専門店reset</h1>
	</main>
` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/index.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
