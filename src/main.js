import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

//引入懒加载插件+注册
import lazyPlugin from '@/directives/index.js'

//引入全局组件插件+注册
import { componentPlugin } from '@/components/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
