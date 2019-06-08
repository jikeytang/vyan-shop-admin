const pre = '/common/'

export default [
  {
    path: `${pre}index`,
    name: 'product',
    title: '友情链接',
    component: () => import('@/views/common/index'),
    meta: { icon: 'product-list' }
  },
  {
    path: `${pre}adv`,
    name: 'adv',
    title: '广告管理',
    component: () => import('@/views/common/adv'),
    meta: { icon: 'product-add' }
  }
]
