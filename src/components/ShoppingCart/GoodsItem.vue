<template>
    <div>
        <span>{{ item.name }}</span> - <span>{{ item.price }}元</span><span class="add-cart"
            @click="handleAddGoodsItem(item)">加入购物车</span>
    </div>
</template>
<script setup>
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

const handleAddGoodsItem = (goodsItem) => {
    console.log(goodsItem);
    store.commit('ADD_GOODSITEM', goodsItem)
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