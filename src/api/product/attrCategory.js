import request from '@/utils/request'
export function fetchList (params) {
  return request({
    url: '/productAttribute/category/list',
    method: 'get',
    params: params
  })
}
