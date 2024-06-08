import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../astro/server_5b850809.mjs';
import { a as $$Layout } from './404_1dd0a085.mjs';
import { g as getNews } from './index_974b5fb1.mjs';
/* empty css                          */
const $$Astro = createAstro("http://localhost:4321/");
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$News;
  const posts = await getNews({ limit: 100 });
  const data = posts.contents.map((content) => ({
    title: content.title,
    publishedAt: content.publishedAt ? new Date(content.publishedAt).toLocaleDateString("ja-JP").split("/").join(".") : "",
    tag: content.tag,
    articles: content.article
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u304A\u77E5\u3089\u305B", "description": "", "data-astro-cid-5kj6t6lp": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-5kj6t6lp><section data-astro-cid-5kj6t6lp><h2 data-astro-cid-5kj6t6lp>お知らせ</h2>${data.map((content) => renderTemplate`<div class="container" data-astro-cid-5kj6t6lp><p class="publishedAt" data-astro-cid-5kj6t6lp>${content.publishedAt}</p>${content.tag.map((tag) => {
    switch (tag) {
      case "\u91CD\u8981":
        return renderTemplate`<div class="tag important" data-astro-cid-5kj6t6lp>重要</div>`;
      case "NEW":
        return renderTemplate`<div class="tag new" data-astro-cid-5kj6t6lp>NEW</div>`;
      case "\u7DCA\u6025":
        return renderTemplate`<div class="tag emergency" data-astro-cid-5kj6t6lp>緊急</div>`;
    }
  })}<h3 class="title" data-astro-cid-5kj6t6lp>${content.title}</h3><article data-astro-cid-5kj6t6lp>${content.articles.map((article) => {
    switch (article.fieldId) {
      case "rich_editor":
        return renderTemplate`<div class="setHtml richText richEditor" data-astro-cid-5kj6t6lp>${unescapeHTML(article.rich_editor)}</div>`;
      case "image":
        return renderTemplate`<div class="image richEditor" data-astro-cid-5kj6t6lp><img${addAttribute(article.image.url, "src")} alt=""${addAttribute(article.image.height, "height")}${addAttribute(article.image.width, "width")} data-astro-cid-5kj6t6lp></div>`;
      case "text":
        return renderTemplate`<p class="richEditor" data-astro-cid-5kj6t6lp>${article.text}</p>`;
    }
  })}</article></div>`)}</section></main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/news.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/news.astro";
const $$url = "/news";

export { $$News as default, $$file as file, $$url as url };
