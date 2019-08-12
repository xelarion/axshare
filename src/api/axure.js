import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/axure/list',
    method: 'get',
    params
  })
}
