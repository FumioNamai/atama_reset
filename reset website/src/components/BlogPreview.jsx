
import useSWR from "swr"
import { getBlogDetail } from "../library/microcms";
import styles from "../styles/BlogPreview.module.css"


const BlogPreview = () => {
  const params = new URLSearchParams(window.location.search);
  const contentId = params.get("contentId")
  const draftKey = params.get("draftKey")


  const { data, error, isLoading, isValidating } = useSWR(
    contentId === null || draftKey === null ? null : ["/preview", contentId, draftKey],
    ([, contentId, draftKey]) => getBlogDetail(contentId, { draftKey })
  )

  if (error) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中...</div>;

  console.log(data.article);
  return (
    <>
      <section className={styles.blog}>
        <div className={styles.container}>
          <p className={styles.publishedAt}>
            {data.publishedAt}
          </p>
          <h2 className={styles.title}>{data.title}</h2>
          <div className={styles.setHtml} dangerouslySetInnerHTML={{ __html: data?.article.rich_editor ?? "" }} />
          <div className={styles.image}>
            <img
              src={data.eyecatch.url}
              alt=""
              height={data.eyecatch.height}
              width={data.eyecatch.width}
            />
          </div>
          <p>{data.article.text}</p>;
        </div>

        <article>
          <div className={data.image}>
            {/* <img
              src={data?.article.image.url}
              alt=""
              height={data?.article.image.height}
              width={data?.article.image.width}
            /> */}
          </div>
        </article>
        {/* <article>
          {
            data.articles.map((article) => {
              switch (article.fieldId) {
                case "rich_editor":
                  return <div className="setHtml" set:html={data.article.rich_editor} />;
                case "image":
                  return (
                    <div className="image">
                      <img
                        src={data.article.image.url}
                        alt=""
                        height={data.article.image.height}
                        width={data.article.image.width}
                      />
                    </div>
                  );
                case "text":
                  return <p>{data.article.text}</p>;
                default:
                  break;
              }
            })
          }
        </article> */}
      </section>

    </>
  )
}


export default BlogPreview
