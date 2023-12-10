<template>
    <div>
        <GoodsItem v-for="goodsItem in list" :key="goodsItem.id" :item="goodsItem"></GoodsItem>
    </div>
</template>
<script setup>
import GoodsItem from './GoodsItem.vue'
defineProps({
    list: {
        type: Array,
        required: true,
        default() {
            return []
        }
    }
})
</script>