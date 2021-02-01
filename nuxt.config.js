export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog-Nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  /**
   * Router settings
   */
  router: {
    middleware: ['authenticated'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'bootstrap-vue/nuxt',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyDo4nNLlEYAdXMq_jWiahFONklMEJz0kyk',
      authDomain: 'nuxt-blog-8a30c.firebaseapp.com',
      databaseURL: 'https://nuxt-blog-8a30c-default-rtdb.firebaseio.com',
      projectId: 'nuxt-blog-8a30c',
      storageBucket: 'nuxt-blog-8a30c.appspot.com',
      messagingSenderId: '394070586231',
      appId: '1:394070586231:web:ed0071dc9c7840f508a772',
    },
    services: {
      auth: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/firebase'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
