import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostFrontmatter } from "@/types/types";

// 'posts' ディレクトリの絶対パス
const postsDirectory = path.join(process.cwd(), "posts");
// スキャン対象が書かれた設定ファイルのパス
const configPath = path.join(postsDirectory, "it-blog.config.json");

/**
 * it-blog.config.json を読み込み、スキャン対象のディレクトリ名（例: ["it-posts", "common"]）を取得します。
 */
function getTargetDirectories(): string[] {
  try {
    const configFile = fs.readFileSync(configPath, "utf8");
    // JSONファイル（{"directories": ["it-posts", "common"]}）をパースする
    const config = JSON.parse(configFile);

    // config がオブジェクトであり、 'directories' プロパティが配列であることを確認
    if (
      config &&
      typeof config === "object" &&
      Array.isArray(config.directories)
    ) {
      return config.directories; // config.directories を返す
    }

    console.error(
      "it-blog.config.json の形式が正しくありません。'directories' プロパティ（配列）を期待しています。"
    );
    return [];
  } catch (e) {
    console.error(`it-blog.config.json が読み込めません: ${e}`);
    return [];
  }
}

/**
 * 指定されたディレクトリ（サブディレクトリ）内のすべてのマークダウンファイル（.mdx, .md）の
 * ファイル名（拡張子なし）のリストを返します。
 * @param subDir スキャンするサブディレクトリ名 (例: "it-posts")
 */
function getFileNamesInDirectory(subDir: string): string[] {
  const fullDir = path.join(postsDirectory, subDir);

  // ディレクトリが存在するかチェック
  if (!fs.existsSync(fullDir) || !fs.statSync(fullDir).isDirectory()) {
    console.warn(`ディレクトリ ${fullDir} が存在しません。`);
    return [];
  }

  const fileNames = fs.readdirSync(fullDir);

  return (
    fileNames
      // .mdx または .md ファイルのみを対象にする
      .filter((fileName) => {
        const fullPath = path.join(fullDir, fileName);
        // ディレクトリは除外し、拡張子をチェックする
        return (
          fs.statSync(fullPath).isFile() &&
          (fileName.endsWith(".mdx") || fileName.endsWith(".md"))
        );
      })
      .map((fileName) => fileName.replace(/\.mdx$/, "").replace(/\.md$/, ""))
  );
}

/**
 * すべての投稿のスラッグ（ファイル名）を [ { slug: '...' } ] の形式で取得します。
 * getStaticPaths で使用します。
 */
export function getAllPostSlugs() {
  const targetDirs = getTargetDirectories(); // ["it-posts", "common"]

  // flatMap を使い、すべての対象ディレクトリからファイル名（スラッグ）を取得して
  // 1つの配列にまとめる
  const allSlugs = targetDirs.flatMap((dir) => {
    const slugsInDir = getFileNamesInDirectory(dir);
    return slugsInDir.map((slug) => ({
      slug: slug,
      // オプション: どのディレクトリ由来かを知りたい場合は、以下も追加できます
      // directory: dir,
    }));
  });

  return allSlugs;
}

/**
 * スラッグ（ファイル名）を元に、単一の投稿データを取得します。
 * getStaticProps で使用します。
 * @param slug 投稿のスラッグ (例: "my-first-post")
 */
export function getPostData(slug: string): (Post & { content: string }) | null {
  const targetDirs = getTargetDirectories(); // ["it-posts", "common"]
  const extensions = [".mdx", ".md"];

  // すべての対象ディレクトリを横断してファイルを探す
  for (const dir of targetDirs) {
    for (const ext of extensions) {
      const fullPath = path.join(postsDirectory, dir, `${slug}${ext}`);

      // try-catch でファイル存在チェック
      try {
        // fs.statSync はファイルがないとエラーを投げる
        const stat = fs.statSync(fullPath);

        // ファイルが存在し、かつディレクトリではない場合
        if (stat.isFile()) {
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const matterResult = matter(fileContents);
          const frontmatter = matterResult.data as Partial<PostFrontmatter>;

          return {
            slug,
            title: frontmatter.title || "無題の投稿",
            date: frontmatter.date || "1970-01-01",
            description: frontmatter.description,
            category: frontmatter.category,
            tags: frontmatter.tags,
            content: matterResult.content,
          };
        }
      } catch {
        // ファイルが存在しない (ENOENT) などのエラーは無視して次のループへ
      }
    }
  }

  // どのディレクトリにもファイルが見つからなかった場合
  console.error(`投稿 ${slug} が見つかりませんでした。`);
  return null;
}

/**
 * すべての投稿データを日付順（降順）でソートして取得します。
 * トップページなどで使用します。
 */
export function getSortedPostsData(): Post[] {
  const targetDirs = getTargetDirectories(); // ["it-posts", "common"]

  const allPostsData = targetDirs.flatMap((dir) => {
    const fullDir = path.join(postsDirectory, dir);

    // ディレクトリが存在しない場合は空配列を返す
    if (!fs.existsSync(fullDir) || !fs.statSync(fullDir).isDirectory()) {
      return [];
    }

    const fileNames = fs.readdirSync(fullDir);

    const postsInDir = fileNames
      .filter((fileName) => {
        // .mdx, .md のみを対象とする
        if (!fileName.endsWith(".mdx") && !fileName.endsWith(".md")) {
          return false;
        }

        const fullPath = path.join(fullDir, fileName);
        const stat = fs.statSync(fullPath);
        // ディレクトリは除外
        return !stat.isDirectory();
      })
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "").replace(/\.md$/, "");
        const fullPath = path.join(fullDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        const frontmatter = matterResult.data as Partial<PostFrontmatter>;

        // Post型に適合するようにデフォルト値を設定
        const post: Post = {
          slug,
          title: frontmatter.title || "無題の投稿",
          date: frontmatter.date || "1970-01-01",
          description: frontmatter.description,
          category: frontmatter.category,
          tags: frontmatter.tags,
        };

        return post;
      });

    return postsInDir;
  });

  // 日付順（降順）でソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
