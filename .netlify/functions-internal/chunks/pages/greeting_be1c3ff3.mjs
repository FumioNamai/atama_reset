import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro/server_5b850809.mjs';
import 'clsx';
import { $ as $$Image, a as $$Layout } from './404_994bcc84.mjs';
/* empty css                              */
const clinic_image3 = new Proxy({"src":"/_astro/clinic_image_3.9fd91ffc.webp","width":400,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const clinic_image4 = new Proxy({"src":"/_astro/clinic_image_4.0c520ef4.webp","width":400,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const thanks = new Proxy({"src":"/_astro/Thanks.0882c992.webp","width":320,"height":213,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://atama-reset.com");
const $$Greeting = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Greeting;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u3054\u3042\u3044\u3055\u3064", "description": "", "data-astro-cid-q6gh5kud": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-q6gh5kud><section data-astro-cid-q6gh5kud><h2 data-astro-cid-q6gh5kud>ごあいさつ</h2><div class="image" data-astro-cid-q6gh5kud>${renderComponent($$result2, "Image", $$Image, { "src": thanks, "alt": "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01", "width": "320", "height": "213", "loading": "eager", "data-astro-cid-q6gh5kud": true })}</div><article data-astro-cid-q6gh5kud><p data-astro-cid-q6gh5kud>「頭から体の不調を整える」 をモットーに。</p><p data-astro-cid-q6gh5kud>当店は、お子様から幅広い年齢層のお客様にお越しいただいております。</p><p data-astro-cid-q6gh5kud>
老若男女、<br data-astro-cid-q6gh5kud>
すべての皆様のカラダもココロも<br data-astro-cid-q6gh5kud>
元気にできるお手伝いができれば光栄です。
</p><p data-astro-cid-q6gh5kud>
陽だまりのような<br data-astro-cid-q6gh5kud>
ほっと心落ち着ける場所となりますよう<br data-astro-cid-q6gh5kud>
ひとりひとりのお客様とのお時間を大切にいたします。<br data-astro-cid-q6gh5kud></p><p data-astro-cid-q6gh5kud>
完全個室のプライベート空間で<br data-astro-cid-q6gh5kud>
日頃のお疲れをゆっくり癒してください。
</p><p data-astro-cid-q6gh5kud>
お身体のお疲れ<br data-astro-cid-q6gh5kud>
頭のお疲れ<br data-astro-cid-q6gh5kud>
それらが引き起こす心のお疲れも<br data-astro-cid-q6gh5kud>
当店でリセットして
</p><p data-astro-cid-q6gh5kud>
皆さまの毎日が<br data-astro-cid-q6gh5kud>
健康で、笑顔あふれるものになりますように。
</p><p data-astro-cid-q6gh5kud>
皆さまとの一期一会を心よりお待ちしております。
</p><p data-astro-cid-q6gh5kud>
健康なからだについての情報をブログに綴っています。
</p><p data-astro-cid-q6gh5kud>
ぜひ毎日の健康の参考になさってください。
</p></article><div class="certificatiion" data-astro-cid-q6gh5kud><p data-astro-cid-q6gh5kud>
日本ヘッドセラピスト認定協会<br data-astro-cid-q6gh5kud>
日本ヘッドセラピスト専門学院<br data-astro-cid-q6gh5kud>
1級ヘッドセラピスト<br data-astro-cid-q6gh5kud>
有能技能賞取得
</p><p data-astro-cid-q6gh5kud>
日本ヘッドセラピスト認定協会<br data-astro-cid-q6gh5kud>
腸セラピスト
</p><p data-astro-cid-q6gh5kud>頭ほぐし専門店 reset</p></div><div class="clinic-image-outer" data-astro-cid-q6gh5kud><div class="clinic-image" data-astro-cid-q6gh5kud>${renderComponent($$result2, "Image", $$Image, { "src": clinic_image3, "alt": "", "data-astro-cid-q6gh5kud": true })}</div><div class="clinic-image" data-astro-cid-q6gh5kud>${renderComponent($$result2, "Image", $$Image, { "src": clinic_image4, "alt": "", "data-astro-cid-q6gh5kud": true })}</div></div></section></main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/greeting.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/greeting.astro";
const $$url = "/greeting";

const greeting = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Greeting,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { clinic_image4 as a, clinic_image3 as c, greeting as g };
