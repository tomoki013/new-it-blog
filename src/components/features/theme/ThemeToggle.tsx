"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 transition-colors hover:text-primary"
      aria-label="テーマを切り替える"
    >
      {/* * next-themes はマウントされるまで theme が undefined になる可能性があるため、
       * 明示的に 'dark' かどうかでアイコンを出し分けます。
       */}
      {theme === "dark" ? (
        <Sun size={20} aria-label="ライトモードにする" />
      ) : (
        <Moon size={20} aria-label="ダークモードにする" />
      )}
    </button>
  );
}
