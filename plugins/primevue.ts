import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";

import Button from "primevue/button";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true, pt: Tailwind });
  nuxtApp.vueApp.component("Button", Button);
});
