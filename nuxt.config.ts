// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    public: {
      siteTitle: "TourID",
    },
  },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/ui",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          FieldArray: "VeeFieldArray",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
  ],
  routeRules: { '/': { redirect: '/account/login' } },
  googleFonts: {
    families: {
      Nunito: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },
  typescript: {
    strict: true,
  },
});
