import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  //响应式数据
  const time = ref(0)
  //格式化时间
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  //开启倒计时函数
  const start = (currentTime) => {
    //隔1s-1
    time.value = currentTime
    setInterval(() => {
      time.value--
    }, 1000)
  }
  //组件销毁时清楚定时器
  onUnmounted(() => {
    time.value && clearInterval(time.value)
  })
  return {
    formatTime,
    start
  }
}
