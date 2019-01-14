const userMap = {
  18888888888: {
    msg: '',
    data: {
      token: 'admin',
      introduction: '我是超级管理员',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    },
    code: 200
  },
  error: {
    msg: '手机号或者验证码错误',
    code: 401
  }
}

const vcode = {
  18888888888: {
    msg: '',
    data: {
      vcode: 123456
    },
    code: 200
  }
}

export default {
  '/wap/login': config => {
    const { phone } = config.body
    return userMap[phone] || userMap.error
  },

  '/wap/getVcode': config => {
    const { phone } = config.query
    if (vcode[phone]) {
      return vcode[phone]
    } else {
      return false
    }
  }
}

