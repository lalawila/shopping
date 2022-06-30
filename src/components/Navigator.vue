<template>
    <header class="navigator">
        <router-link class="home" :to="{ name: 'home' }">首页</router-link>
        <div class="buttons">
            <router-link :to="{ name: 'cart' }">购物车</router-link>
            <router-link :to="{ name: 'order' }">订单</router-link>
            <router-link :to="{ name: 'work' }">打工</router-link>
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
.navigator a {
    text-decoration: none;
    color: #333;
}
.navigator .home {
    font-size: 26px;
}
.navigator .buttons a {
    padding: 5px 15px;
    border-radius: 4px;
}
.navigator .buttons a:hover {
    background-color: #eee;
}
</style>
