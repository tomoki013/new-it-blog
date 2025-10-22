// import { allPosts } from "contentlayer/generated"; // ← 削除
import { getSortedPostsData } from "@/lib/posts"; // ← これに変更
import { ArticleCard } from "@/components/ui/ArticleCard";

export default function HomePage() {
  // 自作のライブラリから記事データを取得
  const sortedPosts = getSortedPostsData();

  return (
    <section className="w-full">
      <h1 className="mb-8 text-4xl font-bold text-foreground">最新の投稿</h1>

      {/* 記事一覧 (変更なし) */}
      {sortedPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sortedPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">投稿はまだありません。</p>
      )}
    </section>
  );
}
