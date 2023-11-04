
import useSWR from "swr"
import { getAllPosts } from "../library/microcms";
import styles from "../styles/BlogPreview.module.css"


const BlogPreview = () => {
  const params = new URLSearchParams(window.location.search);
  const contentId = params.get("contentId")
  const draftKey = params.get("draftKey")


  const { data, error, isLoading, isValidating } = useSWR(
    contentId === null || draftKey === null ? null : ["/preview", contentId, draftKey],
    ([, contentId, draftKey]) => getAllPosts(contentId, { draftKey })
  )

  const pubDate = new Date(data?.publishedAt)
    .toLocaleDateString("ja-JP")
    .split("/")
    .join(".");

  if (error) return <div>エラーが発生しました</div>;
  if (isLoading) return <div>読み込み中...</div>;

  const img = {
    width: "100%",
    height: "auto",
  }

  return (
    <>
        <p className={styles?.publishedAt}>
          {pubDate}
        </p>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.setHtml} dangerouslySetInnerHTML={{ __html: data?.article.rich_editor ?? "" }} />
        <div className={styles?.image}>
          <img
            style={img}
            className={styles.blogImg}
            src={data.eyecatch?.url}
            alt=""
            height={data.eyecatch?.height}
            width={data.eyecatch?.width}
          />
        </div>

        <article>
          {
            data.article.map((article) => {
              switch (article.fieldId) {
                case "rich_editor":
                  return <div className={styles.setHtml} dangerouslySetInnerHTML={{ __html: article?.rich_editor ?? "" }} />;
                case "image":
                  return (
                    <div className={styles.image}>
                      <img
                        style={img}
                        className={styles.blogImg}
                        src={article?.image.url}
                        alt=""
                        height={article?.image.height}
                        width={article?.image.width}
                      />
                    </div>
                  );
                case "text":
                  return <p>{article?.text}</p>;
                default:
                  break;
              }
            })
          }
        </article>
</>
  )
}


export default BlogPreview
