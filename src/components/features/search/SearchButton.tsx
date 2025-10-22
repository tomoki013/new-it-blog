"use client";

import { Search } from "lucide-react";

export function SearchButton() {
  const openSearchModal = () => {
    // TODO: 内部設計書に基づき、検索モーダルを開くロジックを実装
    alert("検索モーダルを開く");
  };

  return (
    <button
      onClick={openSearchModal}
      className="p-2 transition-colors hover:text-primary"
      aria-label="検索"
    >
      <Search size={20} />
    </button>
  );
}
