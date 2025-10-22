# 🤖 GEMINI.md - AI 駆動開発ガイドライン

このファイルは、AI（Gemini）と共同でこの IT ブログプロジェクトを開発する上でのルールと共通認識を定義するものです。

Gemini に開発を依頼する際は、**必ずこのガイドラインを前提とするよう指示してください。**

## 1. プロジェクト概要

- **目的**: 筆者の備忘録兼ポートフォリオとしての IT ブログ。
- **デザインコンセプト**: **「サイバーパンク感」** と **「テック感」** の共存。ネオンカラー、グリッチエフェクト、独自アニメーションを多用し、デザイン性を最優先する。
- **UI/UX**: Framer Motion による**独自性の高いアニメーション**と**心地よい UX**を追求する。

## 2. 厳守すべき技術スタック (絶対)

生成するコードは、必ず以下の最新スタックに基づいている必要があります。

- **Next.js**: **v15** (App Router)
- **React**: **v19** (Actions, `useFormState`, `use` の活用)
- **Tailwind CSS**: **v4**
- **コンテンツ管理**: **`velite`**
- **テーマ管理**: **`next-themes`**
- **アニメーション**: **`framer-motion`**

## 3. コーディング規約

### 3-1. Tailwind CSS (最重要)

- **`tailwind.config.ts` は存在しません。**
- Tailwind v4 の規約に従い、`tailwind.config.ts` を**作成・参照するコードは禁止**します。
- カスタムテーマ（色、フォントなど）や `darkMode: 'class'` の設定は、すべて **`src/app/global.css`** 内の `@theme` ルールで定義します。

### 3-2. TypeScript と `velite`

- **型安全性の徹底**: `any` 型の使用は原則禁止します。
- **記事データ**: 記事データ（`posts`）や型（`Post`）は、必ず `velite` が自動生成した `.velite` からインポートします。
  - `import { posts, type Post } from '.velite';`
- **MDX**: コンポーネントは `.mdx` ファイルに直接インポートせず、`velite` の `body: s.mdx()` で処理された `body` をレンダリングします。（または MDX コンポーネントを渡す設計にします）

### 3-3. ディレクトリ構造

- **`src` ディレクトリ** を使用します。
- **`posts` ディレクトリ** はプロジェクトルートに配置します。
- **コンポーネントの配置**:
  - `src/components/common/`: 汎用部品 (Button, Icon)
  - `src/components/ui/`: 独自 UI (NeonCard, NeonProgressBar, GlitchText)
  - `src/components/layout/`: Header, Footer, Sidebar
  - `src/components/features/`: 機能単位 (SearchModal, ContactForm, DarkModeToggle)
  - `src/components/pages/`: ページ固有 (AboutMeProfile)

### 3-4. React v19

- **フォーム処理**: お問い合わせフォーム（`ContactForm`）は、**React v19 Server Actions** と **`useFormState`** フックを使用して実装します。
  - `src/app/api/route.ts` を使う従来の方法は採用しません。
  - サーバーアクションは `src/actions/` ディレクトリに配置します。

## 4. AI への指示（プロンプト）のルール

- 依頼時は、この `GEMINI.md` を参照することを明示してください。
- コンポーネント作成を依頼する際は、上記のディレクトリ構造（例: `src/components/ui/NeonCard.tsx`）を指定してください。
- デザインコンセプト（サイバーパンク、ネオン）を頻繁にリマインドし、生成される Tailwind のクラス名に反映させてください。
- 「（例: `text-cyan-400`, `shadow-[0_0_15px_rgba(0,255,255,0.7)]`, `border-cyan-500`）」

## 5. README.md の整備

- 開発の進捗に応じて、`README.md` の更新も依頼します。
- `README.md` には、使用技術、セットアップ方法、機能一覧を必ず含めます。
