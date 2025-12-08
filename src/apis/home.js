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
const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

export { getBannerAPI, findNewAPI, getHotAPI }
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
