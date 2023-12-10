<template>
    <div class="input-item">
        <input type="text" v-model="text"/>
        <button @click="handleAdd">Add</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const text = ref('')
const emit = defineEmits(['onAdd'])

const handleAdd = () => {
    emit('onAdd', text.value)
    text.value = ''
}
</script>
<style lang="scss"></style>