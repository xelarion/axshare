import request from '@/utils/request'

export function getList(query) {
  return request({
    url: `/users`,
    method: 'get',
    params: query
  })
}

export function getUser(userId) {
  return request({
    url: `/users/${userId}`,
    method: 'get'
  })
}

export function createUser(data) {
  return request({
    url: `/users`,
    method: 'post',
    data
  })
}

export function updateUser(userId, data) {
  return request({
    url: `/users/${userId}`,
    method: 'put',
    data
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
