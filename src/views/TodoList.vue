<template>
    <div>
        <InputItem @onAdd=handleAdd></InputItem>
        <List @onDelete="handleDelete" @onToggleState="handleToggleState" :list="todoList"></List>
    </div>
</template>
<script setup name="home">
import { ref, reactive } from 'vue'
import InputItem from "@/components/TodoList/InputItem.vue"
import List from '@/components/TodoList/List.vue'
const todoList = ref([
    {
        id: 1,
        title: '吃饭',
        completed: false
    },
    {
        id: 2,
        title: '睡觉',
        completed: true
    }
])

const handleAdd = (title) => {
    const todo = {
        id: Math.random(),
        title,
        completed: false
    }
    todoList.value.push(todo)
}

const handleDelete = (id) => {
    const findIndex = todoList.value.findIndex(todo => todo.id === id)
    todoList.value.splice(findIndex, 1)
}

const handleToggleState = (id) => {
    todoList.value = todoList.value.map((item) => {
        const completed = item.id === id ? !item.completed : item.completed
        return {
            ...item,
            completed
        }
    })
}
</script>
<style lang="scss"></style>