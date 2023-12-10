import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            addGoodsList: [
                {
                    id: 1,
                    name: '商品1',
                    count: 2,
                    price: 10
                },
                {
                    id: 2,
                    name: '商品2',
                    count: 1,
                    price: 12
                },
            ]
        }
    },
    mutations: {
        ADD_GOODSITEM(state:any, goodsItem:any) {
            state.addGoodsList.push(goodsItem)
        }
    },
    actions: {

    }
})