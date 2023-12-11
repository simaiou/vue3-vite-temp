<template>
    <div>
        <ProductionItem v-for="item in productionList" :key="item.id" :item="item"></ProductionItem>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProductionItem from './ProductionItem.vue'
const store = useStore()

const productionList = computed(() => store.state.productionList)

</script>