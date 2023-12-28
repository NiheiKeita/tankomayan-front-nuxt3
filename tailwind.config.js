/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        ThemaColor: '#ffad5b',
        TexasRose: '#ffad5b',
        ThemaColorComplementary: '#5badff',
        ThemaColorInversion: '#0052a4',
        ThemaColorHover: '#ffcea0',
        BoardBG: '#006633',
        BoardBorder: '#b2771f',
      },
      fontFamily: {
        body: [
          'Hiragino Sans',
          'ヒラギノ角ゴシック',
          'メイリオ',
          'Meiryo',
          'MS Ｐゴシック',
          'MS PGothic',
          'sans-serif',
          'YuGothic',
          'Yu Gothic',
        ],
      },
    },
  },
  plugins: [],
};
