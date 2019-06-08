import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'

const user = {
  namespaced: true,
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_NAME (state, name) {
      state.name = name
    },
    SET_AVATAR (state, avatar) {
      state.avatar = avatar
    },
    SET_IS_LOGINED (state, logined) {
      state.isLogined = logined
    }
  },

  actions: {
    login ({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    getUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          if (!response.data) {
            reject(new Error('error'))
          }
          const data = response.data

          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          localStorage.removeItem('token')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }

  }
}

export default user
