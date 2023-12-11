import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            cartList: [
                {
                    id: 1,
                    count: 2,
                },
                {
                    id: 2,
                    count: 1,
                },
            ],
            productionList: [
                {
                    id: 1,
                    name: '商品1',
                    price: 10
                },
                {
                    id: 2,
                    name: '商品2',
                    price: 15
                },
                {
                    id: 3,
                    name: '商品3',
                    price: 20
                },
            ]
        }
    },
    getters: {
        cartList(state: any) {
            return state.cartList.map((item: any) => {
                const product = state.productionList.find((product: any) => product.id === item.id)
                return {
                    ...product,
                    count: item.count
                }
            })
        }
    },
    mutations: {
        ADD_TOCART(state: any, id: any) {
            // 如果添加商品已经加入在购物车 那么数量增加
            // 如果商品不在购物车 那么添加到购物车
            const findItem = state.cartList.find((item: any) => item.id === id)
            if (findItem) {
                findItem.count++
                return
            }
            state.cartList.push({
                id,
                count: 1
            })

        },

        REMOVE_FROMCART(state: any, id: number) {
            const findItem = state.cartList.find((item: any) => item.id === id)
            if (findItem == null) {
                return
            }
            findItem.count--
            if (findItem.count <= 0) {
                state.cartList = state.cartList.filter((cartItem: any) => cartItem.id !== id)
            }
        }
    },
    actions: {

    }
})