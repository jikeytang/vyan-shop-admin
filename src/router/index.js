import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (token) {
    console.log(1)
  } else {
    console.log('no token')
  }

  next()
})

router.afterEach(to => {
})

export default router
