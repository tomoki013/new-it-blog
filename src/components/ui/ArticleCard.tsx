"use client";

import Link from "next/link";
import { type Post } from "@/types/types";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type ArticleCardProps = {
  post: Post;
};

// Framer Motion Variants
const cardVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0px 0px 0px oklch(var(--primary) / 0)",
    borderColor: "oklch(var(--border))",
  },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: "0 0 30px oklch(var(--primary) / 0.7)",
    borderColor: "oklch(var(--primary))",
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 20,
    },
  },
};

const glowVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const titleVariants: Variants = {
  rest: { color: "oklch(var(--foreground))" },
  hover: {
    color: "oklch(var(--primary))",
    textShadow: "0 0 12px oklch(var(--primary) / 0.8)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const readMoreVariants: Variants = {
  rest: { opacity: 0, x: -10 },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
};

const arrowVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
};

export function ArticleCard({ post }: ArticleCardProps) {
  // 日付のフォーマット
  const formattedDate = new Date(post.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      className="relative w-full overflow-hidden border-2 bg-card p-1"
    >
      {/* 1. ホバー時の回転するグローボーダー */}
      <motion.div
        variants={glowVariants}
        className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary"
        style={{ filter: "blur(12px)" }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
      />

      {/* 2. コンテンツラッパー */}
      <div className="relative z-10 flex h-full flex-col border border-border bg-card p-5">
        <div className="relative z-10 flex flex-grow flex-col">
          {/* 日付とカテゴリ */}
          <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <time dateTime={post.date} className="dark:text-glow-secondary">
                {formattedDate}
              </time>
            </div>
            {post.category && (
              <div className="flex items-center gap-1.5">
                <Tag size={14} />
                <span className="dark:text-glow-secondary">
                  {post.category}
                </span>
              </div>
            )}
          </div>

          {/* タイトル */}
          <motion.h2
            variants={titleVariants}
            className="relative mb-3 text-3xl font-bold"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              {post.title}
            </Link>
          </motion.h2>

          {/* 概要 */}
          {post.description && (
            <p className="mb-4 flex-grow text-sm text-muted-foreground line-clamp-3">
              {post.description}
            </p>
          )}

          {/* タグ */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-muted text-muted-foreground border border-border dark:border-primary dark:text-glow-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 続きを読む */}
          <motion.div
            variants={readMoreVariants}
            className="mt-auto"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-base font-semibold text-primary dark:text-glow-primary"
            >
              Read More // ACCESS
              <motion.div variants={arrowVariants}>
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
