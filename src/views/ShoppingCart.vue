<template>
    <div class="shopping-cart">
        <p>购物车</p>
        <GoodsList :list="goodsList"></GoodsList>
        <hr>
        <AddGoodsList></AddGoodsList>
        <span>总价: {{ totalCount }}</span>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import GoodsList from '../components/ShoppingCart/GoodsList.vue'
import AddGoodsList from '../components/ShoppingCart/AddGoodsList.vue'

const goodsList = reactive([
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
])

const totalCount =computed(() => 100)
</script>

<style scoped>
.shopping-cart{
    border: 1px solid #333;
    padding: 0px 20px 20px;
}
</style>