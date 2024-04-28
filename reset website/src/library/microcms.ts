// SDK利用準備
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";


const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

// 型定義
export type Blog = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  title: string,
  slug: string,
  eyecatch: {
    url: string,
    height: number,
    width: number,
  },
  summary: string,
  article: [
    {
      fieldId: string | undefined,
      image: {
        url: string | undefined,
        height: number | undefined,
        width: number | undefined,
      },
      text: string | undefined,
      rich_editor: string | undefined,
    }
  ],
};
export type BlogResponse = {
  totalCount: number,
  offset: number,
  limit: number,
  contents: Blog[],
  draftKey: string,
}

// APIの呼び出し
export async function getAllPosts(limit = 100) {
  return await client.get({
    endpoint: "blogs",
    queries: {
      orders: '-publishedAt',
      limit: limit,
    },
  })
  // return posts.contents
}

// BlogPreview.jsxに渡すデータを取得
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
