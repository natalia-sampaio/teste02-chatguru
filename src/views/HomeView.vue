<script setup>
import MetricsCard from '../components/cards/MetricsCard.vue';
import FilterCard from '../components/cards/FilterCard.vue';
import ScoreCard from '../components/cards/ScoreCard.vue';
import TableCard from '../components/cards/TableCard.vue';
import ChartsCard from '../components/cards/ChartsCard.vue';
import AnswersListCard from '../components/cards/AnswersListCard.vue';

defineProps({
  desktop: Boolean
})
</script>

<template>
  <main>
    <FilterCard />
    <div v-if="desktop" class="grid grid-cols-5 font-lato uppercase">
      <MetricsCard textColor="text-green" percentageBubble="text-white bg-green"/>
      <MetricsCard textColor="text-yellow" percentageBubble="text-dark-gray bg-yellow"/>
      <MetricsCard textColor="text-red" percentageBubble="text-white bg-red"/>
      <MetricsCard textColor="text-black" percentageBubble="text-white bg-black"/>
      <TableCard class="row-span-2" />
      <ScoreCard />
      <ChartsCard class="col-span-3" />
    </div>
    <div v-else class="grid grid-cols-2 font-lato uppercase">
      <MetricsCard textColor="text-green" percentageBubble="text-white bg-green"/>
      <MetricsCard textColor="text-yellow" percentageBubble="text-dark-gray bg-yellow"/>
      <MetricsCard textColor="text-red" percentageBubble="text-white bg-red"/>
      <MetricsCard textColor="text-black" percentageBubble="text-white bg-black"/>
      <ScoreCard />
      <TableCard />
      <ChartsCard class="col-span-2" />
    </div>
    <AnswersListCard />
  </main>
</template>
