import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import ECharts from 'vue-echarts'
import 'moment/locale/zh-cn'
import '@/components'
import '@/plugins/element.js'
import '@/styles/common.scss'
import '@/assets/fontawesome/css/font-awesome.min.css'
import './mock'

Vue.component('v-chart', ECharts)

Vue.use(VueAxios, axios)

moment.locale('zh-cn')

Vue.config.productionTip = false

const routes = router.options.routes

new Vue({
  router,
  store,
  watch: {
    // 刷新之后根据此路由进入
    '$route.matched' (val) {
      if (val[0].path.includes('login')) {
        return
      }

      const side = routes.filter(menu => {
        if (val[0].redirect && (menu.redirect === val[0].redirect)) {
          return menu
        } else if (menu.path === val[0].path) {
          return menu
        }
      })

      this.$store.commit('nav/setSideBar', side.length > 0 ? side[0].children.filter(m => !m.hidden) : routes[0])
    }
  },
  created () {
    const pageRoutes = []

    routes.map(r => {
      if (r.children && !r.hidden) {
        r.children = r.children.filter(m => !m.hidden)
        pageRoutes.push(r)
      } else if (!r.hidden) {
        pageRoutes.push(r)
      }
    })

    this.$store.commit('nav/setHeaderNav', pageRoutes)
  },
  render: h => h(App)
}).$mount('#app')
