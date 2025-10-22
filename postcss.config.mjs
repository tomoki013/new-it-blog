/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // エラーメッセージが要求している正しいプラグイン
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
