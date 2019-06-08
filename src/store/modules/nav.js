// 设置文件
import App from '@/config/app'

export default {
  namespaced: true,
  state: {
    // 顶栏菜单
    header: [],
    // 侧栏菜单
    sideBar: [],
    // 侧边栏收缩
    sideBarCollapse: App.sideBar.sideBarCollapse
  },
  actions: {
  },
  mutations: {
    setHeaderNav (state, nav) {
      state.header = nav
    },
    setSideBar (state, menu) {
      state.sideBar = menu
    }
  }
}
