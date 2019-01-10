import http from '@/utils/http'

export function login(phone, vcode) {
  const data = {
    phone,
    vcode
  }
  return http.post('/wap/login', data)
}

export function getUserInfo() {
  return http.get('/home/user', {
    params: {
      app_type: 1,
      game_id: 246,
      platform_id: 2,
      company_id: 1
    }
  })
}

export function logout() {
  return http.get('/logout')
}
