import * as VueRouter from "vue-router"

import Home from "../pages/Home.vue"
import Shop from "../pages/Shop.vue"
import Work from "../pages/Work.vue"
import Store from "../pages/Store.vue"

const routes = [
    {
        name: "home", // 页面名
        path: "/", // 映射的路径
        component: Home, // 虽配置名为 component 组件，但我更愿意理解为 page 页面
    },
    {
        name: "shop",
        path: "/shop",
        component: Shop,
    },
    {
        name: "work",
        path: "/work",
        component: Work,
    },

    {
        name: "store",
        path: "/store",
        component: Store,
    },
]

const router = VueRouter.createRouter({
    // 使用 HTML5 的历史记录模式
    history: VueRouter.createWebHistory(),
    routes,
})

export default router
