import { CSRF_CONFIG, SECURITY_CONFIG } from './constants/security'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  veeValidate: { autoImports: true },
  routeRules: { '/': { redirect: '/account/login' } },
  csurf: CSRF_CONFIG,
  security: SECURITY_CONFIG,
  runtimeConfig: {
    // eslint-disable-next-line node/prefer-global/process
    apiUrl: process.env.NUXT_API_URL,
    public: {
      siteTitle: 'TourID',
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-security',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',

  ],
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  googleFonts: {
    families: {
      Nunito: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
  colorMode: {
    preference: 'light', // disable dark mode
  },
  imports: {
    dirs: ['stores', 'composables/api'],
  },
})
