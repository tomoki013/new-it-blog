"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
            <motion.div
              key={link.name}
              className="relative"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <Link
                href={link.href}
                className="relative z-10 block px-3 py-2 text-sm transition-colors text-muted-foreground hover:text-primary dark:hover:text-glow-primary"
              >
                {link.name}
              </Link>
              <motion.div
                variants={{
                  rest: { scale: 0, opacity: 0 },
                  hover: { scale: 1, opacity: 1 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 20,
                }}
                className="absolute inset-0 z-0 border-2 border-primary bg-primary/10 dark:shadow-glow-primary"
                style={{ borderRadius: "8px" }}
              />
            </motion.div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
