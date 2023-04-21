<script setup>
import DoughnutChart from '../charts/DoughnutChart.vue';
import BaseCard from './BaseCard.vue';

</script>

<template>
    <BaseCard>
        <h4>Quantidade por tipo</h4>
        <div class="flex justify-evenly">
            <DoughnutChart />
            <DoughnutChart />
            <DoughnutChart />
        </div>
    </BaseCard>
</template>