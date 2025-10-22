import fs from "fs"; // Node.js の File System モジュール
import path from "path"; // Node.js の Path モジュール
import matter from "gray-matter"; // gray-matter をインポート
import { Post, PostFrontmatter } from "@/types/types"; // 先ほど定義した型

// /posts ディレクトリへの絶対パスを取得
// process.cwd() はプロジェクトのルートを指す
const postsDirectory = path.join(process.cwd(), "posts");

/**
 * /posts フォルダからすべての記事データを読み込み、
 * 日付の降順（新しい順）にソートして返す
 */
export function getSortedPostsData(): Post[] {
  // /posts ディレクトリ内の全ファイル名（例: "hello.mdx"）を取得
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx")) // .mdx ファイルのみ対象
    .map((fileName) => {
      // ファイル名から ".mdx" を除外し、スラッグ（slug）として使用
      const slug = fileName.replace(/\.mdx$/, "");

      // ファイルのフルパス
      const fullPath = path.join(postsDirectory, fileName);

      // ファイルの内容をUTF-8で読み込む
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // gray-matter で frontmatter（メタデータ）をパース
      // 'data' にメタデータ, 'content' に本文が入る
      const matterResult = matter(fileContents);
      const frontmatter = matterResult.data as PostFrontmatter;

      // Post 型としてデータを整形
      return {
        slug,
        ...frontmatter,
      };
    });

  // 日付（date）で降順（新しい順）にソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// TODO: 記事詳細ページ用に、本文(content)も取得する関数 (getPostData) を後で作成する
