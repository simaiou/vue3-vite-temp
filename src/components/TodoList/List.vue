<template>
    <div class="list">
        <ListItem v-for="todo in list" @onDelete="$emit('onDelete', $event)"
            @onToggleState="($event) => $emit('onToggleState', $event)" :key="todo.id" :todo="todo"></ListItem>
    </div>
</template>
<script setup>
import ListItem from '@/components/TodoList/ListItem.vue'
defineEmits(['onDelete', 'onToggleState'])
defineProps(
    ['list']
)
</script>
<style lang="scss"></style>