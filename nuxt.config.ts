// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css"
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
  },
  build: {
    transpile: ["primevue"]
  }
})
