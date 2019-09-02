import request from '@/utils/request'

export function getList() {
  return request({
    url: '/axure_groups',
    method: 'get'
  })
}
