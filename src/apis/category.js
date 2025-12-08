import request from '@/utils/request'

export const getTopCategoryAPI = (id) => {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}
