// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@morev/vue-transitions/nuxt", "@nuxtjs/i18n", "@nuxtjs/i18n"],
  i18n: {
    strategy: "prefix",
    lazy: true,
    defaultLocale: "en",
    langDir: "./locales/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        dir: "ltr",
      },
      {
        code: "fa",
        iso: "fa-IR",
        file: "fa.json",
        dir: "rtl",
      },
      {
        code: "fr",
        iso: "fr",
        file: "fr.json",
        dir: "ltr",
      },
      {
        code: "de",
        iso: "de",
        file: "de.json",
        dir: "ltr",
      },
      {
        code: "it",
        iso: "IT",
        file: "it.json",
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
