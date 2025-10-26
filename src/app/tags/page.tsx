import { getAllTags, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { Post } from "@/types/types";

export default function TagsPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const selectedTag = searchParams.tag;
  const allTags = getAllTags();
  const filteredPosts = selectedTag
    ? getSortedPostsData({ tag: selectedTag })
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400">Tags</h1>

      {/* タグ一覧 */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allTags.map((tag) => (
          <Link
            href={`/tags?tag=${encodeURIComponent(tag)}`}
            key={tag}
            className={`btn-glow px-4 py-2 rounded-lg transition-colors ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground shadow-glow-primary"
                : "bg-gray-800 text-white"
            }`}
          >
            {tag}
          </Link>
        ))}
      </div>

      {/* 絞り込み結果 */}
      {selectedTag && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">
            タグ「{selectedTag}」の記事
          </h2>
          {filteredPosts.length > 0 ? (
            <ul className="space-y-4">
              {filteredPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="block p-4 border border-border rounded-lg hover:bg-muted">
                      <h3 className="text-lg font-bold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-muted-foreground">
              該当する記事はありません。
            </p>
          )}
        </section>
      )}
    </div>
  );
}
