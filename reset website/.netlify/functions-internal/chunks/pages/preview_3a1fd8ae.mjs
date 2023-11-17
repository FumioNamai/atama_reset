import { c as createAstro, a as createComponent, g as defineStyleVars, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro/server_5b850809.mjs';
import 'clsx';
import { a as $$Layout } from './404_e0b52eba.mjs';
/* empty css                            *//* empty css                             */
const $$Astro$1 = createAstro("http://localhost:4321/");
const $$BackButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackButton;
  const {
    href,
    label,
    width,
    fontSize = "1.6rem",
    marginInline = "auto"
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ width, fontSize, marginInline }]);
  return renderTemplate`${maybeRenderHead()}<div class="backButton" data-astro-cid-7a7bzblm${addAttribute($$definedVars, "style")}><a${addAttribute(href, "href")} class="more" data-astro-cid-7a7bzblm${addAttribute($$definedVars, "style")}>${label}</a><span data-astro-cid-7a7bzblm${addAttribute($$definedVars, "style")}></span></div>`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/BackButton.astro", void 0);

const $$Astro = createAstro("http://localhost:4321/");
const $$Preview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Preview;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u30D6\u30ED\u30B0\u30D7\u30EC\u30D3\u30E5\u30FC", "data-astro-cid-ue3yhu3a": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-ue3yhu3a><section class="blog" data-astro-cid-ue3yhu3a><div class="container" data-astro-cid-ue3yhu3a>${renderComponent($$result2, "BlogPreview", null, { "client:only": "preact", "client:component-hydration": "only", "data-astro-cid-ue3yhu3a": true, "client:component-path": "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/BlogPreview.jsx", "client:component-export": "default" })}<!-- client:only　でサーバーサイドでレンダリングしない設定 -->${renderComponent($$result2, "BackButton", $$BackButton, { "href": "/blogs/1", ",": true, "label": "\u4E00\u89A7\u306B\u623B\u308B", ",": true, "width": "130px", ",": true, "fontSize": "1.8rem", ",": true, "data-astro-cid-ue3yhu3a": true })}</div><aside data-astro-cid-ue3yhu3a><div class="blog-list" data-astro-cid-ue3yhu3a><h3 data-astro-cid-ue3yhu3a>最近の投稿</h3><!-- {
            posts.map((post) => (
            <BlogSummary
            id={post.id}
            slug={post.slug}
            src={post.eyecatch.url}
            date={post.publishedAt}
            title={post.title}
            summary={post.summary}
            />
            ))
          } --></div></aside></section></main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/preview.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/preview.astro";
const $$url = "/preview";

const preview = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Preview,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BackButton as $, preview as p };
