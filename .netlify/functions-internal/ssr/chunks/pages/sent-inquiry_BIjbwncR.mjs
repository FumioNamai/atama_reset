import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_B6h7vYUJ.mjs';
import 'kleur/colors';
import { $ as $$ContactAddress } from './contact_Cza1vGXr.mjs';
import { a as $$Layout } from './404_ClvMmi_J.mjs';
/* empty css                                 */

const $$Astro = createAstro("https://atama-reset.com");
const $$SentInquiry = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SentInquiry;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u304A\u554F\u3044\u5408\u308F\u305B\u9001\u4FE1\u5B8C\u4E86", "description": "", "data-astro-cid-77mqkpia": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-77mqkpia> <section data-astro-cid-77mqkpia> <h2 data-astro-cid-77mqkpia>お問い合わせいただき<br data-astro-cid-77mqkpia>ありがとうございます！</h2> <article data-astro-cid-77mqkpia> <p data-astro-cid-77mqkpia>お問い合わせメールが送信されました。<br data-astro-cid-77mqkpia>
確認のため、お客様宛に自動返信メールをお送りしております。</p> <p class="bold" data-astro-cid-77mqkpia>お問い合わせの内容ををこちらで確認後、メールでご返信いたします。</p> <p data-astro-cid-77mqkpia>もし、2営業日を過ぎても連絡がない場合は、正しく受信できなかった可能性がありますので、恐れ入りますが下記のメールアドレス、もしくはお電話にて再度のご連絡をお願いいたします。</p> </article> ${renderComponent($$result2, "ContactAddress", $$ContactAddress, { "data-astro-cid-77mqkpia": true })} <a href="/" data-astro-cid-77mqkpia>HOMEに戻る</a> </section> </main> ` })} `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/sent-inquiry.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/sent-inquiry.astro";
const $$url = "/sent-inquiry";

export { $$SentInquiry as default, $$file as file, $$url as url };
