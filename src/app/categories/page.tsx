import { getAllCategories, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function CategoriesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const selectedCategory = searchParams.category;
  const allCategories = getAllCategories();
  const filteredPosts = selectedCategory
    ? getSortedPostsData({ category: selectedCategory })
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400">
        Categories
      </h1>

      {/* カテゴリ一覧 */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allCategories.map((category) => (
          <Link
            href={`/categories?category=${encodeURIComponent(category)}`}
            key={category}
            className={`btn-glow px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-glow-primary"
                : "bg-gray-800 text-white"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>

      {/* 絞り込み結果 */}
      {selectedCategory && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">
            カテゴリ「{selectedCategory}」の記事
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
