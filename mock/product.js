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
  }
}

export default {
  '/wap/getProductsListByDoctorId': config => {
    const { doctorId } = config.query
    return productMap[doctorId]
  }

}

