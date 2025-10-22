import Link from "next/link";

// フッターリンク
const footerLinks = [
  { name: "お問い合わせ // CONTACT", href: "/contact" },
  { name: "プライバシーポリシー // PRIVACY", href: "/privacy" },
  { name: "利用規約 // TERMS", href: "/terms" },
  { name: "サイトマップ // MAP", href: "/sitemap" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-border bg-background dark:border-primary dark:animate-neon-pulse">
      <div className="container flex flex-col items-center justify-between max-w-6xl gap-4 px-4 py-8 mx-auto md:px-6 md:flex-row">
        {/* 1. コピーライト */}
        <div className="text-sm text-muted-foreground dark:text-glow-secondary">
          &copy; {currentYear} ともきちのエンジニア成長記. // ALL RIGHTS
          RESERVED.
        </div>

        {/* 2. 規約系リンク */}
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-x-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm transition-colors text-muted-foreground hover:text-primary dark:hover:text-glow-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
