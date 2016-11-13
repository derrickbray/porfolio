import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import Contact from './routes/contact.vue';
import Marvel from './routes/marvel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/marvel',
    name: 'marvel',
    component: Marvel,
  },
  // {
  //   path: '/detail/:id',
  //   name: 'detail',
  //   component: Detail,
  //
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
