<script setup>
import { getMetrics } from '../../services/npsRequests';
import DoughnutChart from '../charts/DoughnutChart.vue';
import BaseCard from './BaseCard.vue';

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
    <BaseCard>
        <h4>Quantidade por tipo</h4>
        <div class="flex justify-evenly my-8">
            <DoughnutChart 
            :data="{
                labels: ['PROMOTORES'],
                datasets: [
                {
                    backgroundColor: ['#41B883', '#EBEBEB'],
                    borderWidth: 0,
                    data: [metrics.promoters, metrics.total_answered-metrics.promoters]
                }
                ]
            }" />
            <DoughnutChart 
            :data="{
                labels: ['PASSIVOS'],
                datasets: [
                {
                    backgroundColor: ['#fbcd54', '#EBEBEB'],
                    borderWidth: 0,
                    data: [metrics.passives, metrics.total_answered - metrics.passives]
                }
                ]
            }" />
            <DoughnutChart 
            :data="{
                labels: ['DETRATORES'],
                datasets: [
                {
                    backgroundColor: ['#F7617D', '#EBEBEB'],
                    borderWidth: 0,
                    data: [metrics.detractors, metrics.total_answered - metrics.detractors]
                }
                ]
            }" />
        </div>
    </BaseCard>
</template>