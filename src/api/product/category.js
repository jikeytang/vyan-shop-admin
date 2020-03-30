import request from '@/utils/request'

export function fetchList () {
  return request({
    url: '/productCategory/list/',
    method: 'get'
  })
}

export function createProductCate (data) {
  return request({
    url: '/productCategory/create',
    method: 'post',
    data: data
  })
}

export function getProductCate (data) {
  return request({
    url: '/productCategory/create',
    method: 'post',
    data: data
  })
}

export function updateProductCate (data) {
  return request({
    url: '/productCategory/create',
    method: 'post',
    data: data
  })
}
