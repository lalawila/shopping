<template>
    <h1>你总共有 {{ userStore.ordersAmount }} 个订单</h1>
    <div class="orders">
        <div class="order" v-for="order of userStore.orders">
            <div class="product" v-for="product of order.products">
                <img :src="product.img" />
                <div class="right">
                    <div>产品: {{ product.name }}</div>
                    <div>价格: {{ product.price }} 元</div>
                </div>
            </div>
            <div class="payment-time">
                支付时间: {{ $common.formatTimestamp(order.paymentTime) }}
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
    },
}
</script>
<style scoped>
.orders .order .product {
    height: 100px;
    margin: 10px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.orders .order .payment-time {
    margin: 10px 0;
    text-align: right;
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
</style>
