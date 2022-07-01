import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state() {
        return {
            cash: 100, // 现金
            cart: [], // 购物车
            orders: [], // 订单
        }
    },
    getters: {
        cartAmount() {
            // 返回购物车的数量
            return this.cart.length
        },
        ordersAmount() {
            // 返回订单的数量
            return this.orders.length
        },
        totalPrice() {
            // 购物车里所有商品的价格
            let totalPrice = 0

            for (const item of this.cart) {
                totalPrice += item.product.price
            }

            return totalPrice
        },
        isEnough() {
            // 钱是否足够支付购物车的商品
            return this.cash >= this.totalPrice
        },
    },
    actions: {
        payoff() {
            this.cash += 100
        },
        addToCart(product) {
            // 加入购物车
            this.cart.push({
                product, // 商品
                addTime: Date.now(), // 添加到购物车的时间
            })
        },
        discard(index) {
            // 根据序号从购物车删除
            this.cart.splice(index, 1)
        },
        payment() {
            // 支付购物车里所有的商品
            if (!this.isEnough) return

            // 支付的订单对象
            const order = {}
            // 支付的时间等于当前时间戳
            order.paymentTime = Date.now()
            // 创建一个空列表保存所有的商品
            order.products = []

            for (const item of this.cart) {
                const product = {
                    name: item.product.name,
                    price: item.product.price,
                    img: item.product.img,
                }

                order.products.push(product)
            }

            this.orders.unshift(order)

            // 减去商品的价格
            this.cash -= this.totalPrice

            // 清空购物车
            this.cart = []
        },
    },
    persist: true, // 开启持久化
})
