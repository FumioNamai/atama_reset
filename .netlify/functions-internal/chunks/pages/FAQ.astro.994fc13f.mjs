import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderHead, f as renderSlot } from '../astro.dbf8e0aa.mjs';
import 'html-escaper';
/* empty css                         *//* empty css                         */
const $$Astro$9 = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<button class="hamburger astro-3WEO6HLS" id="js-hamburger">
  <span class="astro-3WEO6HLS"></span>
  <span class="astro-3WEO6HLS"></span>
  <span class="astro-3WEO6HLS"></span>
  <p class="astro-3WEO6HLS">MENU</p>
</button>

<!-- <GlobalNav /> -->`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Hamburger.astro", void 0);

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="astro-3EF6KSR2">
  <p class="astro-3EF6KSR2">名古屋市天白区のヘッドマッサージサロン</p>
  <div class="headerNav astro-3EF6KSR2">
    <div class="left astro-3EF6KSR2">
      ${renderComponent($$result, "Hamburger", $$Hamburger, { "class": "astro-3EF6KSR2" })}
      <div class="logo astro-3EF6KSR2">
        <a href="/" class="astro-3EF6KSR2">
          <img src="logo2.png" alt="ロゴ" class="astro-3EF6KSR2">
        </a>
      </div>
    </div>
    <div class="right astro-3EF6KSR2">
      <a href="" class="astro-3EF6KSR2">ご予約</a>
    </div>
  </div>
</header>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="astro-SZ7XMLTE">
  <div class="container astro-SZ7XMLTE">
    <p class="name astro-SZ7XMLTE">頭ほぐし専門店 reset</p>
    <div class="content astro-SZ7XMLTE">
      <a href="/" class="astro-SZ7XMLTE">
        <img src="logo.png" alt="ロゴ" class="astro-SZ7XMLTE">
      </a>
      <div class="detail astro-SZ7XMLTE">
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">営業時間｜12時～21時［不定休］</li>
          <li class="astro-SZ7XMLTE">TEL｜080-9271-7855</li>
          <li class="astro-SZ7XMLTE">E-mail｜atama.reset@gmail.com</li>
          <li class="astro-SZ7XMLTE">〒468-0066</li>
          <li class="astro-SZ7XMLTE">愛知県名古屋市天白区元八事1-107</li>
          <li class="astro-SZ7XMLTE">「リライフ治療院」内</li>
        </ul>
      </div>
    </div>
      <div class="copyright astro-SZ7XMLTE">
        <p class="astro-SZ7XMLTE">©2023 頭ほぐし専門店 reset　All rights reserved.</p>
      </div>
  </div>
</footer>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hamburger2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hamburger2;
  return renderTemplate`${maybeRenderHead()}<button id="js-hamburger2" class="astro-LNTTFGZE">
  <img src="/hamburger.svg" alt="" class="astro-LNTTFGZE">
  <p class="astro-LNTTFGZE">その他</p>
</button>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Hamburger2.astro", void 0);

const $$Astro$5 = createAstro();
const $$BottomNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BottomNav;
  return renderTemplate`${maybeRenderHead()}<nav class="astro-LTXPR5XC">
  <a href="/" class="astro-LTXPR5XC">
    <img src="/blog.svg" alt="" class="astro-LTXPR5XC">
    <p class="astro-LTXPR5XC">ブログ</p>
  </a>

  <a href="/" class="astro-LTXPR5XC">
    <img src="/menu.svg" alt="" class="astro-LTXPR5XC">
    <p class="astro-LTXPR5XC">メニュー</p>
  </a>

  <a href="/" class="astro-LTXPR5XC">
    <img src="/mail.svg" alt="" class="astro-LTXPR5XC">
    <p class="astro-LTXPR5XC">お問い合わせ</p>
  </a>
    ${renderComponent($$result, "Hamburger2", $$Hamburger2, { "class": "astro-LTXPR5XC" })}
</nav>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/BottomNav.astro", void 0);

const $$Astro$4 = createAstro();
const $$HamburgerClose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HamburgerClose;
  return renderTemplate`${maybeRenderHead()}<button id="js-hamburgerClose" class="astro-DWTNCOWI">
  <img src="/close.svg" alt="" class="astro-DWTNCOWI">
  <!-- <p>その他</p> -->
</button>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/HamburgerClose.astro", void 0);

