// 封装购物车模块

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    // 1. 定义state - cartList
    const cartList = ref([])
    // 2. 定义action - addCart
    const addCart = (goods) => {
      // 添加购物车操作
      //已添加过：count+1
      //已添加过：直接push
      //匹配传递过来的商品对象中的skuId能不能在cartList中找到
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        //找到了，数量+1
        item.count += goods.count
      } else {
        //没找到，直接push
        cartList.value.push(goods)
      }
    }
    return {
      cartList,
      addCart
    }
  },
  {
    persist: true
  }
)
