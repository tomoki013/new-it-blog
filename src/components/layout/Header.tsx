"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../ui/Logo";
import { SearchButton } from "../features/search/SearchButton";
import { ThemeToggle } from "../features/theme/ThemeToggle";

// (DarkModeToggle と SearchButton のインポートは不要になりました)
// (btn-glow を適用するため、ローカルでボタンを再定義します)

// ナビゲーションリンク
const navItems = [
  { name: "トップ //", href: "/" },
  { name: "アバウト //", href: "/about" },
  { name: "カテゴリ //", href: "/categories" },
  { name: "タグ //", href: "/tags" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full backdrop-blur-md border-b-2 border-border dark:border-primary transition-colors duration-300 ${
        isScrolled ? "bg-background/50" : "bg-background/90"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 max-w-6xl px-4 mx-auto md:px-6">
        {/* 1. ロゴ（左側） */}
        <Logo />

        {/* 2. PC用ナビゲーション（中央） */}
        <div className="hidden md:flex md:items-center md:gap-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground btn-glow overflow-hidden"
            >
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* 3. アクションボタン（右側） */}
        <div className="flex items-center gap-x-2">
          {/* 3a. 検索 (btn-glow) */}
          <SearchButton />

          {/* 3b. ダークモード (btn-glow) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* 3c. ハンバーガー (btn-glow) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 md:hidden transition-colors hover:text-primary dark:hover:text-glow-primary btn-glow overflow-hidden"
            aria-label="メニューを開く"
          >
            <span className="relative z-10">
              <Menu size={20} />
            </span>
          </button>
        </div>
      </nav>

      {/* 4. モバイル用メニュー (モーダル) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100vh", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: "-100vh", filter: "blur(10px)" }}
            transition={{ duration: 0.5, type: "spring", stiffness: 50, damping: 15 }}
            className="absolute top-0 left-0 z-101 w-full h-screen p-4 bg-background/80 backdrop-blur-xl md:hidden border-b-2 border-primary shadow-glow-primary"
          >
            <div className="flex items-center justify-between h-16">
              <Logo onClick={() => setIsMobileMenuOpen(false)} />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 transition-colors hover:text-primary dark:hover:text-glow-primary btn-glow overflow-hidden"
                aria-label="メニューを閉じる"
              >
                <span className="relative z-10">
                  <X size={20} className="glitch-effect" data-text="X" />
                </span>
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-col"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-x-4 px-4 py-4 text-2xl font-semibold transition-colors hover:bg-primary/10 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
