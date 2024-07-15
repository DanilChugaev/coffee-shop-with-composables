<script setup lang="ts">
import UiHeader from './components/ui-header.vue';
</script>

<template>
  <main class="main">
    <ui-header />

    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@import "./assets/scss/index.scss";

.main {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
