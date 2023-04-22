<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as chartConfig from '../../services/gaugeChartConfig.js';
import { Doughnut } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend);

</script>

<template>
    <div class="flex justify-center items-center">
        <Doughnut :data="chartConfig.data" :options="chartConfig.options" :plugins="chartConfig.plugins" />
    </div>
</template>