import httpInstance from '@/utils/request'

function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
  })
}
export { getBannerAPI }
