import httpInstance from '@/utils/request'

function getCategory() {
  return httpInstance({
    url: 'home/category/head'
  })
}

export { getCategory }
