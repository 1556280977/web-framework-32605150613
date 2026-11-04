// ============================================================
// main.js —— ch06-ui-library 的"插件总线"
// 记住口诀：装完插件 = "拿到货"，app.use(插件) = "装上机器"，两步都做才生效。
// ============================================================
import { createApp } from 'vue'
import './style.css'

// ① Element Plus：全量引入（教材 6.2.1）——注册全部 el-xxx 组件 + 全部样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// ② Element Plus 图标包：全局注册所有图标组件（注册后模板里 <el-icon><HomeFilled /></el-icon> 直接用）
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// ③ Vant 全量引入（教材 6.3.2）——任务 4 起注释：按需引入后不再全量
// import Vant from 'vant'
// import 'vant/lib/index.css'

// ⑦ Vuex（任务 7）：一个变量，全家共享
import store from './store'
// ⑧ Pinia（任务 8）+ 持久化插件（教材 7.4.4 的课程口径：pinia-plugin-persistedstate）
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'          // 第 5 章的路由，今天当"实验台导航"复用

const app = createApp(App)

// 图标注册：把几十个图标组件挨个挂到全局（key 是组件名，如 'HomeFilled'）
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
// app.use(Vant)          // 任务 4 起注释：按需引入由 vite 插件在编译期自动完成
app.use(router)
app.use(store)           // Vuex 装上后，任何组件都能 this.$store 取到同一个仓库

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)   // 挂持久化插件：管 store 里的数据要不要存 localStorage
app.use(pinia)

app.mount('#app')
