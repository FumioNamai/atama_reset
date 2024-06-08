import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro/server_5b850809.mjs';
import 'clsx';
import { $ as $$Image, a as $$Layout } from './404_e0b52eba.mjs';
/* empty css                                          */
const stiff_neck = new Proxy({"src":"/_astro/stiff_neck.68bb6c50.webp","width":640,"height":427,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://localhost:4321/");
const $$IndefiniteComplaint = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndefiniteComplaint;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u4E0D\u5B9A\u6101\u8A34\u3068\u306F", "description": "", "data-astro-cid-ptb5atm2": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-ptb5atm2><h3 data-astro-cid-ptb5atm2>～不定愁訴<span data-astro-cid-ptb5atm2>（ふていしゅうそ）</span>とは～</h3><div class="image" data-astro-cid-ptb5atm2>${renderComponent($$result2, "Image", $$Image, { "src": stiff_neck, "alt": "\u80A9\u3053\u308A", "loading": "eager", "data-astro-cid-ptb5atm2": true })}</div><article data-astro-cid-ptb5atm2><ul data-astro-cid-ptb5atm2><li data-astro-cid-ptb5atm2>頭が重い(痛い)</li><li data-astro-cid-ptb5atm2>首や肩がこる</li><li data-astro-cid-ptb5atm2>イライラする</li><li data-astro-cid-ptb5atm2>疲労感が取れない</li><li data-astro-cid-ptb5atm2>寝つきが悪い</li><li data-astro-cid-ptb5atm2>何度も目が覚める</li><li data-astro-cid-ptb5atm2>なんとなく体調が悪い</li><li data-astro-cid-ptb5atm2>体がダルい</li><li data-astro-cid-ptb5atm2>足がむくむ</li><li data-astro-cid-ptb5atm2>手足が冷える</li><li data-astro-cid-ptb5atm2>のぼせる</li><li data-astro-cid-ptb5atm2>便秘や下痢を繰り返す</li><li data-astro-cid-ptb5atm2>息切れや動悸がする</li><li data-astro-cid-ptb5atm2>めまい</li><li data-astro-cid-ptb5atm2>生理不順</li></ul><p data-astro-cid-ptb5atm2>
などといった、<br data-astro-cid-ptb5atm2>自覚症状の訴えがあるものの、<br data-astro-cid-ptb5atm2>検査をしても原因となる病気は見つからない状態のこと。
</p><p data-astro-cid-ptb5atm2>
疲労やストレスなどによる<br data-astro-cid-ptb5atm2>自律神経の乱れが原因とされています。
</p></article></main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/indefinite_complaint.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/indefinite_complaint.astro";
const $$url = "/indefinite_complaint";

export { $$IndefiniteComplaint as default, $$file as file, $$url as url };
