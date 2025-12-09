import request from '@/utils/request'

export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}
