import '@astrojs/internal-helpers/path';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, d as renderComponent, e as renderHead, f as renderSlot } from '../astro/server_5b850809.mjs';
import 'clsx';
/* empty css                         */import { A as AstroError, f as ImageMissingAlt, i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_74df32db.mjs';
/* empty css                         */
const $$Astro$e = createAstro("https://atama-reset.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/node_modules/astro/components/Image.astro", void 0);

const $$Astro$d = createAstro("https://atama-reset.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[{"protocol":"https"}]};
					new URL("file:///D:/Documents/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%AD%A6%E7%BF%92/atama_reset/reset%20website/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$c = createAstro("https://atama-reset.com");
const $$HamburgerLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$HamburgerLeft;
  return renderTemplate`${maybeRenderHead()}<button class="hamburger" id="js-hamburgerLeft" title="hamburger-menu" data-astro-cid-fsjl7z5z><span data-astro-cid-fsjl7z5z></span><span data-astro-cid-fsjl7z5z></span><span data-astro-cid-fsjl7z5z></span><p class="menu" data-astro-cid-fsjl7z5z>MENU</p></button>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/HamburgerLeft.astro", void 0);

const $$Astro$b = createAstro("https://atama-reset.com");
const $$HamburgerRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$HamburgerRight;
  return renderTemplate`${maybeRenderHead()}<button class="hamburger" id="js-hamburgerRight" title="hamburger-menu" data-astro-cid-q6frjz5f><span data-astro-cid-q6frjz5f></span><span data-astro-cid-q6frjz5f></span><span data-astro-cid-q6frjz5f></span><p class="menu" data-astro-cid-q6frjz5f>MENU</p></button>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/HamburgerRight.astro", void 0);

const logo = new Proxy({"src":"/_astro/reset_logo.e434917e.svg","width":90,"height":90,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const logo2 = new Proxy({"src":"/_astro/reset_logo2.286fcb4a.svg","width":122,"height":73,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$a = createAstro("https://atama-reset.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2><div class="spacer" data-astro-cid-3ef6ksr2></div><div class="wrapper" data-astro-cid-3ef6ksr2><p class="location" data-astro-cid-3ef6ksr2>
名古屋市 昭和高校横 ヘッドマッサージサロン<span data-astro-cid-3ef6ksr2>
頭ほぐし専門店 reset</span></p><div class="hamburger" data-astro-cid-3ef6ksr2>${renderComponent($$result, "HamburgerLeft", $$HamburgerLeft, { "data-astro-cid-3ef6ksr2": true })}${renderComponent($$result, "HamburgerRight", $$HamburgerRight, { "data-astro-cid-3ef6ksr2": true })}</div><div class="logo2" data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Image", $$Image, { "src": logo2, "alt": "\u30ED\u30B4", "width": "81", "height": "48", "loading": "eager", "data-astro-cid-3ef6ksr2": true })}</a></div><div class="logo" data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "\u30ED\u30B4", "width": "90", "height": "90", "loading": "eager", "data-astro-cid-3ef6ksr2": true })}</a></div><div class="dot" data-astro-cid-3ef6ksr2></div><a href="/contact" class="contact" data-astro-cid-3ef6ksr2>ご予約<span data-astro-cid-3ef6ksr2>・お問い合わせ</span></a></div></header>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Header.astro", void 0);

const $$Astro$9 = createAstro("https://atama-reset.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte><div class="container" data-astro-cid-sz7xmlte><p class="name" data-astro-cid-sz7xmlte>頭ほぐし専門店 reset</p><div class="content" data-astro-cid-sz7xmlte><a href="/" class="logo" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "\u30ED\u30B4", "width": 120, "height": 120, "data-astro-cid-sz7xmlte": true })}</a><div class="detail" data-astro-cid-sz7xmlte><p data-astro-cid-sz7xmlte>営業時間｜12時～21時［不定休］</p><p data-astro-cid-sz7xmlte>TEL｜080-9271-7855</p><p data-astro-cid-sz7xmlte>E-mail｜atama.reset@gmail.com</p><p data-astro-cid-sz7xmlte>〒468-0066</p><address data-astro-cid-sz7xmlte>愛知県名古屋市天白区元八事1-107</address><p data-astro-cid-sz7xmlte>「リライフ治療院」内</p></div></div><div class="copyright" data-astro-cid-sz7xmlte><p data-astro-cid-sz7xmlte>©2023 頭ほぐし専門店 reset　All rights reserved.</p></div></div></footer>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro("https://atama-reset.com");
const $$BackToTheTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BackToTheTop;
  return renderTemplate(_a || (_a = __template(["", '<button data-astro-cid-b7u46wen><a href="#" data-astro-cid-b7u46wen><img src="/arrowhead-up-fill.svg" alt="" width="32px" height="32px" data-astro-cid-b7u46wen><p data-astro-cid-b7u46wen>\u30C8\u30C3\u30D7\u3078\u623B\u308B</p></a></button><!-- <script>\n  const body = document.querySelector("#js-body")\n  const hamburger = document.querySelector("#js-hamburger");\n  const hamburger2 = document.querySelector("#js-hamburger2");\n  const hamburgerClose = document.querySelector("#js-hamburgerClose");\n  const globalNav = document.querySelector("#js-globalNav");\n  const menu = document.querySelector("#js-globalNav-menu");\n\n  hamburger2.addEventListener("click", function () {\n    body.classList.toggle("inactive");\n    hamburger.classList.toggle("open");\n    hamburgerClose.classList.toggle("open")\n    globalNav.classList.toggle("open");\n    menu.classList.toggle("open");\n  });\n<\/script> -->'])), maybeRenderHead());
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/BackToTheTop.astro", void 0);

const $$Astro$7 = createAstro("https://atama-reset.com");
const $$BottomNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BottomNav;
  return renderTemplate`${maybeRenderHead()}<div class="navbarTrigger" data-astro-cid-ltxpr5xc></div><!-- IntersectionObserverのトリガーポイントとして設定 --><nav class="navbar is-inactive" data-astro-cid-ltxpr5xc><a href="/blogs/1" data-astro-cid-ltxpr5xc><img src="/blog.svg" alt="" width="25" height="24" data-astro-cid-ltxpr5xc><p data-astro-cid-ltxpr5xc>ブログ</p></a><a href="/menu&price" data-astro-cid-ltxpr5xc><img src="/menu.svg" alt="" width="27" height="23" data-astro-cid-ltxpr5xc><p data-astro-cid-ltxpr5xc>メニュー</p></a><a href="/contact" data-astro-cid-ltxpr5xc><img src="/mail-to.svg" alt="" width="28" height="28" data-astro-cid-ltxpr5xc><p data-astro-cid-ltxpr5xc>お問い合わせ</p></a>${renderComponent($$result, "BackToTheTop", $$BackToTheTop, { "data-astro-cid-ltxpr5xc": true })}</nav>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/BottomNav.astro", void 0);

const $$Astro$6 = createAstro("https://atama-reset.com");
const $$HamburgerCloseLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HamburgerCloseLeft;
  return renderTemplate`${maybeRenderHead()}<button class="hamburgerClose open" id="js-hamburgerCloseLeft" title="hamburger-close" data-astro-cid-wivmga6k><span data-astro-cid-wivmga6k></span><span data-astro-cid-wivmga6k></span></button>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/HamburgerCloseLeft.astro", void 0);

const $$Astro$5 = createAstro("https://atama-reset.com");
const $$GlobalNavLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GlobalNavLeft;
  const nav = [
    {
      href: "/contact",
      label: "\u3054\u4E88\u7D04\u30FB\u304A\u554F\u3044\u5408\u308F\u305B"
    },
    {
      href: "/",
      label: "\u30DB\u30FC\u30E0"
    },
    {
      href: "/greeting",
      label: "\u3054\u3042\u3044\u3055\u3064"
    },
    {
      href: "/news",
      label: "\u304A\u77E5\u3089\u305B"
    },
    {
      href: "/blogs/1",
      label: "\u30D6\u30ED\u30B0"
    },
    {
      href: "/menu&price",
      label: "\u65BD\u8853\u30E1\u30CB\u30E5\u30FC & \u6599\u91D1"
    },
    {
      href: "/#access",
      label: "\u30A2\u30AF\u30BB\u30B9"
    },
    {
      href: "/first_time",
      label: "\u521D\u3081\u3066\u306E\u304A\u5BA2\u69D8\u3078"
    },
    {
      href: "/FAQ",
      label: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"
    },
    {
      href: "/voice",
      label: "\u304A\u5BA2\u69D8\u306E\u58F0"
    },
    {
      href: "/#effect",
      label: "\u671F\u5F85\u3055\u308C\u308B\u52B9\u679C"
    },
    {
      href: "/brain_fatigue",
      label: "\u8133\u75B2\u52B4\u3068\u306F\uFF1F"
    },
    {
      href: "/cerebrospinalFluid",
      label: "\u8133\u810A\u9AC4\u6DB2\u3068\u7761\u7720"
    },
    {
      href: "/intestinal_therapy",
      label: "\u8178\u30BB\u30E9\u30D4\u30FC"
    },
    {
      href: "/calf_loosening",
      label: "\u3075\u304F\u3089\u306F\u304E\u307B\u3050\u3057"
    },
    {
      href: "/indefinite_complaint",
      label: "\u4E0D\u5B9A\u6101\u8A34\u3068\u306F"
    },
    {
      href: "/first_time#steps",
      label: "\u65BD\u8853\u306E\u6D41\u308C"
    },
    {
      href: "/enterprise",
      label: "\u4F01\u696D\u30FB\u56E3\u4F53\u69D8"
    },
    {
      href: "/privacy_policy",
      label: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="globalNav" id="js-globalNavLeft" data-astro-cid-iws3qlhb><div class="container" data-astro-cid-iws3qlhb><nav data-astro-cid-iws3qlhb>${renderComponent($$result, "HamburgerCloseLeft", $$HamburgerCloseLeft, { "data-astro-cid-iws3qlhb": true })}<div class="logo" data-astro-cid-iws3qlhb><a href="/" class="globalNav-logo" data-astro-cid-iws3qlhb>${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "\u30ED\u30B4", "width": "90", "height": "90", "data-astro-cid-iws3qlhb": true })}</a></div></nav><div class="wrapper" id="js-globalNav-menu" data-astro-cid-iws3qlhb><div class="menu" data-astro-cid-iws3qlhb><ul data-astro-cid-iws3qlhb>${nav.map((nav_item) => renderTemplate`<li data-astro-cid-iws3qlhb><a${addAttribute(nav_item.href, "href")} data-astro-cid-iws3qlhb>${nav_item.label}</a></li>`)}</ul></div></div></div></div>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/GlobalNavLeft.astro", void 0);

const $$Astro$4 = createAstro("https://atama-reset.com");
const $$HamburgerCloseRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HamburgerCloseRight;
  return renderTemplate`${maybeRenderHead()}<button class="hamburgerClose open" id="js-hamburgerCloseRight" title="hamburger-close" data-astro-cid-5m5p5mxl><span data-astro-cid-5m5p5mxl></span><span data-astro-cid-5m5p5mxl></span></button>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/HamburgerCloseRight.astro", void 0);

const $$Astro$3 = createAstro("https://atama-reset.com");
const $$GlobalNavRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GlobalNavRight;
  const nav = [
    {
      href: "/contact",
      label: "\u3054\u4E88\u7D04\u30FB\u304A\u554F\u3044\u5408\u308F\u305B"
    },
    {
      href: "/",
      label: "\u30DB\u30FC\u30E0"
    },
    {
      href: "/greeting",
      label: "\u3054\u3042\u3044\u3055\u3064"
    },
    {
      href: "/news",
      label: "\u304A\u77E5\u3089\u305B"
    },
    {
      href: "/blogs/1",
      label: "\u30D6\u30ED\u30B0"
    },
    {
      href: "/menu&price",
      label: "\u65BD\u8853\u30E1\u30CB\u30E5\u30FC & \u6599\u91D1"
    },
    {
      href: "/#access",
      label: "\u30A2\u30AF\u30BB\u30B9"
    },
    {
      href: "/first_time",
      label: "\u521D\u3081\u3066\u306E\u304A\u5BA2\u69D8\u3078"
    },
    {
      href: "/FAQ",
      label: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"
    },
    {
      href: "/voice",
      label: "\u304A\u5BA2\u69D8\u306E\u58F0"
    },
    {
      href: "/#effect",
      label: "\u671F\u5F85\u3055\u308C\u308B\u52B9\u679C"
    },
    {
      href: "/brain_fatigue",
      label: "\u8133\u75B2\u52B4\u3068\u306F\uFF1F"
    },
    {
      href: "/cerebrospinalFluid",
      label: "\u8133\u810A\u9AC4\u6DB2\u3068\u7761\u7720"
    },
    {
      href: "/intestinal_therapy",
      label: "\u8178\u30BB\u30E9\u30D4\u30FC"
    },
    {
      href: "/calf_loosening",
      label: "\u3075\u304F\u3089\u306F\u304E\u307B\u3050\u3057"
    },
    {
      href: "/indefinite_complaint",
      label: "\u4E0D\u5B9A\u6101\u8A34\u3068\u306F"
    },
    {
      href: "/first_time#steps",
      label: "\u65BD\u8853\u306E\u6D41\u308C"
    },
    {
      href: "/enterprise",
      label: "\u4F01\u696D\u30FB\u56E3\u4F53\u69D8"
    },
    {
      href: "/privacy_policy",
      label: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="globalNav" id="js-globalNavRight" data-astro-cid-c3ltdqdr><div class="container" data-astro-cid-c3ltdqdr><nav data-astro-cid-c3ltdqdr>${renderComponent($$result, "HamburgerCloseRight", $$HamburgerCloseRight, { "data-astro-cid-c3ltdqdr": true })}<div class="logo" data-astro-cid-c3ltdqdr><a href="/" class="globalNav-logo" data-astro-cid-c3ltdqdr>${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "\u30ED\u30B4", "width": "90", "height": "90", "data-astro-cid-c3ltdqdr": true })}</a></div></nav><div class="wrapper" id="js-globalNav-menu" data-astro-cid-c3ltdqdr><div class="menu" data-astro-cid-c3ltdqdr><ul data-astro-cid-c3ltdqdr>${nav.map((nav_item) => renderTemplate`<li data-astro-cid-c3ltdqdr><a${addAttribute(nav_item.href, "href")} data-astro-cid-c3ltdqdr>${nav_item.label}</a></li>`)}</ul></div></div></div></div>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/GlobalNavRight.astro", void 0);

const siteMeta = {
  siteTitle: '頭ほぐし専門店reset',
  siteDesc: '',
  siteUrl: 'https://atama-reset.com',
  // siteUrl: 'http://localhost:4321/',
  siteType: 'website',
  siteLocale: 'ja_JP',
  siteIcon: ''
};

const $$Astro$2 = createAstro("https://atama-reset.com");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Meta;
  const {
    siteTitle,
    siteDesc,
    siteLocale,
    siteType,
    siteIcon
  } = siteMeta;
  const {
    pageTitle,
    description = siteDesc
  } = Astro2.props;
  const title = pageTitle ? `${siteTitle} | ${pageTitle}` : siteTitle;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<head><meta charset="utf-8"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta property="og:title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:site_name"${addAttribute(siteTitle, "content")}><meta property="og:type"${addAttribute(siteType, "content")}><meta property="og:locale"${addAttribute(siteLocale, "content")}><!-- <link rel="icon" href={siteIcon}/> --><link rel="apple-touch-icon"${addAttribute(siteIcon, "href")}><!-- <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,500&family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet"> -->${renderHead()}</head>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/meta.astro", void 0);

const $$Astro$1 = createAstro("https://atama-reset.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const props = Astro2.props;
  return renderTemplate`<html lang="ja" data-astro-cid-mmggtga4><head>${renderComponent($$result, "Meta", $$Meta, { ...props, "?": true, "data-astro-cid-mmggtga4": true })}${renderHead()}</head><body id="js-body" data-astro-cid-mmggtga4><div class="bodyCover" data-astro-cid-mmggtga4></div><div class="bodyInner" data-astro-cid-mmggtga4>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-mmggtga4": true })}${renderComponent($$result, "GlobalNavLeft", $$GlobalNavLeft, { "data-astro-cid-mmggtga4": true })}${renderComponent($$result, "GlobalNavRight", $$GlobalNavRight, { "data-astro-cid-mmggtga4": true })}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-mmggtga4": true })}${renderComponent($$result, "BottomNav", $$BottomNav, { "data-astro-cid-mmggtga4": true })}</div></body></html>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/layouts/layout.astro", void 0);

const $$Astro = createAstro("https://atama-reset.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page not found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-zetdm5md><section data-astro-cid-zetdm5md><h2 data-astro-cid-zetdm5md>404</h2><p data-astro-cid-zetdm5md>ページが見つかりません</p></section></main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/404.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, _404 as _, $$Layout as a, imageConfig as i };
