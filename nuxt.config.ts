import { CSRF_CONFIG, SECURITY_CONFIG } from './constants/security'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    // eslint-disable-next-line node/prefer-global/process
    apiUrl: process.env.NUXT_API_URL,
    public: {
      siteTitle: 'TourID',
    },
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-security',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',

  ],
  postcss: {
    plugins: {
      'postcss-hexrgba': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'postcss-lighten-darken': {},
      'autoprefixer': {},
    },
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  googleFonts: {
    families: {
      Nunito: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  },
  colorMode: {
    preference: 'light', // disable dark mode
  },
  imports: {
    dirs: ['stores', 'composables/api'],
  },
  veeValidate: { autoImports: true },
  routeRules: { '/': { redirect: '/account/login' } },
  csurf: CSRF_CONFIG,
  security: SECURITY_CONFIG,
  css: ['~/assets/css/main.css'],
})
