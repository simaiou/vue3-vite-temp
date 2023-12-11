<template>
    <div>
        <CartItem v-for="item in cartList" :key="item.id" :item="item">
        </CartItem>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import CartItem from './CartItem.vue'
import { useStore } from 'vuex'
const store = useStore()

const cartList = computed(() => store.getters.cartList)
</script>