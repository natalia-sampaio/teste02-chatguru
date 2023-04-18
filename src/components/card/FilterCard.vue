<script setup>
import BaseCard from './BaseCard.vue';
import ButtonGreen from '../buttons/ButtonGreen.vue';
import DateInput from '../form/DateInput.vue';
import FormItem from '../form/FormItem.vue';
import SelectInput from '../form/SelectInput.vue';


const scores = Array.from(Array(11).keys());

</script>

<template>
    <BaseCard>
        <h3 class="uppercase font-semibold">Filtros de datas</h3>
        <div class="flex justify-between font-lato text-grayish-blue">
            <FormItem :label="'Período predefinido'">
                <SelectInput>
                    <option value="ultimos 30 dias">Últimos 30 dias</option>
                    <option value="ultimos 90 dias">Últimos 90 dias</option>
                    <option value="ultimos 120 dias">Últimos 120 dias</option>
                </SelectInput>
            </FormItem>
            <FormItem :label="'Filtrar por nota'">
                <SelectInput>
                    <option v-for="score in scores" :value="score">{{ score }}</option>
                </SelectInput>
            </FormItem>
            <FormItem :label="'Data inicial:'">
                <DateInput :ariaLabel="'Data inicial'" />
            </FormItem>
            <FormItem :label="'Data final:'">
                <DateInput :ariaLabel="'Data final'" />
            </FormItem>
            <ButtonGreen :name="'Filtrar'" />
        </div>
    </BaseCard>
</template>