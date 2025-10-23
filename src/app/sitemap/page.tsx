import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

const SitemapPage = () => {
  const allPosts = getSortedPostsData();

  const staticPages = [
    { name: 'Top', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-glow-primary animate-neon-pulse mb-4">
          SITEMAP
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Pages Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-glow-secondary border-b-2 border-primary/50 pb-2">
            Pages
          </h2>
          <ul className="space-y-3">
            {staticPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="text-lg text-foreground hover:text-primary hover:text-glow-primary transition-colors duration-300">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Blog Posts Section */}
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-glow-secondary border-b-2 border-primary/50 pb-2">
            All Posts
          </h2>
          <ul className="space-y-3 columns-1 md:columns-2">
            {allPosts.map(({ slug, title }) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`} className="text-lg text-foreground hover:text-primary hover:text-glow-primary transition-colors duration-300">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Categories Section (Placeholder) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-glow-secondary border-b-2 border-primary/50 pb-2">
            Categories
          </h2>
          <p className="text-muted-foreground">Coming Soon...</p>
        </section>

        {/* Tags Section (Placeholder) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-glow-secondary border-b-2 border-primary/50 pb-2">
            Tags
          </h2>
          <p className="text-muted-foreground">Coming Soon...</p>
        </section>
      </div>
    </div>
  );
};

export default SitemapPage;
