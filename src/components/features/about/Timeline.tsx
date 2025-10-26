"use client";

import { motion } from "framer-motion";

const ITJourneys = [
  {
    date: "2024年5月",
    title: "プログラミング学習を開始（HTML,CSS,JavaScript,Python）",
    category: "学習",
  },
  {
    date: "2024年7月",
    title: "HTML,CSS,JavaScriptを使った簡単な自己紹介サイトを作成",
    category: "開発",
  },
  {
    date: "2024年8月",
    title: "HTML,CSS,JavaScriptを使ったブログサイトの開発開始",
    category: "開発",
  },
  {
    date: "2024年11月",
    title: "Next.jsとTypeScriptを学習開始",
    category: "学習",
  },
  {
    date: "2024年11月",
    title: "ブログサイトの開発をNext.jsに移行",
    category: "開発",
  },
  {
    date: "2025年1月",
    title: "ブログ「ともきちの旅行日記」開設",
    category: "リリース",
  },
  {
    date: "2025年5月",
    title: "金融学習サイト「マネーマスター」開設",
    category: "リリース",
  },
  {
    date: "2025年7月",
    title: "ルーレットサイト「Webでルーレット」開設",
    category: "リリース",
  },
  {
    date: "2025年10月",
    title: "AIトラベルプランナー開発開始",
    category: "開発",
  },
  {
    date: "2025年10月",
    title: "Tomokichi Official Websiteを開設",
    category: "リリース",
  },
];


const getCategoryStyle = (category: string) => {
  switch (category) {
    case "学習":
      return "bg-blue-500/20 border-blue-500/80 text-blue-300";
    case "開発":
      return "bg-green-500/20 border-green-500/80 text-green-300";
    case "リリース":
      return "bg-purple-500/20 border-purple-500/80 text-purple-300";
    default:
      return "bg-gray-500/20 border-gray-500/80 text-gray-300";
  }
};

export const Timeline = () => {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-16 dark:text-glow-secondary animate-neon-pulse">JOURNEY</h2>
      <div className="relative border-l-2 border-primary/50 ml-4 md:ml-0">
        {ITJourneys.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 pl-10 md:pl-16 relative before:absolute before:left-[-11px] before:top-2 before:w-5 before:h-5 before:bg-primary before:rounded-full before:border-4 before:border-background"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryStyle(item.category)}`}>
                {item.category}
              </span>
              <time className="text-sm font-semibold text-muted-foreground">{item.date}</time>
            </div>
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
