<script setup>
import MetricsCard from '../components/cards/MetricsCard.vue';
import FilterCard from '../components/cards/FilterCard.vue';
import ScoreCard from '../components/cards/ScoreCard.vue';
import TableCard from '../components/cards/TableCard.vue';
import ChartsCard from '../components/cards/ChartsCard.vue';

</script>

<template>
  <main>
    <FilterCard />
    <div class="grid grid-cols-5 grid-rows-2 font-lato uppercase">
      <MetricsCard :textColor="'text-green'" :percentageBubble="'text-white bg-green'"/>
      <MetricsCard :textColor="'text-yellow'" :percentageBubble="'text-dark-gray bg-yellow'"/>
      <MetricsCard :textColor="'text-red'" :percentageBubble="'text-white bg-red'"/>
      <MetricsCard :textColor="'text-black'" :percentageBubble="'text-white bg-black'"/>
      <TableCard class="row-span-2" />
      <ScoreCard />
      <ChartsCard class="col-span-3" />
    </div>
  </main>
</template>
