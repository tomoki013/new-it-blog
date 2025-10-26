import { getAllCategories } from "@/lib/posts";
import Link from "next/link";

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400">Categories</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Link href={`/categories/${category}`} key={category} className="btn-glow bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
