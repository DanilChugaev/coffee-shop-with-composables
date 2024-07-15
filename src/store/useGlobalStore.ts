import { ref } from 'vue';
import { ICoffeeCard, ICoffeeServerCard } from '../types';

const COFFEE_URL = 'https://api.sampleapis.com/coffee/hot';
const COLORS = {
  0: '#a4b43d',
  1: '#b4573d',
  2: '#cf7146',
  3: '#f17922',
  4: '#bca796',
  5: '#b7ad9f',
  6: '#ecbd7b',
  7: '#edd98e',
  8: '#aba56c',
  9: '#90c2ba',
  10: '#deb764',
};

const coffeeList = ref<ICoffeeCard[]>([]);
// const selectedCoffee = ref<ICoffeeCard[]>([]);

export const useGlobalStore = () => {
  const _getRandomIndex = (): number => {
    return Math.floor(Math.random() * 10);
  };

  const fetchCoffee = async () => {
    const response = await fetch(COFFEE_URL);
    const result: ICoffeeServerCard[] = await response.json();

    coffeeList.value = result.map(item => ({
      ...item,
      ingredients: item.ingredients.map(ingredient => ({
        color: COLORS[_getRandomIndex()],
        title: ingredient,
      }))
    }));
  };

  return {
    // selectedCoffee,
    coffeeList,
    fetchCoffee,
  };
};
