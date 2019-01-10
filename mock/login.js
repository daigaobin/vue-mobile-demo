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

export default {
  '/wap/login': config => {
    const { phone } = config.body
    return userMap[phone] || userMap.error
  },
  '/logout': 'success',
  '/user/info': config => {
    const { token } = config.query
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  }
}

