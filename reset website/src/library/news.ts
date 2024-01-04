import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

export type News = {
  id: string,
  title: string,
  summary: string,
  pubDateDisplay: boolean,
  tag: string,
  createdAt: string,
  publishedAt: string,
  article: {
    image:  {
      url: string,
      height: number,
      width: number,
    },
    text: string,
    rich_editor: string,
  },
}

export type NewsResponse = {
  totalCount: number,
  offset: number,
  limit:number,
}

export async function getNews({limit}) {
    const posts = await client.get({
      endpoint: "news",
      queries: {
        orders: "-publishedAt",
        limit: limit,
      }
    })
    return posts
  }
