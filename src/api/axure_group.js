import request from '@/utils/request'

export function getList() {
  return request({
    url: '/axure_groups',
    method: 'get'
  })
}

export function getAxureGroup(axure_group_id) {
  return request({
    url: `/axure_group/${axure_group_id}`,
    method: 'get'
  })
}

export function createAxureGroup(data) {
  return request({
    url: `/axure_groups`,
    method: 'post',
    data
  })
}

export function updateAxureGroup(axureGroupId, data) {
  return request({
    url: `/axure_group/${axureGroupId}`,
    method: 'post',
    data
  })
}
