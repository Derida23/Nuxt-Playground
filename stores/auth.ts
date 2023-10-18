export const useAuthStore = defineStore('auth-store', () => {
  const profile = ref<any>({})
  const isAuthenticated = ref<boolean>(false)

  async function credential() {
    try {
      const _fetch = useRequestFetch()
      const _data = await _fetch<any>('/api/v1/user/me', { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
      profile.value = _data.data
      isAuthenticated.value = true
      return true
    }
    catch {
      isAuthenticated.value = false
      return false
    }
  }

  return { profile, credential, isAuthenticated }
})
