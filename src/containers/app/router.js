import Vue from 'vue';
import VueRouter from 'vue-router';

import Root from './Root/App.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    component: Root,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
