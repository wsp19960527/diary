// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true,
    vscode: {
      enabled: true
    } 
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  }
})
