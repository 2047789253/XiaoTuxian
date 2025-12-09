import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    // 管理用户数据的state
    const userInfo = ref({})
    // 获取接口数据的action
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result
    }
    //退出时清除用户信息
    const clearUserInfo = () => {
      userInfo.value = {}
    }
    //已对象形式返回state和action
    return { userInfo, getUserInfo, clearUserInfo }
  },
  {
    persist: true // 开启持久化
  }
)
