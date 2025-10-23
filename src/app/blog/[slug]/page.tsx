import { getAllPostSlugs, getPostData } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import rehypePrettyCode from 'rehype-pretty-code';

type Props = {
  // In Next.js 15+, the params object can be a Promise.
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params; // Await the params promise
    const post = getPostData(slug);
    return {
      title: post.title as string,
      description: post.description as string,
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function PostPage({ params }: Props) {
  let post;
  try {
    const { slug } = await params; // Await the params promise
    post = getPostData(slug);
  } catch (error) {
    notFound();
  }

  const options = {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
          },
        ],
      ],
    },
  };

  return (
    <article className="prose prose-invert mx-auto max-w-3xl py-16 px-4 sm:px-6 lg:px-8">
      <header className="mb-10 border-b border-primary/20 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tighter text-glow-primary sm:text-4xl md:text-5xl">
          {post.title as string}
        </h1>
        <p className="mt-4 text-muted-foreground">{post.date as string}</p>
      </header>

      <div className="prose-p:text-foreground prose-headings:text-glow-primary prose-a:text-primary hover:prose-a:text-glow-secondary prose-strong:text-glow-secondary prose-blockquote:border-primary/50 prose-code:text-secondary">
        {/* @ts-expect-error RSC */}
        <MDXRemote source={post.content} options={options} />
      </div>
    </article>
  );
}
