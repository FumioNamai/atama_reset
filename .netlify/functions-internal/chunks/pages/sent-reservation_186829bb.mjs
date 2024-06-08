import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro/server_5b850809.mjs';
import 'clsx';
import { $ as $$ContactAddress } from './contact_7d9dbe36.mjs';
import { a as $$Layout } from './404_994bcc84.mjs';
/* empty css                                      */
const $$Astro = createAstro("https://atama-reset.com");
const $$SentReservation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SentReservation;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u3054\u4E88\u7D04\u5185\u5BB9\u9001\u4FE1\u5B8C\u4E86", "description": "", "data-astro-cid-7guv6i4g": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-7guv6i4g><section data-astro-cid-7guv6i4g><h2 data-astro-cid-7guv6i4g>ご予約いただき<br data-astro-cid-7guv6i4g>ありがとうございます！</h2><article data-astro-cid-7guv6i4g><p data-astro-cid-7guv6i4g>予約メールが送信されました。<br data-astro-cid-7guv6i4g>
確認のため、お客様宛に自動返信メールをお送りしております。</p><p class="bold" data-astro-cid-7guv6i4g>ご予約内容をこちらで確認後、改めて予約確定のメールを送信いたします。</p><p data-astro-cid-7guv6i4g>もし、2営業日を過ぎても連絡がない場合は、正しく受信できなかった可能性がありますので、恐れ入りますが下記のメールアドレス、もしくはお電話にて再度のご連絡をお願いいたします。</p></article>${renderComponent($$result2, "ContactAddress", $$ContactAddress, { "data-astro-cid-7guv6i4g": true })}<a href="/" data-astro-cid-7guv6i4g>HOMEに戻る</a></section></main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/sent-reservation.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/sent-reservation.astro";
const $$url = "/sent-reservation";

export { $$SentReservation as default, $$file as file, $$url as url };
