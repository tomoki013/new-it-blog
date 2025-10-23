"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b-2 border-border dark:border-primary">
      <nav className="container flex items-center justify-between h-16 max-w-6xl px-4 mx-auto md:px-6">
        {/* 1. ロゴ（左側） */}
        <Logo />

        {/* 2. PC用ナビゲーション（中央） */}
        <div className="hidden md:flex md:items-center md:gap-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground btn-glow"
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
            className="p-2 md:hidden transition-colors hover:text-primary dark:hover:text-glow-primary btn-glow"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 z-101 w-full h-screen p-4 bg-background md:hidden border-b border-primary dark:border-primary dark:shadow-glow-primary"
          >
            <div className="flex items-center justify-between h-16">
              {/* モバイルメニュー内のロゴ */}
              <Logo onClick={() => setIsMobileMenuOpen(false)} />

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 transition-colors hover:text-primary dark:hover:text-glow-primary btn-glow"
                aria-label="メニューを閉じる"
              >
                <span className="relative z-10">
                  <X size={20} />
                </span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-8 mt-16">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-4xl font-medium transition-colors hover:text-primary dark:hover:text-glow-primary" // text-4xl に
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* モバイルメニュー内のダークモード切替 */}
              <div className="mt-8">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// DarkModeToggle で useTheme を使うため、ファイル全体を "use client" に
// する必要がありますが、Headerコンポーネント自体は "use client" を
// 必要としない部分が多いため、useTheme を使うコンポーネントを
// 外部ファイル (dark-mode-toggle.tsx) に分離するのがベストプラクティスです。
//
// 今回は `test.html` からの移植と btn-glow の適用のために
// DarkModeToggle を Header.tsx 内に再定義しましたが、
// `use client` を Header.tsx の先頭に追加する必要があります。
// （...と、思いましたが `SearchButton` も `use client` (useState) が
// 必要になるため、 `Header.tsx` が `use client` であるのは妥当です）
//
// 追記: DarkModeToggle がマウントされていないと
// "system" テーマの判定ができないため、useState/useEffect を使って
// マウント状態を管理するロジックを追加しました。
