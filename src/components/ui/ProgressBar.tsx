"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-primary origin-left z-50"
      style={{
        scaleX,
        boxShadow: `0 0 5px oklch(var(--primary)),
                    0 0 10px oklch(var(--primary)),
                    0 0 20px oklch(var(--primary)),
                    0 0 30px oklch(var(--primary-foreground))`
      }}
    />
  );
}
