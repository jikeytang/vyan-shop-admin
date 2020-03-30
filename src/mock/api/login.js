const userMap = {
  roles: ['admin'],
  token: 'admin',
  introduction: '我是管理员',
  avatar: 'img/avatar.232904c2.png',
  name: 'Admin'
}

export default {
  loginSystemData (config) {
    const { username, password } = JSON.parse(config.body)
    if (username === 'admin' && password === '123456') {
      return userMap
    } else {
      return null
    }
  },
  getUserInfoData (config) {
    return userMap
  },
  logoutData: () => 'success'
}
