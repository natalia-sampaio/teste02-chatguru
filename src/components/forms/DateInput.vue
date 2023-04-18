<script setup>
defineProps({
    ariaLabel: ""
})
</script>

<template>
    <input type="date" :aria-label="ariaLabel" />
</template>