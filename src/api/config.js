import request from '@/utils/request'

export function getPublicConfig() {
  return request({
    url: `/config/public`,
    method: 'get'
  })
}

export function getConfig() {
  return request({
    url: `/config`,
    method: 'get'
  })
}

export function updateConfig(data) {
  return request({
    url: `/config`,
    method: 'post',
    data
  })
}
