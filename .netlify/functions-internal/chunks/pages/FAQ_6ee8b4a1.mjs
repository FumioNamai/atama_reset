import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro/server_5b850809.mjs';
import 'clsx';
import { $ as $$Image, a as $$Layout } from './404_1dd0a085.mjs';
import { useState, useRef, useEffect } from 'preact/compat';
import { jsx, jsxs } from 'preact/jsx-runtime';
import { s as styles } from '../FAQ.117d5ef1_3a3fb30e.mjs';

const QandA = new Proxy({"src":"/_astro/Q_A.90bab789.webp","width":640,"height":327,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const ReactAccordionBox = (props) => {
  const [heightStyle, setHeightStyle] = useState(props.isOpen ? "" : "0px");
  const [isOverflowHidden, setIsOverflowHidden] = useState(!props.isOpen);
  const elAccordionRef = useRef(null);
  const elContentRef = useRef(null);
  useEffect(() => {
    if (elAccordionRef.current == null) {
      return;
    }
    setIsOverflowHidden(true);
    setHeightStyle(`${elAccordionRef.current.clientHeight}px`);
    setTimeout(() => {
      setHeightStyle(() => {
        if (elContentRef.current == null) {
          return "0px";
        }
        return props.isOpen ? `${elContentRef.current.clientHeight}px` : "0px";
      });
    }, 100);
  }, [props.isOpen]);
  const handleTransitionEnd = () => {
    if (props.isOpen) {
      setHeightStyle("");
      setIsOverflowHidden(false);
    }
  };
  return jsx("div", {
    ref: elAccordionRef,
    style: {
      height: heightStyle,
      overflow: isOverflowHidden ? "hidden" : "",
      transition: "height 1s"
    },
    onTransitionEnd: handleTransitionEnd,
    children: jsx("div", {
      ref: elContentRef,
      children: props.children
    })
  });
};

function ReactAccordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotate, setIsRotate] = useState();
  isOpen ? setIsRotate("rotate(225deg)") : setIsRotate("rotate(45deg)");
  return jsxs("div", {
    className: styles.accordion,
    children: [jsxs("div", {
      className: styles.question,
      onClick: () => setIsOpen(!isOpen),
      children: [jsxs("div", {
        className: styles.wrapper,
        children: [jsx("h3", {
          children: "Q"
        }), jsx("p", {
          children: props.question
        })]
      }), jsx("span", {
        className: styles.arrow,
        style: {
          transform: isRotate
        }
      })]
    }), jsx(ReactAccordionBox, {
      isOpen,
      children: jsxs("div", {
        className: styles.answer,
        children: [jsx("h3", {
          children: "A"
        }), props.answer, jsx("div", {
          children: props.children
        })]
      })
    })]
  });
}

const $$Astro = createAstro("http://localhost:4321/");
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F", "description": "", "data-astro-cid-ynzegj2z": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-ynzegj2z><h3 data-astro-cid-ynzegj2z>よくあるご質問</h3><div class="image" data-astro-cid-ynzegj2z>${renderComponent($$result2, "Image", $$Image, { "src": QandA, "alt": "Q&A", "loading": "eager", "width": "640", "height": "327", "data-astro-cid-ynzegj2z": true })}</div>${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z> 老若男女、お子様も施術可能</span>です。<br data-astro-cid-ynzegj2z>お客様の症状に合わせた内容をご提案、ご提供させていただきます。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>男性でも施術を受けられますか？</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>前日までの完全ご予約制</span>となっております。<br data-astro-cid-ynzegj2z>
当日のご予約も空き状況によりご案内可能です。 ご来店前にお電話にてご確認ください。<br data-astro-cid-ynzegj2z>
また、週末のご予約は前以て集中することもございます。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>お早めのご予約をお勧め致します。</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>当日予約はできますか？</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
大変申し訳ございませんが、施術者が一人ですので、<span class="bold highlight" data-astro-cid-ynzegj2z>お一人様ずつ</span>の施術となります。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>
施術日が別であっても、<span class="bold highlight" data-astro-cid-ynzegj2z>お連れ様でのご予約でお得な割引</span>がございますので是非お申し付けください。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>２人同時に施術できますか？</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
ワックスがついた状態でも問題ございませんが、施術後は少しヘアスタイルも乱れてしまいます。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>
ハードワックスやハードスプレーは施術に影響します</span>ので、ご遠慮いただきますようご協力お願いいたします。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>ワックスをつけたままでもいいですか？</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
誠に申し訳ございませんが<span class="bold highlight" data-astro-cid-ynzegj2z>現金のみのお取り扱い</span>となります。<br data-astro-cid-ynzegj2z>
ご不便お掛けしますが宜しくお願いいたします。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>キャッシュレス対応してますか？</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
治療院前に<span class="bold highlight" data-astro-cid-ynzegj2z>３台分</span>ございます。<br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>１３番、１５番、１６番</span>をご利用ください。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>駐車場はありますか？</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
各種ご用意しております。<br data-astro-cid-ynzegj2z>
料金の明記はございませんので、大切な方への贈り物にいかがですか。<br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>お支払いは現金のみ</span>となります。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>ギフト券はありますか？</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
未成年の方も施術を受けていただけます。<br data-astro-cid-ynzegj2z>
是非お気軽にご相談ください。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>
施術の内容や注意事項をご説明しますので、保護者の方の送迎をお願いいたします。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>
施術を受けられるご本人・保護者の方・セラピストでカウンセリングを実施し、ご理解いただいた上で施術をおこないます。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>保護者の方に同意書のサインを頂戴します。</span><br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>また、未成年の方のお支払いは保護者の方にお願いします。
<br data-astro-cid-ynzegj2z><br data-astro-cid-ynzegj2z>学生割引がございますので、学生証をお忘れなく♪</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>未成年も施術を受けられますか？</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
詳しくは<a href="/blog/what-is-different-from-190612" data-astro-cid-ynzegj2z>こちら</a></p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>「ヘッドスパと何が違うの？」</span>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ReactAccordion.jsx", "client:component-export": "default", "data-astro-cid-ynzegj2z": true }, { "answer": ($$result3) => renderTemplate`<div class="answer" data-astro-cid-ynzegj2z><p data-astro-cid-ynzegj2z>
各種ご用意しております。<br data-astro-cid-ynzegj2z>
料金の明記はございませんので、大切な方への贈り物にいかがですか。<br data-astro-cid-ynzegj2z><span class="bold highlight" data-astro-cid-ynzegj2z>お支払いは現金のみ</span>となります。
</p></div>`, "question": ($$result3) => renderTemplate`<span data-astro-cid-ynzegj2z>ギフト券はありますか？</span>` })}</main>` })}`;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/FAQ.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/FAQ.astro";
const $$url = "/FAQ";

export { $$FAQ as default, $$file as file, $$url as url };
