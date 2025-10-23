import Link from "next/link";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="
        text-lg font-bold transition-colors 
        text-foreground 
        dark:text-primary 
        relative block w-fit
        dark:animate-neon-pulse
      "
      onClick={onClick}
    >
      {/* グリッチレイヤー 1 (色収差/ズレ) */}
      <span
        aria-hidden="true"
        className="
          absolute top-0 left-0 w-full h-full
          text-secondary dark:text-glow-secondary 
          animate-glitch-translate 
          opacity-80 mix-blend-screen
          dark:opacity-100
        "
      >
        ともきちのエンジニア成長記
      </span>
      {/* グリッチレイヤー 2 (スキュー) */}
      <span
        aria-hidden="true"
        className="
          absolute top-0 left-0 w-full h-full
          text-primary dark:text-glow-primary 
          animate-glitch-skew 
          opacity-80 mix-blend-screen
          dark:opacity-100
        "
      >
        ともきちのエンジニア成長記
      </span>
      {/* 本体のテキスト */}
      <span className="relative">ともきちのエンジニア成長記</span>
    </Link>
  );
}
