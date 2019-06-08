const pre = '/user/'

export default [
  {
    path: `${pre}index`,
    name: 'user',
    title: '用户设置',
    component: () => import('@/views/user'),
    meta: { icon: 'user-list' }
  },
  {
    path: `${pre}update`,
    name: 'update',
    title: '修改密码',
    component: () => import('@/views/user/update'),
    meta: { icon: 'update-list' }
  }
]
