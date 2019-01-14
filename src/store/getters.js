const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  errorLogs: state => state.errorLog.logs
}
export default getters
