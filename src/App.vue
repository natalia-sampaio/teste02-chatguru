<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-light-green flex justify-between p-4 font-nunito">
    <div class="text-dark-green font-semibold">
      <h2>Respostas da métrica</h2>
      <h1 class="text-xl">Atendimento Suporte ChatGuru</h1>
    </div>
    <button class="uppercase bg-green rounded px-4 text-light-gray">Voltar a lista</button>
  </header>

  <RouterView />
</template>
