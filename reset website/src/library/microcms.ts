// SDK利用準備
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";


const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

//  型定義
export type Blog = {
  id: string,
  title: string,
  slug: string,
  publishedAt: string,
  eyecatch: {
    url: string,
    height: number,
    width: number,
  },
  summary: string,
  article: {
    image:  {
      url: string,
      height: number,
      width: number,
    },
    text: string,
    rich_editor: string,
  },
};
export type BlogResponse = {
  totalCount: number,
  offset: number,
  limit: number,
  contents: Blog[],
}

// APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({
    endpoint: "blogs",
    queries:{
      orders: '-publishedAt',
    }})
};

export async function getAllPosts( limit = 10) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: 'id,title,slug,publishedAt,summary,eyecatch',
        orders: '-publishedAt',
        limit: limit,
      },
    })
    return posts.contents
  } catch {
    console.log(err);
  }
}

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

export async function getAllSlugs(limit:10) {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders:'-publishDate', limit:limit},
    })
    return slugs.contents
  } catch (err) {
    console.log('getAllSlugs');
    console.log(err);
  }
}
