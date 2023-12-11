<template>
    <div class="shopping-cart">
        <p>购物车</p>
        <ProductionList></ProductionList>
        <hr>
        <CartList></CartList>
        <span>总价: {{ totalCount }}</span>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import ProductionList from '../components/ShoppingCart/ProductionList/index.vue'
import CartList from '../components/ShoppingCart/CartList/index.vue'

const store = useStore()
const cartList = computed(() => store.getters.cartList)
const totalCount = computed(() => {
    return cartList.value.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.count
    }, 0)
})

</script>

<style scoped>
.shopping-cart {
    border: 1px solid #333;
    padding: 0px 20px 20px;
}
</style>