const $$Astro$3 = createAstro();
const $$GlobalNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GlobalNav;
  const nav = [
    {
      href: "/",
      label: "\u3054\u4E88\u7D04\u30FB\u304A\u554F\u3044\u5408\u308F\u305B"
    },
    {
      href: "/",
      label: "\u30DB\u30FC\u30E0"
    },
    {
      href: "/",
      label: "\u3054\u3042\u3044\u3055\u3064"
    },
    {
      href: "/",
      label: "\u304A\u77E5\u3089\u305B"
    },
    {
      href: "/",
      label: "\u30D6\u30ED\u30B0"
    },
    {
      href: "/",
      label: "\u65BD\u8853\u30E1\u30CB\u30E5\u30FC & \u6599\u91D1"
    },
    {
      href: "/",
      label: "\u521D\u3081\u3066\u306E\u304A\u5BA2\u69D8\u3078"
    },
    {
      href: "/FAQ",
      label: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"
    },
    {
      href: "/",
      label: "\u304A\u5BA2\u69D8\u306E\u58F0"
    },
    {
      href: "/",
      label: "\u671F\u5F85\u3055\u308C\u308B\u52B9\u679C"
    },
    {
      href: "/",
      label: "\u8133\u75B2\u52B4\u3068\u306F\uFF1F"
    },
    {
      href: "/",
      label: "\u8133\u810A\u9AC4\u6DB2\u3068\u7761\u7720"
    },
    {
      href: "/",
      label: "\u8178\u30BB\u30E9\u30D4\u30FC"
    },
    {
      href: "/",
      label: "\u3075\u304F\u3089\u306F\u304E\u307B\u3050\u3057"
    },
    {
      href: "/indefinite_complaint",
      label: "\u4E0D\u5B9A\u6101\u8A34\u3068\u306F"
    },
    {
      href: "/",
      label: "\u65BD\u8853\u306E\u6D41\u308C"
    },
    {
      href: "/",
      label: "\u4F01\u696D\u30FB\u56E3\u4F53\u69D8"
    },
    {
      href: "/",
      label: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="globalNav astro-3CURSR6Z" id="js-globalNav">
  <div class="container astro-3CURSR6Z">
    <nav class="astro-3CURSR6Z">
    ${renderComponent($$result, "HamburgerClose", $$HamburgerClose, { "class": "astro-3CURSR6Z" })}
    <a href="/" class="globalNav-logo astro-3CURSR6Z"><img src="/logo.png" alt="ロゴ" class="astro-3CURSR6Z"></a>
    </nav>
    <div class="wrapper astro-3CURSR6Z" id="js-globalNav-menu">
      <div class="menu astro-3CURSR6Z">
        <ul class="astro-3CURSR6Z">
          ${nav.map((nav_item) => renderTemplate`<li class="astro-3CURSR6Z">
                <a${addAttribute(nav_item.href, "href")} class="astro-3CURSR6Z">${nav_item.label}</a>
              </li>`)}
        </ul>
      </div>
    </div>
  </div>

  
</div>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/GlobalNav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>

		<title>頭ほぐし専門店reset | ${title}</title>
	${renderHead()}</head>
	<body id="js-body">
		${renderComponent($$result, "Header", $$Header, {})}
		${renderComponent($$result, "GlobalNav", $$GlobalNav, {})}
		${renderSlot($$result, $$slots["default"])}
		${renderComponent($$result, "Footer", $$Footer, {})}
		${renderComponent($$result, "BottomNav", $$BottomNav, {})}
	</body></html>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Accordion;
  return renderTemplate`${maybeRenderHead()}<details class="accordion astro-OQJBS5YV">

  <summary class="astro-OQJBS5YV">男性でも施術を受けられますか？</summary>

  <p class="astro-OQJBS5YV">
    <span class="astro-OQJBS5YV">老若男女、お子様も施術可能です。</span><br class="astro-OQJBS5YV">
    お客様の症状に合わせた内容をご提案、ご提供させていただきます。
  </p>
</details>
<details class="accordion astro-OQJBS5YV">
  <summary class="astro-OQJBS5YV">当日予約はできますか？</summary>
  <p class="astro-OQJBS5YV">
    <span class="astro-OQJBS5YV">前日までの完全ご予約制となっております。</span><br class="astro-OQJBS5YV">
    当日のご予約も空き状況によりご案内可能です。<br class="astro-OQJBS5YV">
    ご来店前にお電話にてご確認ください。<br class="astro-OQJBS5YV">
    また、週末のご予約は前もって集中することもございます。<br class="astro-OQJBS5YV">
    お早めのご予約をお勧めいたします。
  </p>
</details>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Accordion.astro", void 0);

const $$Astro = createAstro();
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F", "class": "astro-YNZEGJ2Z" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="astro-YNZEGJ2Z">
    <h3 class="astro-YNZEGJ2Z">よくあるご質問</h3>
    <div class="image astro-YNZEGJ2Z">
      <img src="/Q&A.jpg" alt="" class="astro-YNZEGJ2Z">
    </div>
    ${renderComponent($$result2, "Accordion", $$Accordion, { "class": "astro-YNZEGJ2Z" })}
  </main>
` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/FAQ.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/FAQ.astro";
const $$url = "/FAQ";

const FAQ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FAQ,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, FAQ as F };
