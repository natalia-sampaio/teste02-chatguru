<script setup>
import { getMetrics } from '../../services/npsRequests';
import GaugeChart from '../charts/GaugeChart.vue';

</script>
<script>
export default {
    data() {
        return {
            metrics: {}
        }
    },
    async beforeMount() {
        this.metrics = await getMetrics();
    }
}
</script>

<template>
    <div class="rounded mx-4 my-6 p-6 shadow-lg bg-dark-gray text-center text-green">
        <h4>score da métrica</h4>
        <span class="text-7xl font-bold">{{ metrics.score }}</span>
        <GaugeChart />
    </div>
</template>