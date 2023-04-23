<script setup>
import MetricsCard from './cards/MetricsCard.vue';
import { getMetrics, getMetricScore } from '../services/npsRequests';

</script>

<script>
export default {
    data() {
        return {
            metrics: {},
            getMetricScore: getMetricScore
        }
    },
    async beforeMount() {
        this.metrics = await getMetrics();
    }
}
</script>

<template>
    <MetricsCard 
        textColor="text-green" 
        percentageBubble="text-white bg-green"
        metricName="Promotores" 
        :metricValue="metrics.promoters" 
        :metricScore="getMetricScore(metrics.promoters, metrics.total_answered)" 
    />
    <MetricsCard 
        textColor="text-yellow" 
        percentageBubble="text-dark-gray bg-yellow"
        metricName="Passivos" 
        :metricValue="metrics.passives" 
        :metricScore="getMetricScore(metrics.passives, metrics.total_answered)"
    />
    <MetricsCard 
        textColor="text-red" 
        percentageBubble="text-white bg-red"
        metricName="Detratores" 
        :metricValue="metrics.detractors" 
        :metricScore="getMetricScore(metrics.detractors, metrics.total_answered)"
    />
    <MetricsCard 
        textColor="text-black" 
        percentageBubble="text-white bg-black"
        metricName="Total de respostas" 
        :metricValue="metrics.total_answered" 
        :metricScore="getMetricScore(metrics.total_answered, metrics.total_answered)"
    />
</template>