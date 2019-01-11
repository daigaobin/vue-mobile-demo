import http from '@/utils/http'

export function login(phone, vcode) {
  const data = {
    phone,
    vcode
  }
  return http.post('/wap/login', data)
}

export function getVcode(phone) {
  return http.get('/wap/getVcode', {
    params: {
      phone
    }
  })
}

export function logout() {
  return http.get('/logout')
}
