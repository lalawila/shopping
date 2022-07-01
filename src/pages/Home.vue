<template>
    <h1>快乐大卖场</h1>
    <p>你有 {{ userStore.cash }} 元，赶紧去购物吧。</p>
    <div class="products">
        <div class="product" v-for="product of productList">
            <img class="image" :src="product.img" />
            <div class="name">{{ product.name }}</div>
            <div class="bottom">
                <div class="price">价格：{{ product.price }}</div>
                <button class="buy" @click="buy(product)">加入购物车</button>
            </div>
        </div>
    </div>
</template>
<script>
import { ElMessage } from "element-plus"

import { useUserStore } from "../stores/user"
import { products } from "../data/products"

export default {
    data() {
        const userStore = useUserStore()
        return {
            productList: products,
            userStore,
        }
    },
    methods: {
        buy(product) {
            this.userStore.addToCart(product)
            ElMessage({
                showClose: true,
                message: "加入购物车成功。",
                type: "success",
            })
        },
    },
}
</script>
<style scoped>
.products {
    display: flex;

    /* flex 换行 */
    flex-wrap: wrap;

    gap: 20px;
}

.products .product {
    width: 200px;
}
.products .product .image {
    width: 100%;
    height: 200px;
}
.products .product .name {
    text-align: center;
    background-color: #eee;
}
.products .product .bottom {
    height: 40px;

    display: flex;
}
.products .product .bottom .price {
    width: 50%;
    background-color: #eee;

    text-align: center;
    line-height: 40px;
}
.products .product .bottom .buy {
    width: 50%;

    background-color: teal;
    color: white;

    font-weight: bold;

    border: none;
    outline: none;

    cursor: pointer;
}
.products .product .bottom .out {
    width: 50%;
    text-align: center;
    line-height: 40px;
    background-color: #999;

    cursor: not-allowed;
}
</style>
