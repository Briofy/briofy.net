// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morev/vue-transitions/nuxt', '@nuxtjs/i18n',
    [
      "@nuxtjs/i18n",
      {
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
    ],
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

// export default defineNuxtConfig({
//     ssr: true,
//     app: {
//       head: {
//         title: "Bulutly",
//         meta: [
//           { charset: "utf-8" },
//           { name: "viewport", content: "width=device-width, initial-scale=1" },
//           { name: "description", content: "" },
//           { name: "author", content: "" },
//           { name: "og:site_name", content: "" },
//           { name: "og:url", content: "" },
//           { name: "og:title", content: "" },
//           { name: "og:description", content: "" },
//           { name: "og:image", content: "" },
//           { name: "twitter:url", content: "" },
//           { name: "twitter:title", content: "" },
//           { name: "twitter:description", content: "" },
//           { name: "twitter:image", content: "" },
//         ],
//         link: [{ rel: "icon", type: "image/PNG", href: "/logo.png" }],
//         script: [
//           {
//             src: "/js/jquery.min.js",
//           },
//           {
//             src: "/js/jquery.touchSwipe.min.js",
//             async: true,
//           },
//           {
//             src: "/js/bootstrap.min.js",
//           },
//           {
//             src: "/js/template-scripts.js",
//           },
//           {
//             src: "/js/popper.min.js",
//           },

//           {
//             src: "/js/parallax.min.js",
//           },
//           {
//             src: "/js/mailchamp.js",
//           },
//           {
//             src: "/js/bootstrap.offcanvas.min.js",
//           },
//           {
//             src: "/js/particles-code.js",
//           },
//           {
//             src: "/js/particles.js",
//           },
//           {
//             src: "/js/smoothscroll.js",
//           },
//           {
//             src: "/owlcarousel/owl.carousel.min.js",
//           },
//           {
//             src: "/js/flickity.pkgd.min.js",
//           },
//         ],
//       },
//     },

//     modules: ["@pinia/nuxt"],

//     //   app: {
//     //     head: {
//     //       script: [
//     //         {
//     //           src = "/js/jquery.min.js",
//     //         },
//     //         {
//     //           src = "/js/popper.min.js",
//     //         },
//     //         {
//     //           src: "/js/vendors/jquery.magnific-popup.min.js",
//     //         },
//     //         {
//     //           src: "/js/app.js",
//     //         },
//     //       ],
//     //     },
//     //   },
//   });
