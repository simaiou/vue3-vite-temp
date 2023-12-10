<template>
    <div>
       <span>{{ addGoodsItem.name }}</span>
       <span style="margin-right:10px">(数量 {{ addGoodsItem.count }})</span>
       <span style="color:skyblue; margin-right:10px">增加</span>
       <span style="color:skyblue">减少</span>
    </div>
</template>
<script setup>
defineProps(
    {
        addGoodsItem: {
            type: Object
        }
    }
)
</script>