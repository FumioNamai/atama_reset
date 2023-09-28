import { z,defineCollection } from "astro:content"

export const blogSchema = defineCollection({
  schema: {
    collections:[
      {
        name: 'blog'
        label: 'Blog記事',
        path:'src/content/blog',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify:(values) => {
              return `${values?.slug}`;
            }
          }
        }
        defaultItem: () => {
          return{
            pubDate: new Date().toISOString(),
          };
        },

      apiFields: [
        {
          idValue: "string",
          fieldId: "title",
          name: "タイトル",
          kind: "text",
          isUnique: false
        },
        {
          fieldId: "slug",
          name: "スラッグ",
          kind: "text",
          required: true,
          isUnique: false
        },
        {
          fieldId: "publishedAt",
          name: "公開日",
          kind: "date",
          dateFormat: false
        },
        {
          fieldId: "eyecatch",
          name: "アイキャッチ",
          kind: "media"
        },
        {
          fieldId: "summary",
          name: "要約",
          kind: "textArea"
        },
        {
          fieldId: "article",
          name: "コンテンツ",
          kind: "repeater",
          customFieldCreatedAtList: [
            "2023-07-02T00:36:19.304Z",
            "2023-07-02T00:37:28.409Z",
            "2023-07-02T00:35:33.392Z"
          ]
        }
      ],
      customFields: [
        {
          createdAt: "2023-07-02T00:35:33.392Z",
          fieldId: "rich_editor",
          name: "リッチエディタ",
          fields: [
            {
              idValue: "fPhh0Fz8fd",
              fieldId: "rich_editor",
              name: "リッチエディタ",
              kind: "richEditorV2",
              customClassList: [
                { id: "zoqllY9NV0",
                name: "primary",
                value: "primary" },
                { id: "1Fo9mcIGIa", name: "secondary", value: "secondary" },
                { id: "CxscUI3wAZ", name: "positive", value: "positive" },
                { id: "87AYDAeHet", name: "highlight", value: "highlight" },
                { id: "z__IzPIOUO", name: "attention", value: "attention" },
                { id: "3ma--EBTcA", name: "alert", value: "alert" },
                { id: "h0oBC1ZkPS", name: "link", value: "link" }
              ]
            }
          ],
          position: [["fPhh0Fz8fd"]],
          updatedAt: "2023-09-16T02:14:34.330Z",
          viewerGroup: "Rxo"
        },
        {
          createdAt: "2023-07-02T00:36:19.304Z",
          fieldId: "image",
          name: "画像",
          fields: [
            {
              idValue: "Cb9R7PVbJH",
              fieldId: "image",
              name: "画像",
              kind: "media"
            }
          ],
          position: [["Cb9R7PVbJH"]],
          updatedAt: "2023-07-02T02:50:25.857Z",
          viewerGroup: "Rxo"
        },
        {
          createdAt: "2023-07-02T00:37:28.409Z",
          fieldId: "text",
          name: "テキスト",
          fields: [
            {
              idValue: "wa7k0NJXsT",
              fieldId: "text",
              name: "テキスト",
              kind: "textArea"
            }
          ],
          position: [["wa7k0NJXsT"]],
          updatedAt: "2023-07-02T00:37:28.409Z",
          viewerGroup: "Rxo"
        }
      ]
    }
    ]
  },
})
