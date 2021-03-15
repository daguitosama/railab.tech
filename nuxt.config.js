export default {

  target: 'server',
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'railab.etch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
        'bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear'
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // 'nuxt-vite',
    '@nuxt/postcss8',

  ],
  // vite:{
  //   publicDir:'<root>/static'
  // },
  colorMode: {
    classSuffix: ''
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    'nuxt-i18n'
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

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     // lang: 'en'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      'postcss-focus-visible': {},
      '@tailwindcss/jit:':{}
    }
  },

}
