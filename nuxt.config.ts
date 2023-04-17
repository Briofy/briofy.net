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
      {
        code: "fr",
        iso: 'fr',
        file: "fr.ts",
        dir: "ltr",
      },
      {
        code: "ger",
        iso: 'ger',
        file: "ger.ts",
        dir: "ltr",
      },
      {
        code: "it",
        iso: 'IT',
        file: "it.ts",
        dir: "ltr",
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