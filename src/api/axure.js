import request from '@/utils/request'

export function getList(axure_group_id) {
  return request({
    url: `/axure_groups/${axure_group_id}/axures`,
    method: 'get'
  })
}

export function getAxure(axure_group_id, axure_id) {
  return request({
    url: `/axure_groups/${axure_group_id}/axure/${axure_id}`,
    method: 'get'
  })
}
