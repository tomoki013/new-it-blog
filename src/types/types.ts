// Markdown の Frontmatter (メタデータ) の型
export type PostFrontmatter = {
  title: string;
  date: string;
  description?: string;
  category?: string;
  tags?: string[];
};

// 私たちがアプリ全体で使う Post の型 (メタデータ + スラッグ)
export type Post = PostFrontmatter & {
  slug: string;
};
