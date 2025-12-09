import httpInstance from '@/utils/request'

function getBannerAPI(params = {}) {
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: { distributionSite }
  })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}
const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
export { getBannerAPI, findNewAPI, getHotAPI, getGoodsAPI }
