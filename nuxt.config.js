module.exports = {
  /*
  ** Set source directory
  */
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Welcome to Nuxt!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // Add apollo module
  modules: [
    '@nuxtjs/apollo',
    ['bootstrap-vue/nuxt', { css: false }]
  ],
  css: [
    '@/assets/scss/core.scss'
  ],
  // Give apollo module options
  apollo: {
    tokenName: 'yourApolloTokenName', // optional, default: apollo-token
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Basic', // optional, default: 'Bearer'
    // required
    clientConfigs: {
      default: {
        // Required
        httpEndpoint: 'https://api.graph.cool/simple/v1/cjieogwn86fci0133arx8n2wb',
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: null, // optional
        // LocalStorage token
        tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        websocketsOnly: false // Optional
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: ['@vue/app']
    }
  }
}
