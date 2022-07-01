<template>
    <header class="navigator">
        <router-link
            class="title"
            :to="{
                name: 'home',
            }"
            >首页</router-link
        >
        <div class="right">
            <router-link
                :to="{
                    name: 'cart',
                }"
                >购物车</router-link
            >
            <router-link
                :to="{
                    name: 'order',
                }"
                >订单</router-link
            >
            <router-link
                :to="{
                    name: 'work',
                }"
                >打工</router-link
            >
        </div>
    </header>
</template>
<style scoped>
.navigator {
    max-width: 800px;
    margin: 0 auto;
    height: 60px;

    display: flex;
    justify-content: space-between;

    align-items: center;
}
.navigator .title {
    font-size: 22px;
}
.navigator a {
    color: #333;
    text-decoration: none;
}
.navigator .right a {
    padding: 5px 20px;
    border-radius: 4px;
}
.navigator .right a:hover {
    background-color: #eee;
}
</style>
