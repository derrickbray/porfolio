import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import Contact from './routes/contact.vue';
import Marvel from './routes/marvel.vue';
import Resume from './routes/resume.vue';
import Netflix from './routes/netflix.vue';
import Tshirts from './routes/t-shirts.vue';


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
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
  },
  {
    path: '/netflix',
    name: 'netflix',
    component: Netflix,
  },
  {
    path: '/t-shirts',
    name: 't-shirts',
    component: Tshirts,
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
