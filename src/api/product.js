import http from '@/utils/http'

export function getProductsListByDoctorId(doctorId) {
  return http.get('/wap/getProductsListByDoctorId', {
    params: {
      doctorId
    }
  })
}

export function getProductsInformation(nameStr) {
  return http.get('/wap/getProductsInformation', {
    params: {
      nameStr
    }
  })
}

export function addProductsByDoctorId(params) {
  return http.post('/wap/addProductsByDoctorId', params)
}

