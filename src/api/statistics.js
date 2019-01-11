import http from '@/utils/http'

export function getProductsListByDoctorId(doctorId) {
  return http.get('/wap/getProductsListByDoctorId', {
    params: {
      doctorId
    }
  })
}
