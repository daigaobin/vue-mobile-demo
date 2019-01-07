const userMap = {
  admin: {
    data: {
      roles: ['admin'],
      token: 'admin',
      introduction: '我是超级管理员',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin',
    },
    status: 200
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  error: {
    data: {
      message: '手机号或者验证码错误'
    },
    status: 400
  }
}

export default {
  '/login': config => {
    const { username } = config.body
    return userMap[username] || userMap.error
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

