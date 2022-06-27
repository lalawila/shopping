<template>
    <div class="container">
        <h1>快乐屋</h1>
        <div class="buttons">
            <a class="button" href="/shop">去购物</a>
            <a class="button" href="/work">去打工</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style scoped>
.container {
    text-align: center;
}

.container .buttons .button {
    display: inline-block;

    text-decoration: none;
    margin: 20px;

    font-size: 26px;
    font-weight: bold;

    color: white;

    background-color: teal;
    padding: 20px;

    border-radius: 8px;
}
</style>
