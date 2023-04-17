<script setup>
defineProps({
    label: "",
    name: ""
})
</script>

<template>
    <label :for="name" >{{ label }}</label>
    <select :name="name" class="bg-white p-6 border-b border-light-grayish-blue">
        <slot name="options"></slot>
    </select>
</template>