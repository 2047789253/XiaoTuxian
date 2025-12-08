import httpInstance from '@/utils/request'

export function getCategory() {
  return httpInstance({
    url: 'home/category/head'
  })
}
