<script setup>
import ButtonGreen from './components/buttons/ButtonGreen.vue';
import HomeView from './views/HomeView.vue';
</script>

<script>
export default {
    data() {
        return {
            windowWidth: null,
            desktop: null
        };
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth >= 1280) {
                this.desktop = true;
                return;
            }
            this.desktop = false;
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    }
}
</script>

<template>
  <header class="bg-light-green flex justify-between p-4 font-nunito">
    <div class="text-dark-green font-semibold">
      <h2>Respostas da métrica</h2>
      <h1 class="text-xl">Atendimento Suporte ChatGuru</h1>
    </div>
    <ButtonGreen :name="'Voltar à lista'" />
  </header>

  <HomeView :desktop="desktop" />
</template>
