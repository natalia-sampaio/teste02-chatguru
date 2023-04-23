<script setup>
import BaseCard from './BaseCard.vue';

defineProps({
    textColor: "",
    percentageBubble: "",
    metricName: "",
    metricValue: Number,
    metricScore: Number
})
</script>

<template>
    <BaseCard>
        <div :class="'py-4 relative' + ' ' + textColor">
            <span class="font-bold my-6 text-4xl">{{ metricValue }}</span>
            <h4 class="mt-4">{{ metricName }}</h4>
            <div :class="'rounded-full w-14 h-14 flex justify-center items-center font-bold absolute top-0 right-0' + ' ' + percentageBubble">{{ metricScore }}%</div>
        </div>
    </BaseCard>
</template>