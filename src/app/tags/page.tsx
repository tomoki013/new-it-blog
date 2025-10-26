import { getAllTags } from "@/lib/posts";
import Link from "next/link";

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400">Tags</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {tags.map((tag) => (
          <Link href={`/tags/${tag}`} key={tag} className="btn-glow bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
