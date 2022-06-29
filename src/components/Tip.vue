<template>
    <router-link class="tip" :to="{ name: 'store' }"
        >仓库里有 {{ userStore.amount }} 件商品</router-link
    >
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
.tip {
    position: fixed;
    bottom: 20px;
    right: 20px;

    padding: 10px 20px;

    border-radius: 8px;

    color: white;

    text-decoration: none;
    background-color: purple;
}
</style>
