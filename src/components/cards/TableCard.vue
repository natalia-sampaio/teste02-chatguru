<script setup>
import BaseCard from './BaseCard.vue';

const scores = Array.from(Array(11).keys());
</script>

<template>
    <BaseCard>
        <div>
            <h4>Porcentagem por nota</h4>
            <table class="w-full capitalize mt-4">
                <thead class="border-t border-b-2 border-light-grayish-blue text-left">
                    <tr>
                        <th class="">#</th>
                        <th class="">Nota</th>
                        <th class="">Quant.</th>
                        <th class="">%</th>
                    </tr>
                </thead>
                <tbody class="font-bold">
                    <tr v-for="score in scores" class="border-b border-light-grayish-blue" :class="score <= 6 ? 'text-red' : score <= 8 ? 'text-yellow' : 'text-green'">
                        <td class="">#</td>
                        <td class="">{{ score }}</td>
                        <td class="">0</td>
                        <td class="">0.0%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </BaseCard>
</template>