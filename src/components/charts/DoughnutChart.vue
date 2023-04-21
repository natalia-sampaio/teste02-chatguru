<script setup>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as chartConfig from '../../services/doughnutChartConfig.js';

ChartJS.register(ArcElement, Tooltip, Legend);

</script>

<template>
    <div class="w-1/3">
        <Doughnut
        :data="chartConfig.data"
        :options="chartConfig.options"
        :plugins="chartConfig.plugins" />
    </div>
    
</template>