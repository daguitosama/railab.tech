export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            DOMAIN: process.env.DOMAIN,
        },
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    // app: {
    //     head: {
    //         title: "Railab",
    //         meta: [
    //             { charset: "utf-8" },
    //             {
    //                 name: "viewport",
    //                 content: "width=device-width, initial-scale=1",
    //             },
    //             {
    //                 hid: "description",
    //                 name: "description",
    //                 content:
    //                     "Servicio de Reparación de MacBooks, iMacs y Macs. Habana Cuba.",
    //             },
    //             { hid: "og:title", property: "og:title", content: "Railab" },
    //             {
    //                 hid: "og:site_name",
    //                 property: "og:site_name",
    //                 content: "Railab",
    //             },
    //             {
    //                 hid: "og:description",
    //                 property: "og:description",
    //                 content: "Railab",
    //             },
    //             { hid: "og:type", property: "og:type", content: "website" },

    //             {
    //                 hid: "twitter:site",
    //                 name: "twitter:site",
    //                 content: "@RailabMac",
    //             },
    //             {
    //                 hid: "twitter:card",
    //                 name: "twitter:card",
    //                 content: "summary_large_image",
    //             },
    //             {
    //                 hid: "og:image",
    //                 property: "og:image",
    //                 content:
    //                     "https://railab.tech/img/railab-social-image-1500x500.jpg",
    //             },
    //             {
    //                 hid: "og:image:secure_url",
    //                 property: "og:image:secure_url",
    //                 content:
    //                     "https://railab.tech/img/railab-social-image-1500x500.jpg",
    //             },
    //             {
    //                 hid: "og:image:alt",
    //                 property: "og:image:alt",
    //                 content: "Railab",
    //             },
    //             {
    //                 hid: "twitter:image",
    //                 name: "twitter:image",
    //                 content:
    //                     "https://railab.tech/img/railab-social-image-1500x500.jpg",
    //             },
    //         ],
    //         link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    //         script: [
    //             // { src: "/scripts/focus-visible.min.js", async: true, defer: true },
    //             // {
    //             //     src: "https://analitics.bicentenarioquebicentenario.com/js/plausible.js",
    //             //     async: true,
    //             //     defer: true,
    //             //     "data-domain": "railab.tech",
    //             // },
    //         ],
    //         //
    //         bodyAttrs: {
    //             class: [
    //                 "font-sans antialiased bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear ",
    //             ],
    //         },
    //     },
    // },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/css/main.css"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

    // color mode
    colorMode: {
        classSuffix: "",
    },

    // i18n
    i18n: {
        baseUrl: (process.env.NODE_ENV = !"production"
            ? "https://localhost"
            : "https://" + process.env.DOMAIN),
        vueI18n: {
            fallbackLocale: "en",
        },
        defaultLocale: "es",
        detectBrowserLanguage: false,
        seo: false,
        lazy: true,
        langDir: "i18n/",
        locales: [
            {
                code: "en",
                iso: "en-US",
                file: "en-US.json",
                name: "English",
            },
            {
                code: "es",
                iso: "es-ES",
                file: "es-ES.json",
                name: "Español",
            },
        ],
    },
    // sitemap
    // sitemap: {
    //   hostname: "https://railab.tech",
    //   // shortcut notation (basic)
    //   i18n: true,
    //   // nuxt-i18n notation (advanced)
    //   i18n: {
    //     locales: ["en", "es"],
    //     // routesNameSeparator: '___'
    //   },
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    // postcss: {
    //   // Add plugin names as key and arguments as value
    //   // Install them before as dependencies with npm or yarn
    //   plugins: {
    //     "postcss-focus-visible": {},
    //   },
    // },
});
