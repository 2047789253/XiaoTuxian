import httpInstance from '@/utils/request'

function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
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
export { getBannerAPI, findNewAPI }
