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
