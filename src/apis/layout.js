import httpInstance from '@/utils/request'

function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head'
    //method: 'GET'
  })
}

export { getCategoryAPI }
