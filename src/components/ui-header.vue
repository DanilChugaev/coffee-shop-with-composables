<script setup lang="ts">
import {inject, ref} from 'vue';

import UiSwitch from './ui-switch.vue';

const toggleDarkMode = inject('toggleDarkMode');

const isDark = ref(toggleDarkMode());
</script>

<template>
  <header class="header">
    <img class="header__logo" alt="Vue logo" src="../assets/logo.png" />

    <div class="header__links">
      <router-link :to="`${$basePath}/`">Лента</router-link>
      <router-link :to="`${$basePath}/cart`">Корзина</router-link>
    </div>

    <div>
      <ui-switch v-model="isDark" @change="toggleDarkMode"/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  &__logo {
    width: 40px;
    height: 40px;
  }

  &__links {
    display: flex;
    gap: 10px;
  }
}
</style>
