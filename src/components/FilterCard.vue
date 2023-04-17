<script setup>
import BaseCard from './BaseCard.vue';


</script>

<template>
    <BaseCard>
        <h3 class="uppercase font-semibold">Filtros de datas</h3>
        <form class="font-lato text-grayish-blue">
            <label for="period">Período predefinido</label>
            <select name="period" id="period" class="bg-white p-6 border-b border-light-grayish-blue">
                <option value="ultimos 30 dias">Últimos 30 dias</option>
                <option value="ultimos 90 dias">Últimos 90 dias</option>
                <option value="ultimos 120 dias">Últimos 120 dias</option>
            </select>
        </form>
    </BaseCard>
</template>