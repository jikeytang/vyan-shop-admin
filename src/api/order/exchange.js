import request from '@/utils/request'

export function fetchList (params) {
  return request({
    url: '/order/exchange',
    method: 'get',
    params: params
  })
}
