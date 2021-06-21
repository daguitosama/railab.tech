export default {

  target: 'server',
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Railab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Servicio de Reparación de Macbooks, iMacs y Macs. Habana Cuba.' },
      { hid: 'og:title', property: 'og:title', content: 'Railab' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Railab' },
      { hid: 'og:description', property: 'og:description', content: 'Railab' },
      { hid: 'og:type', property: 'og:type', content: 'website' },

      { hid: 'twitter:site', name: 'twitter:site', content: '@RailabMac' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://railab.tech/img/railab-social-image-1500x500.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://railab.tech/img/railab-social-image-1500x500.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Railab'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://railab.tech/img/railab-social-image-1500x500.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/scripts/focus-visible.min.js', async: true, defer: true }
    ],
    // 
    bodyAttrs: {
      class: [
        "font-sans antialiased bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear ",
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/api.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: ''
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxt/http',
    '@nuxtjs/sitemap',
  ],
  // i18n
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.js',
        name: 'Español',
      }
    ],
    vueI18n: {
      fallbackLocale: 'en'
    },
    defaultLocale: 'es',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/'
  },
  // sitemap
  sitemap: {
    hostname: 'https://railab.tech',
    // shortcut notation (basic)
    i18n: true,
    // nuxt-i18n notation (advanced)
    i18n: {
      locales: ['en', 'es'],
      // routesNameSeparator: '___'
    }
  },

  // http
  http: {
    // proxyHeaders: false
    clientTimeout: 10e4,
    browserBaseURL: process.env.NODE_ENV === "development" ? `http://localhost` : 'https://railab.tech'
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      'postcss-focus-visible': {},
    }
  },


}
