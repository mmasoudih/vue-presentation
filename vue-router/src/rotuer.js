import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import Home from './index.vue';
import Contact from './contact.vue';
import Shop from './shop.vue';


const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory();
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;