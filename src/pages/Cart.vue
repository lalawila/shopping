<template>
    <h1>你的购物车共有 {{ userStore.cartAmount }} 件商品</h1>
    <div class="cart">
        <div class="operation">
            <span>商品总价 {{ userStore.totalPrice }} 元</span>
            <el-button v-if="userStore.isEnough" type="primary" @click="payment"
                >支付</el-button
            ><el-button v-else type="primary" disabled
                >您的现金为 {{ userStore.totalPrice }} 元，请去打工。</el-button
            >
        </div>
        <div class="product" v-for="(item, index) of userStore.cart">
            <img :src="item.product.img" />
            <div class="right">
                <div>产品: {{ item.product.name }}</div>
                <div>价格: {{ item.product.price }} 元</div>
                <div>添加于: {{ $common.formatTimestamp(item.addTime) }}</div>
                <el-popconfirm
                    @confirm="discard(index)"
                    title="确认丢弃商品吗?"
                    confirmButtonText="是的"
                    cancelButtonText="不"
                >
                    <template #reference>
                        <button class="discard">丢弃</button>
                    </template>
                </el-popconfirm>
            </div>
        </div>
    </div>
</template>
<script>
import { ElMessage } from "element-plus"

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
            ElMessage({
                showClose: true,
                message: "支付成功。",
                type: "success",
            })
        },
        discard(index) {
            this.userStore.discard(index)
        },
    },
}
</script>
<style scoped>
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

.cart .operation {
    display: flex;
    justify-content: space-between;
}
</style>
