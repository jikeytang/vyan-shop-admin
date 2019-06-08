const pre = '/order/'

export default [
  {
    path: `${pre}index`,
    name: 'orderList',
    title: '订单列表',
    component: () => import('@/views/order/index'),
    meta: { icon: 'product-list' }
  },
  {
    path: `${pre}setting`,
    name: 'orderSetting',
    title: '订单设置',
    component: () => import('@/views/order/setting'),
    meta: { icon: 'product-list' }
  },
  {
    path: `${pre}exchange`,
    name: 'handleExchange',
    title: '退货处理',
    component: () => import('@/views/order/exchange'),
    meta: { icon: 'product-list' }
  }
]
