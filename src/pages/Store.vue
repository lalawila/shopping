<template>
    <div class="container">
        <h1>你的仓库共有 {{ userStore.amount }} 件物品</h1>
        <div class="orders">
            <div class="order" v-for="(order, index) of userStore.purchased">
                <img :src="order.product.img" />
                <div class="right">
                    <div>产品: {{ order.product.name }}</div>
                    <div>价格: {{ order.product.price }} 元</div>
                    <div>购买于: {{ formatTimestamp(order.time) }}</div>
                    <button class="discard" @click="discard(index)">
                        丢弃
                    </button>
                </div>
            </div>
        </div>
    </div>
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
        discard(index) {
            if (confirm("确认丢弃吗？")) {
                const result = this.userStore.discard(index)
            }
        },
        fillZero(n) {
            if (n < 10) {
                return `0${n}`
            }
            return n
        },
        formatTimestamp(timestamp) {
            const time = new Date(timestamp)

            const year = time.getFullYear()
            const month = this.fillZero(time.getMonth() + 1)
            const date = this.fillZero(time.getDate())
            const hour = this.fillZero(time.getHours())
            const minute = this.fillZero(time.getMinutes())

            return `${year}-${month}-${date} ${hour}:${minute}`
        },
    },
}
</script>
<style scoped>
.container {
    max-width: 450px;
    margin: 0 auto;
}
.orders .order {
    height: 140px;
    padding: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.orders .order:not(:last-child) {
    border-bottom: 1px solid #ccc;
}
.orders .order img {
    object-fit: cover;

    width: 100px;
    height: 100px;
}

.orders .order .right {
    text-align: right;
    font-size: 14px;
}
.orders .order .right .discard {
    outline: none;
    border: none;

    margin-top: 10px;

    padding: 2px 10px;
    background-color: orange;

    cursor: pointer;
}
</style>
