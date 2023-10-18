import API_ENDPOINT from '~/misc/api'
import { formatDate } from '~/utils/format'

const dateCookieFormat = 'EEE, d MMM yyyy HH:mm:ss OOOO'

export function useAuth() {
  const signin = async (payload: any) => {
    const { data } = await useHttp<any>(`${API_ENDPOINT.AUTH.SIGNIN}`, {
      body: payload,
      method: 'POST',
      watch: false,
    })

    if (data.value.status === 'success') {
      const response = data.value.data

      const expires_token = formatDate(response.access_token_expires_at, dateCookieFormat)
      const expires_refresh_token = formatDate(response.refresh_token_expires_at, dateCookieFormat)

      const token = useCookie('token', { expires: new Date(expires_token) })
      const refresh_token = useCookie('refresh_token', { expires: new Date(expires_refresh_token) })

      token.value = data.value.data.access_token
      refresh_token.value = data.value.data.refresh_token
      const router = useRouter()
      router.push('/dashboard')
      return true
    }

    return false
  }

  return { signin }
}
