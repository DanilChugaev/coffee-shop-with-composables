import { createRouter, createWebHistory } from 'vue-router';

import Feed from './pages/feed.vue';
import Cart from './pages/cart.vue';

const BASE_PATH = import.meta.env.VITE_BASE_PATH;

const routes = [
  { path: `${BASE_PATH}/`, component: Feed },
  { path: `${BASE_PATH}/home`, component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
