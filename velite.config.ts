import { defineConfig, defineCollection, s } from "velite";

// 投稿（Post）のスキーマを定義
const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx", // /posts ディレクトリ以下の .mdx ファイルを対象
  schema: s.object({
    title: s.string().max(99), // タイトル (必須)
    slug: s.slug("global"), // スラッグ (必須、グローバルで一意)
    date: s.isodate(), // 投稿日 (必須)
    description: s.string().max(199).optional(), // 概要 (任意)
    category: s.string().optional(), // カテゴリ (任意)
    tags: s.array(s.string()).default([]), // タグ (任意、デフォルトは空配列)
    // mdxの本文コンテンツ
    body: s.mdx(),
  }),
});

export default defineConfig({
  // veliteが出力する型定義ファイルとデータ
  output: {
    data: ".velite", // データと型定義はここにまとめて出力されます
    assets: "public/static",
    base: "/static/",
    clean: true,
    // ↓ エラーの原因となったこの行を削除します
    // types: 'src/lib/velite.ts',
  },
  collections: { posts },
});
