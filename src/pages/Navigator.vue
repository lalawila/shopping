<template>
    <header class="navigator">
        <a class="home" href="/">首页</a>
        <a href="/store">仓库：{{ userStore.amount }} 件物品</a>
    </header>
</template>
<script>
import { useUserStore } from "../stores/user"

export default {
    data() {
        const userStore = useUserStore()
        return {
            userStore,
        }
    },
    methods: {
        buy(product) {
            const result = this.userStore.purchase(product)

            if (result) {
                alert("购买成功")
            } else {
                alert("购买失败")
            }
        },
    },
}
</script>

<style scoped>
.navigator {
    max-width: 800px;
    margin: 0 auto;

    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navigator a {
    text-decoration: none;
    color: #333;
}
.navigator .home {
    font-size: 26px;
}
</style>
