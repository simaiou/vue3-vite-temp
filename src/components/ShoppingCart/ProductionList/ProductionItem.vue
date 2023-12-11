<template>
    <div>
        <span>{{ item.name }}</span> - <span>{{ item.price }}元</span><span class="add-cart"
            @click="addToCart(item.id)">加入购物车</span>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
defineProps({
    item: {
        type: Object,
        required: true,
        default() {
            return {}
        }
    }
})

const addToCart = (id) => {
    store.commit('ADD_TOCART', id)
}
</script>
<style scoped>
.add-cart {
    color: skyblue;
    margin-left: 20px;
    text-decoration: underline;
    cursor: pointer;
}
</style>