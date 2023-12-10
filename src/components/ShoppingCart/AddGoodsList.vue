<template>
    <div>
        <AddGoodsItem v-for="addGoodsItem in addGoodsList" :key="addGoodsItem.id" :addGoodsItem="addGoodsItem"></AddGoodsItem>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import AddGoodsItem from './AddGoodsItem.vue'
import { useStore } from 'vuex'
const store = useStore()

const addGoodsList = computed(() => store.state.addGoodsList)

</script>