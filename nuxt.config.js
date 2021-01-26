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
      apiKey: 'AIzaSyCDGCZ01xUukRzz2MuVwoeUqxwxmABhOXY',
      authDomain: 'blog-nuxt-583bd.firebaseapp.com',
      projectId: 'blog-nuxt-583bd',
      storageBucket: 'blog-nuxt-583bd.appspot.com',
      messagingSenderId: '880496644262',
      appId: '1:880496644262:web:6da96558ce1b49f4c6e467',
    },
    services: {
      auth: true, // Just as example. Can be any other service.
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
