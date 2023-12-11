<template>
    <div>
        <span>{{ item.name }}</span>
        <span style="margin-right:10px">(数量 {{ item.count }})</span>
        <span style="color:skyblue; margin-right:10px" @click="addToCart(item.id)">增加</span>
        <span style="color:skyblue" @click="removeFromCart(item.id)">减少</span>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
// 添加商品数量
const addToCart = (id) => {
    store.commit('ADD_TOCART', id)
}
// 减少商品数量
const removeFromCart = (id) => {
    store.commit('REMOVE_FROMCART', id)
}
defineProps(
    {
        item: {
            type: Object
        }
    }
)
</script>