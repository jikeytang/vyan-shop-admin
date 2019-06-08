const pre = '/index/'

export default [
  {
    path: `${pre}dashboard`,
    // path: `/index/dashboard`,
    name: 'dashboard',
    title: '公告板',
    component: () => import('@/views/dashboard/index'),
    meta: { title: 'Dashboard', icon: 'dashboard', affix: true },
    icon: 'home'
  },
  {
    path: `/test`,
    name: 'test',
    title: '测试菜单',
    component: () => import('@/views/other/test'),
    meta: { title: 'test', icon: 'test', affix: true },
    icon: 'home'
  }
]
