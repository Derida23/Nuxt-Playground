import type { Pinia } from 'pinia'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async ({ $pinia }) => {
  if (!process.server) return

  const { credential } = useAuthStore($pinia as Pinia)
  await credential()
})
