import request from '@/utils/request'

export function fetchList (params) {
  return request({
    url: '/common/list',
    method: 'get',
    params: params
  })
}
