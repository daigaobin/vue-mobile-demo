const prescriptionMap = {
  18888888888: {
    msg: '',
    'data': [
      {
        'date': '2019-01-01',
        'list': [
          {
            id: 1,
            'preCode': '001',
            'patientName': '张三',
            'diagnosis': '上呼吸道感染',
            'seedate': '2019-01-01 08:02:22'
          },
          {
            id: 2,
            'preCode': '002',
            'patientName': '张三',
            'diagnosis': '上呼吸道感染',
            'seedate': '2019-01-01 08:02:22'
          }
        ]
      },
      {
        'date': '2019-01-02',
        'list': [
          {
            id: 3,
            'preCode': '001',
            'patientName': '张三',
            'diagnosis': '上呼吸道感染',
            'seedate': '2019-01-01 08:02:22'
          }
        ]
      }
    ],
    code: 200
  }
}

const prescriptionDetailMap = {
  1: {
    msg: '',
    'data': {
      'proCode': '60198752804',
      'name': '李杰',
      'age': 24,
      'sex': '男',
      'department': '心内科',
      'allergichistory': '无',
      'seedate': '2018-09-23',
      'chiefcomplaint': '腹痛，腹泻，里急后重感',
      'diagnosis': '综合分析患者各种情况能手术最好手术治疗, 如果实在不能承受的话治疗方法',
      'list': [
        {
          'productsName': '复方氨基酸口服液30ml*20瓶'
        },
        {
          'productsName': '急支糖浆口服液30ml*20瓶'
        },
        {
          'productsName': '安神补脑液30ml*20瓶'
        }
      ],
      'pharmacist': '研生堂大药房，虹口路分店',
      'pharmacy': '王笑笑'
    },
    code: 200
  },
  2: {
    msg: '',
    'data': {
      'proCode': '60198752804',
      'name': '李杰',
      'age': 24,
      'sex': '男',
      'department': '心内科',
      'allergichistory': '无',
      'seedate': '2018-09-23',
      'chiefcomplaint': '腹痛，腹泻，里急后重感',
      'diagnosis': '综合分析患者各种情况能手术最好手术治疗, 如果实在不能承受的话治疗方法',
      'list': [
        {
          'productsName': '复方氨基酸口服液30ml*20瓶'
        },
        {
          'productsName': '急支糖浆口服液30ml*20瓶'
        },
        {
          'productsName': '安神补脑液30ml*20瓶'
        }
      ],
      'pharmacist': '研生堂大药房，虹口路分店',
      'pharmacy': '王笑笑'
    },
    code: 200
  },
  3: {
    msg: '',
    'data': {
      'proCode': '60198752804',
      'name': '李杰',
      'age': 24,
      'sex': '男',
      'department': '心内科',
      'allergichistory': '无',
      'seedate': '2018-09-23',
      'chiefcomplaint': '腹痛，腹泻，里急后重感',
      'diagnosis': '综合分析患者各种情况能手术最好手术治疗, 如果实在不能承受的话治疗方法',
      'list': [
        {
          'productsName': '复方氨基酸口服液30ml*20瓶'
        },
        {
          'productsName': '急支糖浆口服液30ml*20瓶'
        },
        {
          'productsName': '安神补脑液30ml*20瓶'
        }
      ],
      'pharmacist': '研生堂大药房，虹口路分店',
      'pharmacy': '王笑笑'
    },
    code: 200
  }
}

export default {
  '/wap/getReciptList': config => {
    const { doctorId } = config.query
    return prescriptionMap[doctorId]
  },

  '/wap/getPrescriptionDetailByID': config => {
    const { id } = config.query
    return prescriptionDetailMap[id]
  }

}

