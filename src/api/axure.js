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

export function createAxure(axure_group_id, data) {
  return request({
    url: `/axure_groups/${axure_group_id}/axures`,
    method: 'post',
    data
  })
}

export function updateAxure(axure_group_id, axure_id, data) {
  return request({
    url: `/axure_groups/${axure_group_id}/axure/${axure_id}`,
    method: 'put',
    data
  })
}

export function getAxureWeb(axure_id, params) {
  return request({
    url: `/axures/${axure_id}`,
    method: 'get',
    params
  })
}
