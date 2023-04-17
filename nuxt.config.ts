// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morev/vue-transitions/nuxt', '@nuxtjs/i18n', "@nuxtjs/i18n"],
  i18n: {
    strategy: "prefix",
    lazy: true,
    defaultLocale: "en",
    langDir: "./locales/",
    locales: [
      {
        code: "en",
        iso: 'en-US',
        file: "en.ts",
        dir: "ltr",
      },
      {
        code: "fa",
        iso: 'fa-IR',
        file: "fa.ts",
        dir: "rtl",
      },
    ],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});