import request from '@/utils/request'

export const loginAPI = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'post',
    data: {
      //登录所需参数
      account,
      password
    }
  })
}
