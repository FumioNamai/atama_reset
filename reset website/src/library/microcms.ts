// SDK利用準備
import { createClient } from "microcms-js-sdk";
// import type { MicroCMSQueries } from "microcms-js-sdk";


const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

//  型定義
// export type Blog = {
//   id: string,
//   title: string,
//   slug: string,
//   publishedAt: string,
//   eyecatch: {
//     url: string,
//     height: number,
//     width: number,
//   },
//   summary: string,
//   article: {
//     image:  {
//       url: string,
//       height: number,
//       width: number,
//     },
//     text: string,
//     rich_editor: string,
//   },
// };
// export type BlogResponse = {
//   totalCount: number,
//   offset: number,
//   limit: number,
//   contents: Blog[],
//   draftKey: string,
// }

// APIの呼び出し
export async function getAllPosts( limit = 100) {
  return await client.get({
    endpoint: "blogs",
    queries: {
      orders: '-publishedAt',
      limit: limit,
    },
  })
  return posts.contents
}

// export const getBlogs = async (queries?: MicroCMSQueries) => {
//     return await client.get<BlogResponse>({
//       endpoint: "blogs",
//       queries:{
//         orders: '-publishedAt',
//       }})
//     };
// export const getBlogs = async ( limit = 100, offset = 0) => {
//   return await client.get({
//     endpoint: "blogs",
//     queries : {
//       offset,
//       limit,
//       orders: "-publishedAt"
//     }
//   })
// }

// export async function getAllSlugs(limit:100) {
//     const slugs = await client.get({
//       endpoint: 'blogs',
//       queries: {
//         fields: 'title,slug',
//         orders:'-publishDate',
//         limit:limit
//       },
//     })
//     return slugs.contents
// }

// export async function getBlogDetail( limit = 100) {
//   return await client.get({
//     endpoint: "blogs",
//     queries: {
//       limit: limit,
//       orders: '-publishedAt',
//     },
//   });
//   return posts.contents
// }

// fields: 'id,title,slug,publishedAt,summary,eyecatch',

// limitを増やす必要あり
// export async function getBlogDetail(
//   queries?: MicroCMSQueries
// ) {
//   return await client.getListDetail<Blog>({
//     endpoint: "blogs",
//     queries: {
//     },
//   });
// };
