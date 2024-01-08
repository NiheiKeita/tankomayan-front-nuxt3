// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'たんこまやん',
      meta: [
        { hid: 'og:image', property: 'og:image', content: '/images/logo.png' },
      ],
      link: [{ rel: 'icon', href: '/images/icon_web.png' }],
    },
  },
  devtools: { enabled: true },
});
