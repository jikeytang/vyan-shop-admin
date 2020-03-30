import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { getToken } from '@/utils/auth'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes
})

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const token = getToken()

  if (token) {
    store.dispatch('user/getUserInfo')
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }

  next()
})

router.afterEach(to => {
})

export default router
