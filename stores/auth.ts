export const useAuthStore = defineStore('auth-store', () => {
  const profile = ref<any>({})
  const isAuthenticated = ref<boolean>(false)

  async function credential() {
    // const nuxtApp = useNuxtApp()
    // const { data, error } = await nuxtApp.runWithContext(() => useHttp('/api/v1/user/me'))
    // if (error.value)
    //   console.log('error -> ', error.value)
    // profile.value = data
    // console.log('data ->', data.value)

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
