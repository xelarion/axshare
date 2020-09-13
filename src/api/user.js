import request from '@/utils/request'

export function getList(query) {
  return request({
    url: `/accounts`,
    method: 'get',
    params: query
  })
}

export function getUser(userId) {
  return request({
    url: `/accounts/${userId}`,
    method: 'get'
  })
}

export function createUser(data) {
  return request({
    url: `/accounts`,
    method: 'post',
    data
  })
}

export function updateUser(userId, data) {
  return request({
    url: `/accounts/${userId}`,
    method: 'post',
    data
  })
}

export function updateUserPassword(userId, data) {
  return request({
    url: `/accounts/${userId}/password`,
    method: 'post',
    data
  })
}

export function resetUserPassword(userId, data) {
  return request({
    url: `/accounts/${userId}/reset_password`,
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/sign_in',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/account/info',
    method: 'get'
  })
}

