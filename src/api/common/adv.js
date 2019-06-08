import request from '@/utils/request'

export function fetchList (params) {
  return request({
    url: '/common/adv',
    method: 'get',
    params: params
  })
}
