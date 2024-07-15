<script setup lang="ts">
import { ICoffeeCard } from '../types';

defineProps<{
  coffee: ICoffeeCard,
}>();
</script>

<template>
  <div class="card">
    <div class="card__img-container">
      <span class="card__intensifier">{{ coffee.id }}</span>

      <img
          class="card__img"
          loading="lazy"
          :alt="coffee.title"
          :src="coffee.image"
      >
    </div>

    <div class="card__content">
      <div class="card__origin">Country</div>
      <div class="card__title">{{ coffee.title }}</div>
      <div class="card__description" :title="coffee.description">{{ coffee.description }}</div>

      <div class="card__ingredients-container" title="Ингредиенты">
        <span
          v-for="ingredient in coffee?.ingredients"
          :key="ingredient.id"
          class="card__ingredient"
          :style="{
            backgroundColor: ingredient.color,
          }"
        >
          {{ ingredient.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow:
      0 2px 1px -1px rgb(0 0 0 / 20%),
      0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
  border-radius: var(--border-radius);
  background-color: var(--color-bg-main);

  &__intensifier {
    position: absolute;
    top: var(--v-indent);
    right: var(--h-indent);
    color: var(--white-color);
    font-size: var(--title-size);
    font-weight: var(--subtitle-weight);
    text-shadow: 0 1px 3px var(--black-color);
  }

  &__img {
    object-fit: cover;
    width: var(--full-size);
    min-height: var(--img-height);
    height: var(--img-height);
  }

  &__content {
    text-align: start;
    padding: var(--v-indent) var(--h-indent);
  }

  &__origin {
    font-size: var(--subtitle-size);
    color: var(--subtitle-color);
  }

  &__title {
    font-size: var(--title-size);
    font-weight: var(--title-weight);
  }

  &__description {
    font-size: var(--subtitle-size);
  }

  &__title,
  &__description {
    margin-top: var(--v-indent);
  }

  &__origin,
  &__title,
  &__description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__ingredients-container {
    display: flex;
    overflow: auto;
    white-space: nowrap;
    margin-top: calc(2 * var(--v-indent));
    margin-bottom: -15px;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &__ingredient {
    display: inline-block;
    padding: var(--note-v-indent) var(--note-h-indent);
    border-radius: var(--border-radius);
    color: var(--white-color);
    font-weight: var(--subtitle-weight);
    font-size: var(--subtitle-size);

    & + .card__ingredient {
      margin-left: var(--note-indent-between-elements);
    }
  }
}
</style>
