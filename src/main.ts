/*
 * @Date: 2023-06-17 16:56:28
 * @Author: liufan
 * @Description:
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
// 全局使用图标，遍历引入
const icons = Icons
for (const i in icons) {
  const ico = icons[i as keyof typeof icons]
  app.component(i, ico)
}

app.mount('#app')
