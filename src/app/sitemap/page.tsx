import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

const SitemapPage = () => {
  const allPosts = getSortedPostsData();

  const staticPages = [
    { name: "Top", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
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
                <Link
                  href={page.href}
                  className="text-lg text-foreground hover:text-primary link-hover-effect"
                >
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
          <ul className="space-y-4">
            {allPosts.map(({ slug, title, date }) => (
              <li key={slug} className="border-b border-border/30 pb-2">
                <Link
                  href={`/blog/${slug}`}
                  className="flex justify-between items-center text-lg text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {title}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {date.toLocaleString()}
                  </span>{" "}
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
