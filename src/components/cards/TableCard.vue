<script setup>
import BaseTable from '../tables/BaseTable.vue';
import BaseCard from './BaseCard.vue';
import { getMetrics } from '@/services/npsRequests.js';

const scores = Array.from(Array(11).keys());

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
        <h4 class="uppercase font-semibold">Porcentagem por nota</h4>
        <BaseTable class="w-full h-5/6">
            <template #tableHeaders>
                <th>#</th>
                <th>Nota</th>
                <th>Quant.</th>
                <th>%</th>
            </template>
            <template #tableRows>
                <tr v-for="score in scores" class="border-b border-light-grayish-blue font-bold" :class="score <= 6 ? 'text-red' : score <= 8 ? 'text-yellow' : 'text-green'">
                    <td>#</td>
                    <td>{{ score }}</td>
                    <td>{{ metrics[`score_${score}`] }}</td>
                    <td>{{ (metrics[`score_${score}`]/metrics.total_answered * 100).toFixed(1) }}%</td>
                </tr>
            </template>
        </BaseTable>
    </BaseCard>
</template>