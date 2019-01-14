import http from '@/utils/http'

export function getReciptList(doctorId, month = 10) {
  return http.get('/wap/getReciptList', {
    params: {
      doctorId,
      month
    }
  })
}

export function getPrescriptionDetailByID(id) {
  return http.get('/wap/getPrescriptionDetailByID', {
    params: {
      id
    }
  })
}

