import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            cash: 0, // 用户现金
            cart: [], // 购物车
            orders: [], // 订单
        }
    },
    getters: {
        cartAmount() {
            return this.cart.length
        },
        ordersAmount() {
            return this.orders.length
        },
        totalPrice() {
            let totalPrice = 0
            for (const item of this.cart) {
                totalPrice += item.product.price
            }
            return totalPrice
        },
        isEnough() {
            return this.totalPrice <= this.cash
        },
    },
    actions: {
        payoff(salary) {
            // 发工资
            this.cash += salary
        },
        addToCart(product) {
            this.cart.push({
                product,
                addTime: Date.now(),
            })
        },
        discard(index) {
            this.cart.splice(index, 1)
        },
        payment() {
            // 钱不够就不能付款
            if (!this.isEnough) return

            // 创建一个订单对象
            const order = {}
            // 支付时间等于当前时间戳
            order.paymentTime = Date.now()
            // 创建一个对象保存订单中的商品
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

            // 减去商品价格
            this.cash -= this.totalPrice

            // 清空购物车
            this.cart = []
        },
    },
    persist: true, // 开启持久化
})
