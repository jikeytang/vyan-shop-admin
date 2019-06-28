import request from '@/utils/request'

export function fetchList (data) {
  return request({
    method: 'post',
    url: '/product/list',
    data: data
  })
}
