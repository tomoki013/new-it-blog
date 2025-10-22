import Link from "next/link";
import { type Post } from "@/types/types";
import { ArrowRight, Calendar, Tag } from "lucide-react";

type ArticleCardProps = {
  post: Post;
};

export function ArticleCard({ post }: ArticleCardProps) {
  // 日付のフォーマット
  const formattedDate = new Date(post.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article
      className="
        group relative w-full 
        overflow-hidden 
        border-2 border-border 
        bg-card p-1 /* パディングを小さく */
        transition-all duration-300 
        hover:border-primary 
        dark:hover:shadow-glow-primary 
        dark:hover:animate-neon-pulse 
        hover:-translate-y-1
      "
    >
      {/* 1. [変更] ホバー時のスピニング・グローボーダー */}
      <div
        className="
          absolute -inset-1 
          bg-liner-to-r from-primary via-secondary to-primary 
          opacity-0 transition-opacity duration-500 
          group-hover:opacity-70 dark:group-hover:opacity-100 
          dark:group-hover:animate-spin
        "
        style={{ filter: "blur(8px)" }}
      />

      {/* 2. [変更] コンテンツをラップするインナーボーダー */}
      <div className="relative z-10 flex flex-col h-full bg-card p-5 border border-border">
        {/* 3. [追加] ホバー時グリッチオーバーレイ */}
        <div
          className="
            absolute top-0 left-0 w-full h-full 
            bg-primary 
            opacity-0 
            mix-blend-color-dodge 
            transition-opacity duration-300 
            group-hover:animate-card-glitch
          "
        />

        {/* 4. カードの内容 (z-index: 10) */}
        <div className="relative z-10">
          {/* 日付とカテゴリ */}
          <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <time dateTime={post.date} className="dark:text-glow-secondary">
                {formattedDate}
              </time>
            </div>
            {post.category && (
              <div className="flex items-center gap-1.5">
                <Tag size={14} />
                <span className="dark:text-glow-secondary">
                  {post.category}
                </span>
              </div>
            )}
          </div>

          {/* タイトル (グリッチ適用) */}
          <h2 className="relative mb-3 text-3xl font-bold text-foreground transition-colors group-hover:text-primary dark:group-hover:text-glow-primary">
            <Link href={`/blog/${post.slug}`} className="relative block">
              <span className="relative block transition-transform duration-300 group-hover:animate-glitch-translate">
                {post.title} \\ HACKING
              </span>
            </Link>
          </h2>

          {/* 概要 */}
          {post.description && (
            <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
              {post.description}
            </p>
          )}

          {/* タグ (グロー適用) */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-muted text-muted-foreground border border-border dark:border-primary dark:text-glow-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 続きを読む (グロー適用) */}
          <div className="mt-auto">
            <Link
              href={`/blog/${post.slug}`}
              className="
                inline-flex items-center gap-1 
                text-base font-semibold text-primary 
                opacity-0 transition-all duration-300 
                group-hover:opacity-100 group-hover:gap-2 
                dark:group-hover:text-glow-primary 
                animate-neon-pulse
              "
            >
              Read More // ACCESS
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
