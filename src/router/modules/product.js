const pre = '/product/'

export default [
  {
    path: `${pre}index`,
    name: 'product',
    title: '商品列表',
    component: () => import('@/views/product'),
    meta: { icon: 'product-list' }
  },
  {
    path: `${pre}add`,
    name: 'addProduct',
    title: '添加商品',
    component: () => import('@/views/product/add'),
    meta: { icon: 'product-add' }
  },
  {
    path: `${pre}category`,
    name: 'productCategory',
    title: '商品分类',
    component: () => import('@/views/product/category'),
    meta: { icon: 'product-category' }
  },
  {
    path: `${pre}category/add`,
    name: 'productCategoryAdd',
    title: '添加商品分类',
    component: () => import('@/views/product/category/add'),
    meta: { icon: 'product-category-add' }
  }
]
