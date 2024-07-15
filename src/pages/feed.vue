<script setup lang="ts">
import { useGlobalStore } from '../store/useGlobalStore';
import { onMounted } from 'vue';
import UiCard from '../components/ui-card.vue';

const { fetchCoffee, coffeeList } = useGlobalStore();

onMounted(async () => {
  await fetchCoffee();
});
</script>

<template>
  <div class="feed">
    <ui-card
      v-for="coffee in coffeeList"
      :key="coffee.id"
      :coffee
    />
  </div>
</template>

<style scoped lang="scss">
  .feed {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(var(--card-width-min), var(--card-width-max)));
    gap: var(--main-indent);
    padding: var(--main-indent) var(--main-indent) 40px;
  }
</style>
