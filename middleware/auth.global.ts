import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuthenticated } = useAuthStore()

  if (to.fullPath.startsWith('/account') && isAuthenticated)
    return await navigateTo('/dashboard')

  if (!to.fullPath.startsWith('/account') && !isAuthenticated)
    return await navigateTo('/account/login')
})
