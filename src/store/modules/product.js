import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { USER_LOGIN, USRE_LOGOUT } from '@/store/modules/mutationType'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    },
    userInfo: null,
    lastLoginTime: ''
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_LAST_LOGIN_TIME(state, lastLoginTime) {
      state.lastLoginTime = lastLoginTime
    }
  },

  actions: {
    /**
     * 用户登录
     * @param {*} param0
     * @param {*} userInfo
     */
    async [USER_LOGIN]({ commit }, userInfo) {
      const phone = userInfo.phone.trim()
      return new Promise((resolve, reject) => {
        login(phone, userInfo.vcode).then((resp) => {
          if (resp.data && resp.data.code === 200) {
            commit('SET_TOKEN', resp.data.data.token)
            setToken(resp.data.data.token)
            resolve(resp)
          } else {
            reject(resp)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    /**
     * 用户登出
     * @param {*} param0
     */
    async [USRE_LOGOUT]({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
