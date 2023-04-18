<script setup>
defineProps({
    name: ""
})
</script>

<template>
    <button class="uppercase bg-green rounded p-4 text-light-gray">{{ name }}</button>
</template>