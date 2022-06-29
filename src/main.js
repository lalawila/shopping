import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"

import pinia from "./pinia"

const app = createApp(App)

// 挂载 pinia
app.use(pinia)

// 挂载 router
app.use(router)

app.mount("#app")
