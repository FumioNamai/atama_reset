import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_B6h7vYUJ.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$Layout } from './404_ClvMmi_J.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$ContactAddress } from './contact_Cza1vGXr.mjs';
/* empty css                               */

const enterprise = new Proxy({"src":"/_astro/enterprise.CQ6Awt7T.webp","width":640,"height":334,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Documents/プログラミング学習/atama_reset/reset website/src/assets/enterprise.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://atama-reset.com");
const $$Enterprise = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Enterprise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u4F01\u696D\u30FB\u56E3\u4F53\u69D8", "description": "", "data-astro-cid-tmu5tbwg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-tmu5tbwg> <section data-astro-cid-tmu5tbwg> <h2 data-astro-cid-tmu5tbwg>企業・団体様</h2> <div class="image" data-astro-cid-tmu5tbwg> ${renderComponent($$result2, "Image", $$Image, { "src": enterprise, "alt": "", "loading": "eager", "data-astro-cid-tmu5tbwg": true })} </div> <article data-astro-cid-tmu5tbwg> <p data-astro-cid-tmu5tbwg>
当店では、企業様や団体様への訪問施術やイベントを承っております。
</p> <p data-astro-cid-tmu5tbwg>
お気軽にお問い合わせください。
</p> <p data-astro-cid-tmu5tbwg>
従業員の方の福利厚生にもお役立ていただいております。
</p> <p data-astro-cid-tmu5tbwg>
※個人宅への出張施術は行っておりません
</p> </article> ${renderComponent($$result2, "ContactAddress", $$ContactAddress, { "data-astro-cid-tmu5tbwg": true })} <div class="notice" data-astro-cid-tmu5tbwg> <p class="bold" data-astro-cid-tmu5tbwg>～営業のお電話について～</p> <p data-astro-cid-tmu5tbwg>大切なお客様との時間のために、<br data-astro-cid-tmu5tbwg><span class="bold" data-astro-cid-tmu5tbwg>営業中のお電話はご遠慮いただきますようお願い致します。<br data-astro-cid-tmu5tbwg>お問い合わせは必ずメールにて</span>お願い致します。</p> <p data-astro-cid-tmu5tbwg>営業時間｜12時 ~ 21時［不定休］</p> </div> </section> </main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/enterprise.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/enterprise.astro";
const $$url = "/enterprise";

export { $$Enterprise as default, $$file as file, $$url as url };
