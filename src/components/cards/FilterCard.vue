<script setup>
import BaseCard from './BaseCard.vue';
import ButtonGreen from '../buttons/ButtonGreen.vue';
import DateInput from '../forms/DateInput.vue';
import FormItem from '../forms/FormItem.vue';
import SelectInput from '../forms/SelectInput.vue';


const scores = Array.from(Array(11).keys());

</script>

<template>
    <BaseCard class="font-nunito">
        <h3 class="uppercase font-semibold mb-4">Filtros de datas</h3>
        <div class="grid grid-cols-5 gap-x-10 font-lato text-grayish-blue mb-6">
            <FormItem :label="'Período predefinido'">
                <SelectInput>
                    <option value="ultimos 30 dias">Últimos 30 dias</option>
                    <option value="ultimos 90 dias" selected>Últimos 90 dias</option>
                    <option value="ultimos 120 dias">Últimos 120 dias</option>
                </SelectInput>
            </FormItem>
            <FormItem :label="'Filtrar por nota'">
                <SelectInput>
                    <option value="Selecione" selected>Selecione</option>
                    <option v-for="score in scores" :value="score">{{ score }}</option>
                </SelectInput>
            </FormItem>
            <FormItem :label="'Data inicial:'">
                <DateInput :ariaLabel="'Data inicial'" />
            </FormItem>
            <FormItem :label="'Data final:'">
                <DateInput :ariaLabel="'Data final'" />
            </FormItem>
            <ButtonGreen :name="'Filtrar'" class="self-center" />
        </div>
    </BaseCard>
</template>