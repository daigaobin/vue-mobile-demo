const productMap = {
  18888888888: {
    msg: '',
    data: [
      {
        'productCode': '1',
        'status': 2,
        'commerceName': '葡萄糖0',
        'manufacturer': '江西制药',
        'specifications': '10ml/支'
      },
      {
        'productCode': '2',
        'status': 2,
        'commerceName': '葡萄糖0',
        'manufacturer': '江西制药',
        'specifications': '10ml/支'
      }
    ],
    code: 200
  },

  '葡萄糖': {
    msg: '',
    data: [
      {
        'productCode': '001',
        'commercename': '葡萄糖口服液',
        'commomname': '葡萄糖',
        'manufacturer': '正大天晴',
        'specifications': '50ml',
        'protype': 1,
        'usege': '口服'
      }
    ],
    code: 200
  },

  empty: {
    msg: '',
    data: [],
    code: 200
  },

  success: {
    msg: '',
    data: 1,
    code: 200
  }

}

export default {
  '/wap/getProductsListByDoctorId': config => {
    const { doctorId } = config.query
    return productMap[doctorId] || productMap['empty']
  },

  '/wap/getProductsInformation': config => {
    const { nameStr } = config.query
    return productMap[nameStr] || productMap['empty']
  },

  '/wap/addProductsByDoctorId': config => {
    const { doctorId } = config.body
    console.log(doctorId)
    console.log(config.body)
    productMap[doctorId].data.push(config.body)
    return productMap['success']
  }

}

