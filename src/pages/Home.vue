<template>
    <div class="container">
        <h1>快乐大卖场</h1>
        <p>你有 {{ userStore.cash }} 元，赶紧去购物吧~</p>
        <div class="products">
            <div class="product" v-for="product of products">
                <img :src="product.img" />
                <p class="name">{{ product.name }}</p>
                <div class="bottom">
                    <div class="price">价格：{{ product.price }}</div>
                    <button class="add" @click="add(product)">
                        加入购物车
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useUserStore } from "../stores/user"
import { products } from "../data/products"

export default {
    data() {
        const userStore = useUserStore()
        return {
            userStore,
            products,
        }
    },
    methods: {
        add(product) {
            this.userStore.addToCart(product)
        },
    },
}
</script>
<style scoped>
.container {
    max-width: 650px;
    margin: 0 auto;
}

.products {
    display: flex;
    flex-wrap: wrap;

    gap: 20px;
}

.products .product {
    width: 200px;
}

.products .product .name {
    margin: 0;
    text-align: center;
    background-color: #eee;
}
.products .product img {
    display: block;
    object-fit: cover;

    width: 200px;
    height: 200px;
}
.products .product .bottom {
    height: 40px;
    display: flex;
}
.products .product .bottom .price {
    background-color: #eee;
    text-align: center;
    line-height: 40px;
    width: 50%;
}
.products .product .bottom .add,
.products .product .bottom .out {
    outline: none;
    border: none;

    width: 50%;
    color: white;
    background-color: teal;
    text-align: center;
    line-height: 40px;

    cursor: pointer;
}
</style>
