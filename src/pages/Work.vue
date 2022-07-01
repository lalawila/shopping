<template>
    <h1>打工房</h1>
    <p class="tip">你现在有 {{ userStore.cash }} 元</p>
    <button @click="work">打工是不可能打工的</button>
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
        work() {
            this.userStore.payoff()
        },
    },
}
</script>
<style scoped></style>
