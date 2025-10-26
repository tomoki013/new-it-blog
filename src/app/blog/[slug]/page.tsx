import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = getPostData(params.slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.title,
    description: post.description || post.title,
  };
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const options = {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "synthwave-84",
            onVisitLine(node) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("line--highlighted");
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ["word--highlighted"];
            },
          },
        ],
      ],
    },
  };

  return (
    <article className="prose prose-invert mx-auto max-w-3xl py-16 px-4 sm:px-6 lg:px-8">
      <header className="mb-10 border-b border-primary/20 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tighter text-glow-primary sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <p>
          {/* 日付を日本語フォーマットで表示 */}
          {new Date(post.date).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      <div className="prose-p:text-foreground prose-headings:text-glow-primary prose-a:text-primary hover:prose-a:text-glow-secondary prose-strong:text-glow-secondary prose-blockquote:border-primary/50 prose-code:text-secondary">
        {/* @ts-expect-error RSC */}
        <MDXRemote source={post.content} options={options} />
      </div>
    </article>
  );
}
