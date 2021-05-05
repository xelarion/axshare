import request from '@/utils/request'

export function getList(axure_group_id, axure_id) {
  return request({
    url: `/axure_groups/${axure_group_id}/axures/${axure_id}/attachments`,
    method: 'get'
  })
}

export function getAllList(query) {
  return request({
    url: `/attachments`,
    method: 'get',
    params: query
  })
}

export function releaseAttachment(id) {
  return request({
    url: `/attachments/${id}/release`,
    method: 'post'
  })
}

export function cleanAttachment(id) {
  return request({
    url: `/attachments/${id}/clean`,
    method: 'post'
  })
}
