const pre = '/system/'

export default [
  {
    path: `${pre}index`,
    name: 'product',
    title: '系统设置',
    component: () => import('@/views/system'),
    meta: { icon: 'system-list' }
  },
  {
    path: `${pre}cache`,
    name: 'addProduct',
    title: '清理缓存',
    component: () => import('@/views/system/cache'),
    meta: { icon: 'system-cache' }
  },
  {
    path: `${pre}bak`,
    name: 'systemBak',
    title: '数据备份',
    component: () => import('@/views/system/bak'),
    meta: { icon: 'bak' }
  },
  {
    path: `${pre}restore`,
    name: 'systemRestore',
    title: '数据还原',
    component: () => import('@/views/system/restore'),
    meta: { icon: 'system-restore' }
  }
]
