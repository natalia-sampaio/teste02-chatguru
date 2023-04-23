<script setup>
import FilterCard from '../components/cards/FilterCard.vue';
import ScoreCard from '../components/cards/ScoreCard.vue';
import TableCard from '../components/cards/TableCard.vue';
import ChartsCard from '../components/cards/ChartsCard.vue';
import AnswersListCard from '../components/cards/AnswersListCard.vue';
import MetricsCards from '../components/GroupOfMetricsCards.vue';

defineProps({
  desktop: Boolean
})
</script>

<template>
  <main>
    <FilterCard />
    <div v-if="desktop" class="grid grid-cols-5 font-lato uppercase">
      <MetricsCards />
      <TableCard class="row-span-2"/>
      <ScoreCard />
      <ChartsCard class="col-span-3" />
    </div>
    <div v-else class="grid grid-cols-2 font-lato uppercase">
      <MetricsCards />
      <ScoreCard />
      <TableCard />
      <ChartsCard class="col-span-2" />
    </div>
    <AnswersListCard />
  </main>
</template>
