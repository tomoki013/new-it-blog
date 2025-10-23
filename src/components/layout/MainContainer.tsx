"use client";

import { motion } from "framer-motion";

type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8 pt-16">
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary"
        style={{ filter: "blur(16px)", zIndex: -1 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      />
      <div className="relative z-10 border-2 border-primary/20 bg-background/80 backdrop-blur-sm p-6">
        {children}
      </div>
    </div>
  );
}
