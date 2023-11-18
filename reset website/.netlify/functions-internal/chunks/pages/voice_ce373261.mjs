import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, d as renderComponent } from '../astro/server_5b850809.mjs';
import 'clsx';
import { $ as $$Image, a as $$Layout } from './404_1dd0a085.mjs';
/* empty css                           */
const thanks2 = new Proxy({"src":"/_astro/thanks2.452807bd.webp","width":453,"height":340,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("http://localhost:4321/");
const $$VoiceCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VoiceCard;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="voice_card" data-astro-cid-fcljo7jo><h3 data-astro-cid-fcljo7jo>${renderSlot($$result, $$slots["category"])}</h3><div data-astro-cid-fcljo7jo>${renderSlot($$result, $$slots["text"])}</div></div>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/VoiceCard.astro", void 0);

const $$Astro = createAstro("http://localhost:4321/");
const $$Voice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Voice;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u304A\u5BA2\u69D8\u306E\u58F0", "description": "", "data-astro-cid-5upvupmi": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-5upvupmi><section class="voice" data-astro-cid-5upvupmi><div class="top" data-astro-cid-5upvupmi><h2 data-astro-cid-5upvupmi>お客様の声</h2><p data-astro-cid-5upvupmi>お客様より頂戴しましたお声より、<br data-astro-cid-5upvupmi>
いくつかご紹介させていただきます。<br data-astro-cid-5upvupmi><span class="small" data-astro-cid-5upvupmi>（メールより抜粋あり）</span></p></div><div class="image" data-astro-cid-5upvupmi>${renderComponent($$result2, "Image", $$Image, { "src": thanks2, "alt": "", "loading": "eager", "data-astro-cid-5upvupmi": true })}</div><div class="cards" data-astro-cid-5upvupmi>${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 20代 男性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>PC作業の仕事をしていて、頭も首も目も疲れている。<br data-astro-cid-5upvupmi>
顔を施術してもらったのは初めてで、気持ち良かった。<br data-astro-cid-5upvupmi>
頭も顔も軽くなった。<br data-astro-cid-5upvupmi>
セルフケアなどいっぱい相談に乗ってもらった。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 30代 男性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>仕事のストレスからか寝つきが悪く、<br data-astro-cid-5upvupmi>
疲れが抜けなかったり、肩こりや首が痛い日が続いていた。<br data-astro-cid-5upvupmi>
頭皮のマッサージが始まると、<br data-astro-cid-5upvupmi>
脳に溜まっていた悪いものがサーッと消えていくのを感じ、<br data-astro-cid-5upvupmi>
程なくして眠ってしまった。<br data-astro-cid-5upvupmi>
その晩は久しぶりにグッスリ眠れた。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 30代 女性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>頭ほぐし60分、あっという間でした。<br data-astro-cid-5upvupmi>
心地良くて、眠りの世界に導かれるといった感じです。<br data-astro-cid-5upvupmi>
“体の芯からリラックスできた”という感覚になりました。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 40代 女性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>偏頭痛持ちで、肩こりもひどいので来店しました。<br data-astro-cid-5upvupmi>
施術した次の日は、軽い頭痛(日常生活にはまったく支障のない程度)があり、
<br data-astro-cid-5upvupmi>「これが好転反応か！」って感じでしたが、<br data-astro-cid-5upvupmi>
翌日には頭がスカッと晴れて、軽くなり、スッキリしました。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 40代 男性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>普段は仕事から帰ると疲れて何もやる気になれない。<br data-astro-cid-5upvupmi>
体中に溜まった疲れを落としにresetさんに来る。<br data-astro-cid-5upvupmi>
施術が始まるとまさしく「寝落ち」してしまい、体の中の疲労もストレスも悪いもの全部落としてスッキリする。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 50代 女性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>白髪が目立つので毎月美容院で白髪染めをしますが、<br data-astro-cid-5upvupmi>
こちらに来るようになってから白髪が前ほど気にならなくなり、<br data-astro-cid-5upvupmi>
もう２ヶ月美容院に行っていません。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 50代 男性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>更年期障害からか、めまい・動悸に襲われることが増え、<br data-astro-cid-5upvupmi>
それによるストレスや不安も付きまとう毎日だった。<br data-astro-cid-5upvupmi>
すがるような気持ちでこちらに駆け込んだ。<br data-astro-cid-5upvupmi>
最初の１ヶ月を詰めて来店し、<br data-astro-cid-5upvupmi>
症状が落ち着いた今は定期的なメンテナンスとして伺っている。<br data-astro-cid-5upvupmi>
ここが無ければどうなっていただろうかと…<br data-astro-cid-5upvupmi>
reset に救っていただいた。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 60代 女性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>「神の手」の優しいタッチの施術で深い眠りにつくので、<br data-astro-cid-5upvupmi>
自分のいびきで目が覚めることもあります(笑)<br data-astro-cid-5upvupmi>
いつも予約日を指折り数えて待っているので、<br data-astro-cid-5upvupmi>
楽しみにしてた施術はあっという間に感じます。<br data-astro-cid-5upvupmi>
今日からまた次を楽しみに過ごします。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 60代 男性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>施術した夜ぐっすり眠れた。<br data-astro-cid-5upvupmi>
翌朝はスッキリ目が覚めた。<br data-astro-cid-5upvupmi>
施術翌日に首と肩に軽く好転反応が出た。<br data-astro-cid-5upvupmi>
腰痛が嘘のように消えた。<br data-astro-cid-5upvupmi>
体が軽くなった。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 70代 女性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>こちらに来るようになってから疲れ知らずになった。<br data-astro-cid-5upvupmi>
食欲が無い日が無くなった。<br data-astro-cid-5upvupmi>
よく食べ、よく寝て、毎日元気に過ごせている。</p></div>` })}${renderComponent($$result2, "VoiceCard", $$VoiceCard, { "data-astro-cid-5upvupmi": true }, { "category": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi>
～ 80代 女性 ～
</div>`, "text": ($$result3) => renderTemplate`<div data-astro-cid-5upvupmi><p data-astro-cid-5upvupmi>気持ち良くて幸せ。<br data-astro-cid-5upvupmi>
すぐまた来たい。</p></div>` })}</div></section></main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/voice.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/voice.astro";
const $$url = "/voice";

export { $$Voice as default, $$file as file, $$url as url };
