<script setup>
defineProps({
    label: "",
    name: ""
})
</script>

<template>
    <div class="border-b border-light-grayish-blue grid">
        <label :for="name" >{{ label }}</label>
        <slot></slot>
    </div>
</template>