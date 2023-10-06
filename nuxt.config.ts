// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/ui",
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
  googleFonts: {
    families: {
      Nunito: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },
});
