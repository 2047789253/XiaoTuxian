import request from '@/utils/request'

export const getCheckoutInfoAPI = () => {
  return request({
    url: '/member/order/pre'
  })
}
