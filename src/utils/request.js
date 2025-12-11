import router from '@/router'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/use'
import 'element-plus/theme-chalk/el-message.css'
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInstance = axios.create({
  baseURL,
  timeout: 50000
})

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    //.从pinia中获取token信息
    const userStore = useUserStore()
    // 2.按照后端要求拼接数据
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    //.从pinia中获取token信息
    const userStore = useUserStore()
    ElMessage({ type: 'warning', message: e.response.data.message })
    if (e.response.status === 401) {
      // TODO 跳转登录
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e)
  }
)
export default httpInstance
