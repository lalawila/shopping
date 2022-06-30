<template>
    <div class="container">
        <h1>你的购物车共有 {{ userStore.cartAmount }} 件物品</h1>
        <div class="operation">
            <span>商品总计{{ userStore.totalPrice }}元</span>
            <button v-if="userStore.isEnough" @click="payment">支付</button>
            <button v-else disabled>
                你的现金为 {{ userStore.cash }} 元，去打工吧
            </button>
        </div>
        <div class="cart">
            <div class="product" v-for="(item, index) of userStore.cart">
                <img :src="item.product.img" />
                <div class="right">
                    <div>产品: {{ item.product.name }}</div>
                    <div>价格: {{ item.product.price }} 元</div>
                    <div>添加于: {{ formatTimestamp(item.addTime) }}</div>
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
        payment() {
            this.userStore.payment()
        },
        discard(index) {
            this.userStore.discard(index)
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
.cart .product {
    height: 140px;
    padding: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cart .product:not(:last-child) {
    border-bottom: 1px solid #ccc;
}
.cart .product img {
    object-fit: cover;

    width: 100px;
    height: 100px;
}

.cart .product .right {
    text-align: right;
    font-size: 14px;
}
.cart .product .right .discard {
    outline: none;
    border: none;

    margin-top: 10px;

    padding: 2px 10px;
    background-color: orange;

    cursor: pointer;
}

.container .operation {
    display: flex;
    justify-content: space-between;
}
</style>
