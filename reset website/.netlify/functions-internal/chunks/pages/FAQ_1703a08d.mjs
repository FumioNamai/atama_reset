import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, d as renderComponent } from '../astro/server_5b850809.mjs';
import 'clsx';
import { $ as $$Image, a as $$Layout } from './404_e0b52eba.mjs';
/* empty css                         */
const QandA = new Proxy({"src":"/_astro/Q_A.90bab789.webp","width":640,"height":327,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("http://localhost:4321/");
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Accordion;
  return renderTemplate`${maybeRenderHead()}<div class="accordion" data-astro-cid-oqjbs5yv><div class="question" data-astro-cid-oqjbs5yv><div class="wrapper" data-astro-cid-oqjbs5yv><h3 data-astro-cid-oqjbs5yv>Q</h3><p data-astro-cid-oqjbs5yv>${renderSlot($$result, $$slots["question"])}</p></div><span data-astro-cid-oqjbs5yv></span></div><div class="answer" data-astro-cid-oqjbs5yv><h3 data-astro-cid-oqjbs5yv>A</h3>${renderSlot($$result, $$slots["answer"])}</div></div>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Accordion.astro", void 0);

const $$Astro = createAstro("http://localhost:4321/");
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F", "description": "", "data-astro-cid-ynzegj2z": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-ynzegj2z><h3 data-astro-cid-ynzegj2z>よくあるご質問</h3><div class="image" data-astro-cid-ynzegj2z>${renderComponent($$result2, "Image", $$Image, { "src": QandA, "alt": "Q&A", "loading": "eager", "width": "640", "height": "327", "data-astro-cid-ynzegj2z": true })}</div>${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z> 老若男女、お子様も施術可能</span>です。<br data-astro-cid-ynzegj2z>お客様の症状に合わせた内容をご提案、ご提供させていただきます。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>男性でも施術を受けられますか？</span>` })}${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>前日までの完全ご予約制</span>となっております。<br data-astro-cid-ynzegj2z>
当日のご予約も空き状況によりご案内可能です。 ご来店前にお電話にてご確認ください。<br data-astro-cid-ynzegj2z>
また、週末のご予約は前以て集中することもございます。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>お早めのご予約をお勧め致します。</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>当日予約はできますか？</span>` })}${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
大変申し訳ございませんが、施術者が一人ですので、<span class="bold highlight" data-astro-cid-ynzegj2z>お一人様ずつ</span>の施術となります。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>
施術日が別であっても、<span class="bold highlight" data-astro-cid-ynzegj2z>お連れ様でのご予約でお得な割引</span>がございますので是非お申し付けください。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>２人同時に施術できますか？</span>` })}${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
ワックスがついた状態でも問題ございませんが、施術後は少しヘアスタイルも乱れてしまいます。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>
ハードワックスやハードスプレーは施術に影響します</span>ので、ご遠慮いただきますようご協力お願いいたします。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>ワックスをつけたままでもいいですか？</span>` })}${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
誠に申し訳ございませんが<span class="bold highlight" data-astro-cid-ynzegj2z>現金のみのお取り扱い</span>となります。<br data-astro-cid-ynzegj2z>
ご不便お掛けしますが宜しくお願いいたします。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>キャッシュレス対応してますか？</span>` })}${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
治療院前に<span class="bold highlight" data-astro-cid-ynzegj2z>３台分</span>ございます。<br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>１３番、１５番、１６番</span>をご利用ください。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>駐車場はありますか？</span>` })}${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
各種ご用意しております。<br data-astro-cid-ynzegj2z>
料金の明記はございませんので、大切な方への贈り物にいかがですか。<br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>お支払いは現金のみ</span>となります。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>ギフト券はありますか？</span>` })}${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
未成年の方も施術を受けていただけます。<br data-astro-cid-ynzegj2z>
是非お気軽にご相談ください。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>
施術の内容や注意事項をご説明しますので、保護者の方の送迎をお願いいたします。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>
施術を受けられるご本人・保護者の方・セラピストでカウンセリングを実施し、ご理解いただいた上で施術をおこないます。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>保護者の方に同意書のサインを頂戴します。</span><br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>また、未成年の方のお支払いは保護者の方にお願いします。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>学生割引がございますので、学生証をお忘れなく♪</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>未成年も施術を受けられますか？</span>` })}${renderComponent($$result2, "Accordion", $$Accordion, { "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
詳しくは<a href="/blog/what-is-different-from-190612" data-astro-cid-ynzegj2z>こちら</a></p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>「ヘッドスパと何が違うの？」</span>` })}<!-- <AccordionR client:load
    title="「ヘッドスパと何が違うの？」"
content="aaaaaaaaaaaaa"
    /> --></main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/FAQ.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/FAQ.astro";
const $$url = "/FAQ";

export { $$FAQ as default, $$file as file, $$url as url };
