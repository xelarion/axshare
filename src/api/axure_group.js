import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/axure_groups/list',
    method: 'get',
    params
  })
}
