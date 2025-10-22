import type { Metadata } from "next";
// 1. Google Fonts から 'Share_Tech_Mono' をインポート
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainContainer } from "@/components/layout/MainContainer";
import { ProgressBar } from "@/components/ui/ProgressBar";

// 2. フォントを設定 (Inter は削除)
const techMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "あなたのITブログ名",
  description: "技術の備忘録とポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {/* 3. <body> に 'Share_Tech_Mono' のクラスを適用 (font-mono も Tailwind で使えるように) */}
      <body className={techMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // OS設定に合わせる
          enableSystem
          disableTransitionOnChange
        >
          <ProgressBar />
          <div className="flex flex-col min-h-screen scanlines-overlay noise-overlay">
            <Header />
            <main className="flex-1 text-sm md:text-base">
              <MainContainer>{children}</MainContainer>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
