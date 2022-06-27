import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            cash: 0, // 用户现金
            purchased: [], // 已购商品
        }
    },
    getters: {
        amount() {
            return this.purchased.length
        },
    },
    actions: {
        payoff(salary) {
            // 发工资
            this.cash += salary
        },
        purchase(product) {
            if (this.cash < product.price) {
                return false
            }

            this.cash -= product.price

            this.purchased.push({
                product,
                time: Date.now(),
            })

            return true
        },
        discard(index) {
            this.purchased.splice(index, 1)
        },
    },
    persist: true, // 开启持久化
})
