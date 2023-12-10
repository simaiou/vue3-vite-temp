<template>
    <div class="list-item">
        <div>
            <label for="">
                <input type="checkbox" @click="$emit('onToggleState', todo.id)" :checked="todo.completed" name="" id="">
                <span :class="{ underline: todo.completed }">{{ todo.title }}</span>
            </label>
            <span @click="$emit('onDelete', todo.id)" style="margin-left: 20px;color: blue;">删除</span>
        </div>
    </div>
</template>
<script setup>
defineProps(['todo'])
defineEmits(['onDelete', 'onToggleState'])

</script>
<style lang="scss">
.underline {
    text-decoration: line-through;
}
</style>