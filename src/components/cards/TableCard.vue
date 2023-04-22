<script setup>
import BaseTable from '../tables/BaseTable.vue';
import BaseCard from './BaseCard.vue';

const scores = Array.from(Array(11).keys());
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
                <tr v-for="score in scores" class="border-b border-light-grayish-blue" :class="score <= 6 ? 'text-red' : score <= 8 ? 'text-yellow' : 'text-green'">
                    <td>#</td>
                    <td>{{ score }}</td>
                    <td>0</td>
                    <td>0.0%</td>
                </tr>
            </template>
        </BaseTable>
    </BaseCard>
</template>