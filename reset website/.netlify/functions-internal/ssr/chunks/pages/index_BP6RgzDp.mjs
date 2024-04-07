import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as defineStyleVars, i as renderComponent, u as unescapeHTML } from '../astro_B6h7vYUJ.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image, a as $$Layout } from './404_ClvMmi_J.mjs';
/* empty css                          */
import { createClient } from 'microcms-js-sdk';
/* empty css                          */
import 'clsx';
import { c as clinic_image_3, a as clinic_image_4 } from './greeting_CgF6NoIF.mjs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
/* empty css                          */

const client$1 = createClient({
  serviceDomain: "a5fsngq4r7",
  apiKey: "xi5Cv8uHOUE6axPyQ2ZnoFBrwpwwBmjPID9e"
});
async function getAllPosts(limit = 100) {
  return await client$1.get({
    endpoint: "blogs",
    queries: {
      orders: "-publishedAt",
      limit
    }
  });
}

const $$Astro$a = createAstro("https://atama-reset.com");
const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BlogList;
  dayjs.extend(utc);
  dayjs.extend(timezone);
  let { id, slug, src, date, title, summary } = Astro2.props;
  date = new Date(date);
  date = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY.MM.DD");
  return renderTemplate`${maybeRenderHead()}<div class="container bloglist splide__slide" data-astro-cid-35dpazjw> <a${addAttribute(`/blog/${slug}-${id}`, "href")} class="flex" data-astro-cid-35dpazjw> <div class="image" data-astro-cid-35dpazjw> <img${addAttribute(src, "src")} alt="" width="252px" height="168px" loading="eager" data-astro-cid-35dpazjw> </div> <div class="wrapper" data-astro-cid-35dpazjw> <p class="date" data-astro-cid-35dpazjw>${date}</p> <h2 data-astro-cid-35dpazjw>${title}</h2> <p class="summary" data-astro-cid-35dpazjw>${summary}</p> </div> </a> </div> `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/BlogList.astro", void 0);

const $$Astro$9 = createAstro("https://atama-reset.com");
const $$MoreButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MoreButton;
  const {
    href,
    label,
    width,
    fontSize = "1.6rem",
    marginInline = "auto"
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ width, fontSize, marginInline }]);
  return renderTemplate`${maybeRenderHead()}<div class="moreButton" data-astro-cid-hobjux6t${addAttribute($$definedVars, "style")}> <a${addAttribute(href, "href")} class="more" data-astro-cid-hobjux6t${addAttribute($$definedVars, "style")}>${label}</a> <span data-astro-cid-hobjux6t${addAttribute($$definedVars, "style")}></span> </div> `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/MoreButton.astro", void 0);

const client = createClient({
  serviceDomain: "a5fsngq4r7",
  apiKey: "xi5Cv8uHOUE6axPyQ2ZnoFBrwpwwBmjPID9e"
});
async function getNews({
  limit
}) {
  const posts = await client.get({
    endpoint: "news",
    queries: {
      orders: "-publishedAt",
      limit
    }
  });
  return posts;
}

