// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    // viewer: false,
    exposeConfig: true,
    injectPosition: 'last',
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
  },
})
