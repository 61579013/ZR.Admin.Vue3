import request from '@/utils/request'

// 查询在线用户列表
export function listOnline(query) {
  return request({
    url: '/monitor/online/list',
    method: 'get',
    params: query
  })
}

// 强退用户
export function forceLogout(data) {
  return request({
    url: '/monitor/online/lock',
    method: 'delete',
    data: data
  })
}
