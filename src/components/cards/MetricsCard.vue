<script setup>
import BaseCard from './BaseCard.vue';

defineProps({
    textColor: "",
    percentageBubble: ""
})
</script>

<template>
    <BaseCard>
        <div :class="'py-4 relative' + ' ' + textColor">
            <span class="font-bold my-6 text-4xl">1186</span>
            <h4 class="mt-4">promotores</h4>
            <div :class="'rounded-full w-14 h-14 flex justify-center items-center font-bold absolute top-0 right-0' + ' ' + percentageBubble">94.9%</div>
        </div>
    </BaseCard>
</template>