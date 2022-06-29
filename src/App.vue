<template>
    <!-- 导航栏 -->
    <Navigator />
    <!-- 仓库提示 -->
    <Tip />
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</template>

<script>
import Navigator from "./components/Navigator.vue"
import Tip from "./components/Tip.vue"

export default {
    components: { Navigator, Tip },
}
</script>

<!-- 
<template>
    <Navigator />
    <component :is="page"></component>
</template>
<script>
import Home from "./pages/Home.vue"
import Shop from "./pages/Shop.vue"
import Work from "./pages/Work.vue"
import NotFound from "./pages/404.vue"
import Navigator from "./pages/Navigator.vue"
import Store from "./pages/Store.vue"

export default {
    components: {
        Navigator,
    },
    computed: {
        page() {
            switch (location.pathname) {
                case "/":
                    return Home
                case "/shop":
                    return Shop
                case "/work":
                    return Work
                case "/store":
                    return Store
                default:
                    return NotFound
            }
        },
    },
}
</script>

<style>
:root {
    box-sizing: border-box; /* 设置根元素的 box-sizing: border-box */
}
*,
*:before,
*:after {
    box-sizing: inherit; /* box-sizing 继承自父元素 */
}
body {
    margin: 0;
}
</style> -->
