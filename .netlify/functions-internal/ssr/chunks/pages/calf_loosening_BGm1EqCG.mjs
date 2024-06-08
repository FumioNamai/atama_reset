import { e as createAstro, f as createComponent, l as defineStyleVars, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderSlot, i as renderComponent } from '../astro_B6h7vYUJ.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$Layout } from './404_ClvMmi_J.mjs';
import '@astrojs/internal-helpers/path';
/* empty css                                   */
import 'clsx';
/* empty css                                   */

const calf = new Proxy({"src":"/_astro/calf.isBQoKzD.webp","width":351,"height":234,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Documents/プログラミング学習/atama_reset/reset website/src/assets/calf.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://atama-reset.com");
const $$PriceTag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PriceTag;
  const { courseTitle, time, price, height = "45px" } = Astro2.props;
  const $$definedVars = defineStyleVars([{ height }]);
  return renderTemplate`${maybeRenderHead()}<div class="course" data-astro-cid-qrm4scwm${addAttribute($$definedVars, "style")}> <p data-astro-cid-qrm4scwm${addAttribute($$definedVars, "style")}>${courseTitle}</p> <div class="time-price" data-astro-cid-qrm4scwm${addAttribute($$definedVars, "style")}> <p class="time" data-astro-cid-qrm4scwm${addAttribute($$definedVars, "style")}>${time}<span data-astro-cid-qrm4scwm${addAttribute($$definedVars, "style")}>分コース</span></p> <p class="price" data-astro-cid-qrm4scwm${addAttribute($$definedVars, "style")}>${price}<span class="yen" data-astro-cid-qrm4scwm${addAttribute($$definedVars, "style")}>円(税込)</span></p> </div> </div> `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/PriceTag.astro", void 0);

const $$Astro$2 = createAstro("https://atama-reset.com");
const $$DiscountOuter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DiscountOuter;
  return renderTemplate`${maybeRenderHead()}<div class="discount_outer" data-astro-cid-mm6zyems> <div class="first_time" data-astro-cid-mm6zyems> <p data-astro-cid-mm6zyems>初回割引</p> <p class="notes" data-astro-cid-mm6zyems>初めてのお客様にご利用いただけます</p> </div> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/DiscountOuter.astro", void 0);

const $$Astro$1 = createAstro("https://atama-reset.com");
const $$DiscountPriceTag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DiscountPriceTag;
  const { time, originalPrice, discountPrice } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="course_discount" data-astro-cid-xr2iczmy> <p class="time" data-astro-cid-xr2iczmy>${time}<span data-astro-cid-xr2iczmy>分コース</span></p> <p class="strikethrough" data-astro-cid-xr2iczmy><span data-astro-cid-xr2iczmy><s data-astro-cid-xr2iczmy>${originalPrice}円</s></span></p> <p class="d-price" data-astro-cid-xr2iczmy>${discountPrice}<span data-astro-cid-xr2iczmy>円(税込)</span></p> </div> `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/DiscountPriceTag.astro", void 0);

const $$Astro = createAstro("https://atama-reset.com");
const $$CalfLoosening = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CalfLoosening;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u3075\u304F\u3089\u306F\u304E\u307B\u3050\u3057", "description": "", "data-astro-cid-uaat3znt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-uaat3znt> <section class="carf_loosening" data-astro-cid-uaat3znt> <div class="container" data-astro-cid-uaat3znt> <h2 data-astro-cid-uaat3znt>ふくらはぎほぐし</h2> <div class="image" data-astro-cid-uaat3znt> ${renderComponent($$result2, "Image", $$Image, { "src": calf, "alt": "", "loading": "eager", "data-astro-cid-uaat3znt": true })} </div> <article data-astro-cid-uaat3znt> <div class="explanation" data-astro-cid-uaat3znt> <h3 data-astro-cid-uaat3znt> <span class="bold" data-astro-cid-uaat3znt> ～ふくらはぎほぐしの効果～</span> </h3> <h4 data-astro-cid-uaat3znt>
➀コリの解消
</h4> <p data-astro-cid-uaat3znt>
身体は一つの大きな筋膜で包まれています<br data-astro-cid-uaat3znt>
（筋膜…個々の筋肉を包み込む膜）
</p> <p data-astro-cid-uaat3znt>
「頭ほぐし」や「ふくらはぎほぐし」で筋膜が緩むことにより、全身の筋膜の緩みに繋がります。
</p> <p data-astro-cid-uaat3znt>全身の筋膜が柔らかくなると全身のコリも緩和されます。</p> <p data-astro-cid-uaat3znt>頭やふくらはぎをほぐして腰痛が改善される事例もあります。</p> <h4 data-astro-cid-uaat3znt>
➁血流改善
</h4> <p data-astro-cid-uaat3znt>
全身の筋膜が柔らかくなり<br data-astro-cid-uaat3znt>コリが緩和されると、<br data-astro-cid-uaat3znt>血流が改善されます。
</p> <h4 data-astro-cid-uaat3znt>
➂冷え・むくみの解消
</h4> <p data-astro-cid-uaat3znt>「ふくらはぎは第２の心臓」<br data-astro-cid-uaat3znt>
ふくらはぎの筋肉は、<br data-astro-cid-uaat3znt>重力で下に溜まった血液を心臓に戻す<br data-astro-cid-uaat3znt>ポンプの役割をしています。
</p> <p data-astro-cid-uaat3znt>
ふくらはぎの筋肉を柔らかくすることで、<br data-astro-cid-uaat3znt>ポンプ機能をスムーズにおこない、<br data-astro-cid-uaat3znt>血行促進し、<br data-astro-cid-uaat3znt>不要な水分や老廃物を排出してくれます。<br data-astro-cid-uaat3znt>そうすることで冷えやむくみが解消されます。
</p> <h4 data-astro-cid-uaat3znt>
➃姿勢が良くなる
</h4> <p data-astro-cid-uaat3znt>全身の筋膜が緩むと姿勢も良くなり、<br data-astro-cid-uaat3znt>深い呼吸ができるようになります。
</p> <h4 data-astro-cid-uaat3znt>
➄リラックス効果
</h4> <p data-astro-cid-uaat3znt>
呼吸が深くなることで、<br data-astro-cid-uaat3znt>全身の血流改善やリラックス効果が期待できます。<br data-astro-cid-uaat3znt>また、深い呼吸には自律神経を整える効果もあります。
</p> <h4 data-astro-cid-uaat3znt>
➅代謝アップ
</h4> <p data-astro-cid-uaat3znt>硬いふくらはぎは血行不良が起こり、<br data-astro-cid-uaat3znt>身体の巡りも悪くなります。<br data-astro-cid-uaat3znt>体内の循環が悪くなると<br data-astro-cid-uaat3znt>栄養やエネルギーが全身に行き渡らなくなり、代謝が落ちることも…
</p><p data-astro-cid-uaat3znt>血流改善が改善されることで代謝アップに繋がります。</p> <p data-astro-cid-uaat3znt>◎ふくらはぎほぐしは以下の症状に効果的です。</p> <p data-astro-cid-uaat3znt>
冷え性、むくみ、腰痛、不眠、頻尿などの尿トラブル、婦人科系症状など
</p>  </div> </article> </div> <aside data-astro-cid-uaat3znt> <h3 data-astro-cid-uaat3znt>ふくらはぎほぐしを含むコース</h3> <h3 class="h3_borderLeft" data-astro-cid-uaat3znt>+ ふくらはぎほぐし</h3> <div class="flex" data-astro-cid-uaat3znt> <div class="price_list" data-astro-cid-uaat3znt> <div class="course_outer" data-astro-cid-uaat3znt> ${renderComponent($$result2, "PriceTag", $$PriceTag, { "time": "90", "price": "10,000", "data-astro-cid-uaat3znt": true })} ${renderComponent($$result2, "PriceTag", $$PriceTag, { "time": "105", "price": "11,500", "data-astro-cid-uaat3znt": true })} ${renderComponent($$result2, "PriceTag", $$PriceTag, { "time": "120", "price": "13,000", "data-astro-cid-uaat3znt": true })} ${renderComponent($$result2, "DiscountOuter", $$DiscountOuter, { "data-astro-cid-uaat3znt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DiscountPriceTag", $$DiscountPriceTag, { "time": "90", "originalPrice": "10,000", "discountPrice": "7,000", "data-astro-cid-uaat3znt": true })} ${renderComponent($$result3, "DiscountPriceTag", $$DiscountPriceTag, { "time": "105", "originalPrice": "11,500", "discountPrice": "8,000", "data-astro-cid-uaat3znt": true })} ${renderComponent($$result3, "DiscountPriceTag", $$DiscountPriceTag, { "time": "120", "originalPrice": "13,000", "discountPrice": "9,000", "data-astro-cid-uaat3znt": true })} ` })} </div> </div> </div> <h3 class="h3_borderLeft" data-astro-cid-uaat3znt>全部コース</h3> <div class="flex" data-astro-cid-uaat3znt> <div class="price_list" data-astro-cid-uaat3znt> <div class="course_outer" data-astro-cid-uaat3znt> ${renderComponent($$result2, "PriceTag", $$PriceTag, { "time": "105", "price": "11,500", "data-astro-cid-uaat3znt": true })} ${renderComponent($$result2, "PriceTag", $$PriceTag, { "time": "120", "price": "13,000", "data-astro-cid-uaat3znt": true })} ${renderComponent($$result2, "DiscountOuter", $$DiscountOuter, { "data-astro-cid-uaat3znt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DiscountPriceTag", $$DiscountPriceTag, { "time": "105", "originalPrice": "11,500", "discountPrice": "8,000", "data-astro-cid-uaat3znt": true })} ${renderComponent($$result3, "DiscountPriceTag", $$DiscountPriceTag, { "time": "120", "originalPrice": "13,000", "discountPrice": "9,000", "data-astro-cid-uaat3znt": true })} ` })} </div> </div> </div> </aside> </section> </main> ` })} `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/calf_loosening.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/calf_loosening.astro";
const $$url = "/calf_loosening";

const calf_loosening = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CalfLoosening,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PriceTag as $, $$DiscountOuter as a, $$DiscountPriceTag as b, calf_loosening as c };
