import Vue from 'vue'
import VueApollo from 'vue-apollo'
import 'isomorphic-fetch'
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client'
import jsCookie from 'js-cookie'
import cookie from 'cookie'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)

export default (ctx, inject) => {
  const providerOptions = { clients: {} }
  const { app, beforeNuxtRender, req } = ctx
  const AUTH_TOKEN = 'apollo-token'
  const AUTH_TYPE = 'Basic '

  // Config
  
      // Create apollo client
      const currentOptions = {
  "httpEndpoint": "https://api.graph.cool/simple/v1/cjieogwn86fci0133arx8n2wb",
  "wsEndpoint": null,
  "tokenName": "apollo-token",
  "persisting": false,
  "websocketsOnly": false
}
      const tokenName = currentOptions.tokenName || AUTH_TOKEN
      const getAuth = typeof currentOptions.getAuth === 'function' ? currentOptions.getAuth : () => {
          let token
          if(process.server){
              const cookies = cookie.parse(req.headers.cookie || '')
              token = cookies[tokenName]
          } else {
            token = jsCookie.get(tokenName)
          }
          return token ? AUTH_TYPE + token : ''
      }
      const options = Object.assign({}, currentOptions, {
        ssr: !!process.server,
        tokenName,
        getAuth
      })
      const cache = currentOptions.cache || new InMemoryCache()
      if(!process.server) {
        cache.restore(window.__NUXT__ ? window.__NUXT__.apollo.defaultClient : null)
      }
      options.cache = cache
      const {apolloClient, wsClient} = createApolloClient(options)
      apolloClient.wsClient = wsClient
      
          providerOptions.defaultClient = apolloClient
      
  
  const vueApolloOptions = Object.assign(providerOptions, {
      errorHandler (error) {
         console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
      },
  })
  const apolloProvider = new VueApollo(vueApolloOptions)
  // Allow access to the provider in the context
  app.apolloProvider = apolloProvider
  // Install the provider into the app
  app.provide = apolloProvider.provide()

  if (process.server) {
    beforeNuxtRender(async ({ Components, nuxtState }) => {
      Components.forEach((Component) => {
        // Fix https://github.com/nuxt-community/apollo-module/issues/19
        if (Component.options && Component.options.apollo && Component.options.apollo.$init) {
          delete Component.options.apollo.$init
        }
      })
      await apolloProvider.prefetchAll(ctx, Components)
      nuxtState.apollo = apolloProvider.getStates()
    })
  }

  inject('apolloHelpers', {
    onLogin: async (token, apolloClient = apolloProvider.defaultClient) => {
      if (token) {
        jsCookie.set(AUTH_TOKEN, token)
      } else {
        jsCookie.remove(AUTH_TOKEN)
      }
      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
      try {
        await apolloClient.resetStore()
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('%cError on cache reset (setToken)', 'color: orange;', e.message)
      }
    },
    onLogout: async (apolloClient = apolloProvider.defaultClient) => {
        jsCookie.remove(AUTH_TOKEN)
        if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
        try {
            await apolloClient.resetStore()
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
        }
    },
    getToken: (tokenName = AUTH_TOKEN) => {
        if(process.server){
            const cookies = cookie.parse(req.headers.cookie || '')
            return cookies && cookies[tokenName]
        }
        return jsCookie.get(tokenName)
    }
  })
}
