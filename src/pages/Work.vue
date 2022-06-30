<template>
    <div class="container">
        <h1>打工房</h1>
        <p class="tip">你现在有 {{ userStore.cash }} 元</p>
        <p v-if="isWork" class="working">打工中...</p>
        <button v-else class="work" @click="work">打工是不可能打工的</button>
    </div>
</template>
<script>
import { useUserStore } from "../stores/user"

export default {
    data() {
        const userStore = useUserStore()
        return {
            userStore,
            isWork: false,
        }
    },
    methods: {
        work() {
            this.isWork = true
            setTimeout(() => {
                // 发工资
                this.userStore.payoff(1000)
                this.isWork = false
            }, 300)
        },
    },
}
</script>

<style scoped>
.container {
    text-align: center;
}
.container .tip {
    font-size: 20px;
}
.container .work {
    padding: 20px;

    outline: none;
    border: none;

    font-size: 26px;
    font-weight: bold;
    background-color: teal;

    color: white;

    border-radius: 8px;
    cursor: pointer;
}
.container .working {
    color: teal;
    font-size: 36px;
}
</style>
