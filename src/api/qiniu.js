import request from '@/utils/request'

export function getQiNiuToken() {
  return request({
    url: '/upload/token',
    method: 'get'
  })
}
