import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"
import pinia from "./pinia"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import common from "./plugins/common"

const app = createApp(App)

// 安装 element
app.use(ElementPlus)

// 挂载 router
app.use(router)

// 挂载 pinia
app.use(pinia)

// 绑定插件
app.use(common)

app.mount("#app")
