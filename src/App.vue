<script setup lang="ts">
import { ref, inject } from 'vue';

import UiSwitch from './components/ui-switch.vue';

const toggleDarkMode = inject('toggleDarkMode');

const isDark = ref(toggleDarkMode());
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />

    <ui-switch v-model="isDark" @change="toggleDarkMode"/>

    <router-link :to="`${$basePath}/`">Index</router-link>
    <br>
    <router-link :to="`${$basePath}/home`">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
