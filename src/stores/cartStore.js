// 封装购物车模块

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/use.js'
import { insertCartAPI, findNewCartListAPI, deleteCartAPI } from '@/apis/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    //获取最新购物车列表action
    const updateNewList = async () => {
      const res = await findNewCartListAPI()
      cartList.value = res.result
    }

    // 1. 定义state - cartList
    const cartList = ref([])
    // 2. 定义action - addCart
    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        // 登录后的添加购物车操作
        // 调用接口完成添加购物车操作
        await insertCartAPI(skuId, count)
        updateNewList()
      } else {
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
    }
    //3.定义action-删除购物车
    const deleteCart = async (skuId) => {
      if (isLogin.value) {
        //登录后的删除购物车操作
        //调用接口完成删除购物车操作
        await deleteCartAPI([skuId])
        updateNewList()
      } else {
        //1.数组过滤-filter
        //2.找到对应的下标-splice
        const idx = cartList.value.findIndex((item) => item.skuId === skuId)
        cartList.value.splice(idx, 1)
      }
    }

    //单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }
    //全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => {
        item.selected = selected
      })
    }
    //计算属性
    //1.总的数量
    const allCount = computed(() => {
      return cartList.value.reduce((a, c) => a + c.count, 0)
    })
    //2.总的价格
    const allPrice = computed(() => {
      return cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    })
    //3.已选择数量
    const selectedCount = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    })
    //4.已选择商品合计
    const selectedPrice = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    })
    //是否全选
    const isAll = computed(() => {
      return cartList.value.every((item) => item.selected)
    })

    return {
      cartList,
      addCart,
      deleteCart,
      updateNewList,
      singleCheck,
      allCheck,
      allCount,
      allPrice,
      selectedCount,
      selectedPrice,
      isAll
    }
  },
  {
    persist: true
  }
)