const hero = new Proxy({"src":"/_astro/hero.DN_hfNO8.webp","width":1920,"height":1350,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Documents/プログラミング学習/atama_reset/reset website/src/assets/hero.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro("https://atama-reset.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="container" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Image", $$Image, { "src": hero, "alt": "\u30B9\u30C3\u30AD\u30EA\u723D\u5FEB\uFF01", "class": "heroImg", "loading": "eager", "width": "1000", "height": "605", "data-astro-cid-bbe6dxrz": true })} <div class="horizon" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz> <span class="subTitle" data-astro-cid-bbe6dxrz>頭の整体で身体の不調を整える</span><br data-astro-cid-bbe6dxrz>
頭ほぐし専門店 reset</h1> </div> </div> </section> `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Hero.astro", void 0);

const $$Astro$7 = createAstro("https://atama-reset.com");
const $$NewsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NewsList;
  const posts = await getNews({ limit: 3 });
  const data = posts.contents.map((content) => ({
    title: content.title,
    tag: content.tag,
    summary: content.summary,
    pubDateDisplay: content.pubDateDisplay,
    publishedAt: content.publishedAt ? new Date(content.publishedAt).toLocaleDateString("ja-JP").split("/").join(".") : ""
  }));
  return renderTemplate`${maybeRenderHead()}<section class="news" data-astro-cid-zmm3bjuf> <h2 data-astro-cid-zmm3bjuf>お知らせ</h2> <div class="container" data-astro-cid-zmm3bjuf> ${data.map((content) => renderTemplate`<a href="/news" data-astro-cid-zmm3bjuf> <div class="news-header" data-astro-cid-zmm3bjuf> ${content.tag.map((tag) => {
    switch (tag) {
      case "\u91CD\u8981":
        return renderTemplate`<div class="tag important" data-astro-cid-zmm3bjuf>重要</div>`;
      case "NEW":
        return renderTemplate`<div class="tag new" data-astro-cid-zmm3bjuf>NEW</div>`;
      case "\u7DCA\u6025":
        return renderTemplate`<div class="tag emergency" data-astro-cid-zmm3bjuf>緊急</div>`;
    }
  })} <div class="wrapper" data-astro-cid-zmm3bjuf> <p data-astro-cid-zmm3bjuf>${content.title}</p> <div class="setHtml" data-astro-cid-zmm3bjuf>${unescapeHTML(content.summary)}</div> </div> </div> </a>`)} ${renderComponent($$result, "MoreButton", $$MoreButton, { "href": "/news", ",": true, "label": "\u3082\u3063\u3068\u898B\u308B", ",": true, "width": "114px", "marginInline": "auto 0", "data-astro-cid-zmm3bjuf": true })} </div> </section>  `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/NewsList.astro", void 0);

const $$Astro$6 = createAstro("https://atama-reset.com");
const $$Problems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Problems;
  const problems = [
    "\u982D\u75DB\u3001\u982D\u304C\u91CD\u3044",
    "\u9996\u3084\u80A9\u306E\u30B3\u30EA",
    "\u75B2\u308C\u76EE\u3001\u30C9\u30E9\u30A4\u30A2\u30A4",
    "\u7720\u308A\u304C\u6D45\u3044",
    "\u3059\u3050\u306B\u75B2\u308C\u308B",
    "\u75B2\u308C\u304C\u53D6\u308C\u306A\u3044",
    "\u3084\u308B\u6C17\u304C\u51FA\u306A\u3044",
    "\u3046\u3063\u304B\u308A\u30DF\u30B9\u304C\u591A\u3044",
    "\u96C6\u4E2D\u529B\u30FB\u8A18\u61B6\u529B\u304C\u4F4E\u4E0B\u3057\u305F",
    "\u30B9\u30C8\u30EC\u30B9\u304C\u591A\u3044",
    "\u30A4\u30E9\u30A4\u30E9\u3059\u308B",
    "\u624B\u8DB3\u304C\u51B7\u3048\u308B",
    "\u98DF\u6B32\u4E0D\u632F"
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-jcz3vx4h> <div class="grid-container" data-astro-cid-jcz3vx4h> <div class="problems" data-astro-cid-jcz3vx4h> <h2 data-astro-cid-jcz3vx4h>こんなお悩みございませんか？</h2> <div class="wrapper" data-astro-cid-jcz3vx4h> <ul data-astro-cid-jcz3vx4h> ${problems.map((problem) => renderTemplate`<li class="list" data-astro-cid-jcz3vx4h> <img src="/checked.svg" alt="チェック" width="14px" height="15px" data-astro-cid-jcz3vx4h> ${problem} </li>`)} </ul> <div class="problems-image" data-astro-cid-jcz3vx4h></div> </div> </div> <div class="cause" data-astro-cid-jcz3vx4h> <p class="text-1 fadeinText" data-astro-cid-jcz3vx4h>「眠い」「疲れた」「飽きた」</p> <p class="text-2 fadeinText" data-astro-cid-jcz3vx4h>それは<span class="bold large" data-astro-cid-jcz3vx4h>『 脳疲労 』</span>のサイン</p> <div class="cause-image yawning" data-astro-cid-jcz3vx4h></div> <p class="text-3 fadeinText" data-astro-cid-jcz3vx4h>脳の疲労が脳を「酸化」させ</p> <div class="icon fadeinText" data-astro-cid-jcz3vx4h></div> <p class="text-4 fadeinText" data-astro-cid-jcz3vx4h>脳が誤作動を起こし</p> <div class="icon fadeinText" data-astro-cid-jcz3vx4h></div> <p class="text-5 fadeinText" data-astro-cid-jcz3vx4h>疲れていない体が疲労感を感じる</p> <p class="text-6 fadeinText" data-astro-cid-jcz3vx4h>自律神経の乱れを引き起こし<br data-astro-cid-jcz3vx4h>体のあらゆる部分に不調が出ます</p> <div class="fadeinText" data-astro-cid-jcz3vx4h> ${renderComponent($$result, "MoreButton", $$MoreButton, { "href": "/brain_fatigue", ",": true, "label": "\u8133\u75B2\u52B4\u3068\u306F...", "width": "127px", "marginInline": "auto", "data-astro-cid-jcz3vx4h": true })}</div> </div> <p class="otherwise fadeinText" data-astro-cid-jcz3vx4h>もしくは･･･</p> <div class="cause" data-astro-cid-jcz3vx4h> <p class="text-1 fadeinText" data-astro-cid-jcz3vx4h>その不調<span class="bold" data-astro-cid-jcz3vx4h>『 首 』</span>が原因かも？</p> <div class="cause-image stiff_neck" data-astro-cid-jcz3vx4h></div> <p class="text-3 fadeinText bold" data-astro-cid-jcz3vx4h>首の後ろには<br data-astro-cid-jcz3vx4h>” 副交感神経センター ” があり</p> <p class="text-4 fadeinText" data-astro-cid-jcz3vx4h>首に不具合がおこると</p> <div class="icon fadeinText" data-astro-cid-jcz3vx4h></div> <p class="text-5 fadeinText" data-astro-cid-jcz3vx4h>副交感神経の働きが阻害され<br data-astro-cid-jcz3vx4h>自律神経が乱れ</p> <div class="icon fadeinText" data-astro-cid-jcz3vx4h></div> <p class="text-6 fadeinText" data-astro-cid-jcz3vx4h>全身にさまざまな不調を誘発</p> <p class="text-7 fadeinText" data-astro-cid-jcz3vx4h>「ストレスが原因」とされてきた症状も、<br data-astro-cid-jcz3vx4h>実は首のこりが原因であることが多いと判ってきました。</p> <p class="text-8 fadeinText highlight" data-astro-cid-jcz3vx4h>原因不明の体の不調のほとんどが<br data-astro-cid-jcz3vx4h>自律神経の乱れによるものです</p> </div> <div class="suggestion" data-astro-cid-jcz3vx4h> <div class="suggestion-image" data-astro-cid-jcz3vx4h></div> <div class="text-wrapper" data-astro-cid-jcz3vx4h> <p class="primary" data-astro-cid-jcz3vx4h>
疲れた頭や体を<br data-astro-cid-jcz3vx4h>究極の癒しで<br data-astro-cid-jcz3vx4h> ” reset ” しませんか
</p> </div> </div> </div> </section>  `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Problems.astro", void 0);

const refreshing = new Proxy({"src":"/_astro/refreshing.C0d0XtNX.webp","width":900,"height":551,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Documents/プログラミング学習/atama_reset/reset website/src/assets/refreshing.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://atama-reset.com");
const $$EffectsByCategory = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$EffectsByCategory;
  const {
    src,
    alt,
    listItem1,
    listItem2,
    listItem3,
    listItem4,
    listItem5,
    listItem6
  } = Astro2.props;
  const listItems = [
    listItem1,
    listItem2,
    listItem3,
    listItem4,
    listItem5,
    listItem6
  ];
  return renderTemplate`${maybeRenderHead()}<div class="wrapper" data-astro-cid-ujhalvo5> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")} width="104" height="125" data-astro-cid-ujhalvo5> <ul class="list-effects" data-astro-cid-ujhalvo5> ${listItems.map((list) => renderTemplate`<li data-astro-cid-ujhalvo5>${list}</li>`)} </ul> </div> <div class="bg-circle" data-astro-cid-ujhalvo5></div> `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/EffectsByCategory.astro", void 0);

const $$Astro$4 = createAstro("https://atama-reset.com");
const $$Efficacy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Efficacy;
  return renderTemplate`${maybeRenderHead()}<section id="effect" data-astro-cid-dd2id7xf> <div class="effect fadein" data-astro-cid-dd2id7xf> <h3 data-astro-cid-dd2id7xf>ヘッドマッサージによって期待される効果</h3> <div class="effect-flexbox" data-astro-cid-dd2id7xf> <div class="effect-image" data-astro-cid-dd2id7xf></div> <ul data-astro-cid-dd2id7xf> <li data-astro-cid-dd2id7xf>凝り固まった頭をほぐし、<span class="attention" data-astro-cid-dd2id7xf>血液やリンパの流れを改善</span></li> <li data-astro-cid-dd2id7xf><span class="attention" data-astro-cid-dd2id7xf>脳への血流を活性化</span></li> <li data-astro-cid-dd2id7xf>脳に溜まった<span class="attention" data-astro-cid-dd2id7xf>疲労物質やストレスホルモンを分解</span></li> <li data-astro-cid-dd2id7xf>首を柔らかくし、<span class="attention" data-astro-cid-dd2id7xf>脳脊髄液の流れを改善</span></li> <li data-astro-cid-dd2id7xf><span class="attention" data-astro-cid-dd2id7xf>免疫力を高め</span>、疲労回復＆疲れない体に</li> <li data-astro-cid-dd2id7xf><span class="attention" data-astro-cid-dd2id7xf>自律神経を整える</span></li> <li data-astro-cid-dd2id7xf>頭皮のむくみや<span class="attention" data-astro-cid-dd2id7xf>老廃物を排出</span>=デトックス効果</li> <li data-astro-cid-dd2id7xf>頭皮を健康にし、<span class="attention" data-astro-cid-dd2id7xf>毛乳頭細胞を活性化</span></li> <li data-astro-cid-dd2id7xf>
頭皮の健康状態を改善することで、お顔の<span class="attention" data-astro-cid-dd2id7xf>しわ・たるみ・クマなどを改善</span> </li> <li data-astro-cid-dd2id7xf>頭皮を柔らかくし<span class="attention" data-astro-cid-dd2id7xf>リフトアップ効果</span></li> <li data-astro-cid-dd2id7xf>リラックス効果により<span class="attention" data-astro-cid-dd2id7xf>セロトニン（幸せホルモン）が分泌</span>される</li> </ul> </div> </div> <div class="triangle-image" data-astro-cid-dd2id7xf> <img src="/triangle.svg" alt="効果をまとめると" width="94" height="40" data-astro-cid-dd2id7xf> </div> <div class="treatement-effect" data-astro-cid-dd2id7xf> <div class="physical fadein" data-astro-cid-dd2id7xf> ${renderComponent($$result, "EffectsByCategory", $$EffectsByCategory, { "src": "/physical-health.webp", "alt": "\u30AB\u30E9\u30C0\u3078\u306E\u52B9\u679C", "listItem1": "\u982D\u75DB\u306E\u6539\u5584", "listItem2": "\u80A9\u3053\u308A\u30FB\u9996\u3053\u308A\u306E\u6539\u5584", "listItem3": "\u773C\u7CBE\u75B2\u52B4\u306E\u6539\u5584", "listItem4": "\u4EE3\u8B1D\u30A2\u30C3\u30D7", "listItem5": "\u51B7\u3048\u6027\u306E\u6539\u5584", "data-astro-cid-dd2id7xf": true })} </div> <div class="mental fadein" data-astro-cid-dd2id7xf> ${renderComponent($$result, "EffectsByCategory", $$EffectsByCategory, { "src": "/mental-health.webp", "alt": "\u5185\u9762\u3078\u306E\u52B9\u679C", "listItem1": "\u81EA\u5F8B\u795E\u7D4C\u304C\u6574\u3046", "listItem2": "\u30DB\u30EB\u30E2\u30F3\u30D0\u30E9\u30F3\u30B9\u306E\u6539\u5584", "listItem3": "\u514D\u75AB\u529B\u30FB\u81EA\u7136\u6CBB\u7652\u529B\u306E\u6539\u5584", "listItem4": "\u4E0D\u7720\u75C7\u306E\u6539\u5584", "listItem5": "\u75B2\u52B4\u611F\u306E\u6539\u5584", "data-astro-cid-dd2id7xf": true })} </div> <div class="beauty fadein" data-astro-cid-dd2id7xf> ${renderComponent($$result, "EffectsByCategory", $$EffectsByCategory, { "src": "/beauty.webp", "alt": "\u7F8E\u5BB9\u3078\u306E\u52B9\u679C", "listItem1": "\u8001\u5EC3\u7269\u30C7\u30C8\u30C3\u30AF\u30B9", "listItem2": "\u30EA\u30D5\u30C8\u30A2\u30C3\u30D7", "listItem3": "\u30A2\u30F3\u30C1\u30A8\u30A4\u30B8\u30F3\u30B0", "listItem4": "\u80B2\u6BDB", "data-astro-cid-dd2id7xf": true })} </div> </div> <div class="selling-point fadein" data-astro-cid-dd2id7xf> <strong data-astro-cid-dd2id7xf><span class="marker" data-astro-cid-dd2id7xf>当店のヘッドマッサージは</span><br data-astro-cid-dd2id7xf> <span class="marker" data-astro-cid-dd2id7xf>頭の疲れだけではなく</span><br data-astro-cid-dd2id7xf> <span class="marker" data-astro-cid-dd2id7xf>全身の疲労回復を目的とします</span></strong> </div> <div class="refresh-image fadein" data-astro-cid-dd2id7xf> ${renderComponent($$result, "Image", $$Image, { "src": refreshing, "alt": "\u30B9\u30C3\u30AD\u30EA\uFF01", "data-astro-cid-dd2id7xf": true })}</div> <div class="add-info fadein" data-astro-cid-dd2id7xf> <p data-astro-cid-dd2id7xf><span class="bold" data-astro-cid-dd2id7xf>
当店でおこなうヘッドマッサージは</span><br data-astro-cid-dd2id7xf>セロトニン脳波測定の実験により<br data-astro-cid-dd2id7xf><span class="secondary" data-astro-cid-dd2id7xf>
脳内のセロトニンが活性化</span><br data-astro-cid-dd2id7xf>されることが証明されました</p> ${renderComponent($$result, "MoreButton", $$MoreButton, { "href": "/blog/scientific-basis-211004", ",": true, "label": "\u8A73\u3057\u304F\u306F\u3053\u3061\u3089", "width": "145px", "marginInline": "auto", "data-astro-cid-dd2id7xf": true })} </div> </section>  `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Efficacy.astro", void 0);

const $$Astro$3 = createAstro("https://atama-reset.com");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead()}<section class="features" id="features" data-astro-cid-vnivfuh2> <div class="reason" data-astro-cid-vnivfuh2> <h3 class="fadein" data-astro-cid-vnivfuh2>選ばれる理由</h3> <div class="wrapper" data-astro-cid-vnivfuh2> <div class="grid_item one fadein" data-astro-cid-vnivfuh2> <h4 data-astro-cid-vnivfuh2><span class="largeNumber" data-astro-cid-vnivfuh2>1</span>科学的に根拠のある施術</h4> <p data-astro-cid-vnivfuh2>
当店でおこなうヘッドマッサージは、セロトニン脳波測定の実験により<span class="attention bold" data-astro-cid-vnivfuh2>セロトニン神経が活性化</span>することが証明されました。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2><span style="font-size: 16px;  letter-spacing: 0.1em;" data-astro-cid-vnivfuh2>
※セロトニン…自律神経を整えてくれる神経物質
</span> </p> ${renderComponent($$result, "MoreButton", $$MoreButton, { "href": "/blog/scientific-basis-211004", ",": true, "label": "\u8A73\u3057\u304F\u306F\u3053\u3061\u3089", "width": "145px", "marginInline": "auto", "data-astro-cid-vnivfuh2": true })} </div> <div class="grid_item two fadein" data-astro-cid-vnivfuh2> <h4 data-astro-cid-vnivfuh2><span class="largeNumber" data-astro-cid-vnivfuh2>2</span>解剖学に基づいた施術</h4> <p data-astro-cid-vnivfuh2>
脳の血流の80%を占めるとされる内頚動脈。外側からのマッサージで刺激するのは不可能です。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2>
しかし、当店では解剖学の視点からの手法により、内頸動脈を刺激し、血流を改善します。
</p> </div> <div class="grid_item three fadein" data-astro-cid-vnivfuh2> <h4 data-astro-cid-vnivfuh2><span class="largeNumber" data-astro-cid-vnivfuh2>3</span>整体法を取り入れた施術</h4> <p data-astro-cid-vnivfuh2>
整体師監修のもと整体法を取り入れたオールハンドの施術です。
</p> </div> <div class="grid_item four  fadein" data-astro-cid-vnivfuh2> <h4 data-astro-cid-vnivfuh2><span class="largeNumber" data-astro-cid-vnivfuh2>4</span>ベッドを使っての施術</h4> <p data-astro-cid-vnivfuh2>
当店の頭ほぐしは「頭から全身を整える」マッサージです。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2> <span class="attention bold" data-astro-cid-vnivfuh2>全身を整えるためには、ベッドでの施術が必須</span>です。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2>
ベッドを使って<span class="bold" data-astro-cid-vnivfuh2>『頭蓋仙骨リズム』</span>に有効な施術をおこない、全身を緩め、血流を良くしていきます。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2>
また、脳脊髄液の循環を良くすることで、老廃物の排出を促し、お身体の健康状態を維持します。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2>
頭の施術による首への負担を防ぐためにも、ベッドを使用します。
</p> </div> <div class="grid_item img1 fadeinImg" data-astro-cid-vnivfuh2></div> <div class="grid_item five fadein" data-astro-cid-vnivfuh2> <h4 data-astro-cid-vnivfuh2><span class="largeNumber" data-astro-cid-vnivfuh2>5</span>タオルの上から揉みません</h4> <p data-astro-cid-vnivfuh2>
頭は非常に薄い筋肉で覆われているので、頭を強くも揉む（押す）ことはできません。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2>
頭に多く集中する大切なツボを適切な力で刺激するためにも、頭皮を直接しっかりと捉えてほぐします。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2>
また、タオルの上から髪の毛を摩擦すると髪の毛のキューティクルを傷つけてしまいます。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2>
健康な髪を守るためにも、地肌に直接アプローチします。<br data-astro-cid-vnivfuh2> <br data-astro-cid-vnivfuh2>
※頭以外の直接肌に触れる部分はタオルの上から施術します。
</p> </div> <div class="grid_item img2  fadeinImg" data-astro-cid-vnivfuh2></div> <div class="grid_item six fadein" data-astro-cid-vnivfuh2> <h4 data-astro-cid-vnivfuh2><span class="largeNumber" data-astro-cid-vnivfuh2>6</span>水やオイルを使いません</h4> <p data-astro-cid-vnivfuh2>
水やオイルを使わないドライマッサージです。お出掛けのご予定を気にせず、お気軽にお越しいただけます。
</p> </div> </div> </div> </section>  `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Features.astro", void 0);

const clinic_image_1 = new Proxy({"src":"/_astro/clinic_image_1.Ci1gcyCn.webp","width":400,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Documents/プログラミング学習/atama_reset/reset website/src/assets/clinic_image_1.webp";
							}
							
							return target[name];
						}
					});

const clinic_image_2 = new Proxy({"src":"/_astro/clinic_image_2.DA1F6oW_.webp","width":400,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Documents/プログラミング学習/atama_reset/reset website/src/assets/clinic_image_2.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://atama-reset.com");
const $$Access = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Access;
  return renderTemplate`${maybeRenderHead()}<section class="access" id="access" data-astro-cid-nhua6grl> <div class="access-wapper" data-astro-cid-nhua6grl> <h2 class="fadein" data-astro-cid-nhua6grl>アクセス</h2> <div class="access-flex-wrap" data-astro-cid-nhua6grl> <div class="map fadein" data-astro-cid-nhua6grl> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13053.469377808036!2d136.9505155152385!3d35.122505445605086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037b8125f7c96d%3A0x711594c47beb1825!2z6aCt44G744GQ44GX5bCC6ZaAIHJlc2V0!5e0!3m2!1sja!2sjp!4v1693278348042!5m2!1sja!2sjp" title="map" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-nhua6grl></iframe> </div> <div class="access-text fadein" data-astro-cid-nhua6grl> <address data-astro-cid-nhua6grl>
〒468-0066<br data-astro-cid-nhua6grl>
愛知県名古屋市天白区元八事1-107<br data-astro-cid-nhua6grl>
ナチュール元八事「リライフ治療院」内
</address> <p data-astro-cid-nhua6grl>駐車場：治療院前に3台分有り(<span class="bold" data-astro-cid-nhua6grl>13･15･16</span>)</p> <p data-astro-cid-nhua6grl>
※ <span class="bold" data-astro-cid-nhua6grl>「リライフ治療院」様 院内</span>の個室にて施術しております
</p> <p data-astro-cid-nhua6grl>
ご予約・お問い合わせ等につきましては、<br data-astro-cid-nhua6grl><span class="bold highlight" data-astro-cid-nhua6grl>リライフ治療院では承ることはできません。</span> </p> <p data-astro-cid-nhua6grl>必ず当店までご連絡ください。</p> </div> </div> </div> <div class="clinic" data-astro-cid-nhua6grl> <div class="clinic-flex-wrap" data-astro-cid-nhua6grl> <div class="clinic-text fadein" data-astro-cid-nhua6grl> <h3 class="clinic-name" data-astro-cid-nhua6grl>リライフ治療院</h3> <p data-astro-cid-nhua6grl>明るく温かい雰囲気の治療院です。</p> <p data-astro-cid-nhua6grl>玄関を開けるとホッとする、そんな空間です。</p> <p data-astro-cid-nhua6grl>
完全個室のプライベート空間で、<br data-astro-cid-nhua6grl>ゆっくり落ち着いた癒しの時間を<br data-astro-cid-nhua6grl>お過ごしくださいませ。
</p> </div> <div class="clinic-image" data-astro-cid-nhua6grl> <div class="splide" role="group" aria-label="治療院の画像" id="imageSlider" data-astro-cid-nhua6grl> <div class="splide__track" data-astro-cid-nhua6grl> <div class="splide__arrows" data-astro-cid-nhua6grl></div> <ul class="slider-group fadein splide__list" data-astro-cid-nhua6grl> <li class="splide__slide" data-astro-cid-nhua6grl> ${renderComponent($$result, "Image", $$Image, { "src": clinic_image_1, "alt": "\u5916\u89B3", "width": "400", "height": "300", "data-astro-cid-nhua6grl": true })} </li> <li class="splide__slide" data-astro-cid-nhua6grl> ${renderComponent($$result, "Image", $$Image, { "src": clinic_image_2, "alt": "\u5185\u89B31", "width": "400", "height": "300", "data-astro-cid-nhua6grl": true })} </li> <li class="splide__slide" data-astro-cid-nhua6grl> ${renderComponent($$result, "Image", $$Image, { "src": clinic_image_3, "alt": "\u5185\u89B32", "width": "400", "height": "300", "data-astro-cid-nhua6grl": true })} </li> <li class="splide__slide" data-astro-cid-nhua6grl> ${renderComponent($$result, "Image", $$Image, { "src": clinic_image_4, "alt": "\u500B\u5BA4", "width": "400", "height": "300", "data-astro-cid-nhua6grl": true })} </li> </ul> </div> <ul class="splide__pagination" data-astro-cid-nhua6grl></ul> </div> </div> </div> </div> </section>   `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Access.astro", void 0);

const $$Astro$1 = createAstro("https://atama-reset.com");
const $$BlogSummary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogSummary;
  const posts = await getAllPosts(4);
  return renderTemplate`${maybeRenderHead()}<section class="blogs" data-astro-cid-tienplep> <h2 data-astro-cid-tienplep>最近のブログ</h2> <div class="splide" role="group" aria-label="最近のブログ" id="blogSlider" data-astro-cid-tienplep> <div class="sliderWrap splide__track" data-astro-cid-tienplep> <div class="container splide__list" data-astro-cid-tienplep> ${posts.contents.map((post) => renderTemplate`${renderComponent($$result, "BlogList", $$BlogList, { "id": post.id, "slug": post.slug, "src": post.eyecatch.url, "date": post.publishedAt, "title": post.title, "summary": post.summary, "data-astro-cid-tienplep": true })}`)} </div> </div> </div> ${renderComponent($$result, "MoreButton", $$MoreButton, { "href": "/blogs/1", ",": true, "label": "\u30D6\u30ED\u30B0\u4E00\u89A7\u3078", "width": "130px", "fontSize": "1.6rem", "marginInline": "auto", "data-astro-cid-tienplep": true })} </section>   `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/BlogSummary.astro", void 0);

const $$Astro = createAstro("https://atama-reset.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "HOME", "description": "\u540D\u53E4\u5C4B\u5E02 \u516B\u4E8B(\u662D\u548C\u9AD8\u6821\u3059\u3050\u6A2A)\u306E\u30D8\u30C3\u30C9\u30DE\u30C3\u30B5\u30FC\u30B8\u3002\u982D\u307B\u3050\u3057\u5C02\u9580\u5E97 reset \u3067\u3059\u3002\u6574\u4F53\u6CD5\u3092\u53D6\u308A\u5165\u308C\u305F\u30D8\u30C3\u30C9\u30DE\u30C3\u30B5\u30FC\u30B8\u3067\u3001\u982D\u3068\u4F53\u306E\u75B2\u308C\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u305B\u3093\u304B\u3002\u81EA\u5F8B\u795E\u7D4C\u3092\u6574\u3048\u3066\u3001\u300C\u982D\u304B\u3089\u4F53\u3092\u5143\u6C17\u306B\u300D\u3092\u76EE\u6307\u3057\u307E\u3059\u3002\u8178\u30BB\u30E9\u30D4\u30FC\u3082\u304A\u3053\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\u5168\u30B3\u30FC\u30B9\u8001\u82E5\u7537\u5973OK!\u5929\u767D\u533A \u516B\u4E8B\u3067\u306E\u55B6\u696D\u3092\u8EF8\u306B\u3001\u51FA\u5F35\u30B5\u30FC\u30D3\u30B9\u3082\u627F\u308A\u307E\u3059\u3002", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "NewsList", $$NewsList, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Problems", $$Problems, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Efficacy", $$Efficacy, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Features", $$Features, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Access", $$Access, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "BlogSummary", $$BlogSummary, { "data-astro-cid-j7pv25f6": true })} </main> ` })}  `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/index.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MoreButton as $, getAllPosts as a, $$BlogList as b, getNews as g, index as i };
