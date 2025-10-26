import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import type { Element } from "hast";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
            onVisitLine(node: Element) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node: Element) {
              if (!node.properties) node.properties = {};
              if (!node.properties.className) node.properties.className = [];
              (node.properties.className as string[]).push("line--highlighted");
            },
            onVisitHighlightedWord(node: Element) {
              if (!node.properties) node.properties = {};
              node.properties.className = ["word--highlighted"];
            },
          },
        ],
      ],
    },
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-glow-primary transition-all duration-300 btn-glow p-2 rounded-md"
        >
          <ArrowLeft size={20} />
          <span className="relative z-10">Back to Blog</span>
        </Link>
      </div>

      <article className="prose prose-invert mx-auto bg-background/50 border-2 border-primary/30 rounded-lg shadow-glow-primary p-6 md:p-10 relative overflow-hidden scanlines-overlay noise-overlay">
        <header className="mb-10 border-b border-primary/20 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tighter text-glow-primary sm:text-4xl md:text-5xl glitch-effect" data-text={post.title}>
            {post.title}
          </h1>
          <p className="text-muted-foreground">
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
    </div>
  );
}
