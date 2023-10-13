import type { Pinia } from 'pinia'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async ({ $pinia }) => {
  const { credential } = useAuthStore($pinia as Pinia)
  await credential()
})
