import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import User from './components/User';
import Blog from './components/Blog';
import Account from './components/Account';

Vue.use(VueRouter);

const routes = [
  { path: '/blog', component: Blog },
  { path: '/account', component: Account },
  { path: '/', component: User },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false;

Vue.component('app-global-user', User);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
