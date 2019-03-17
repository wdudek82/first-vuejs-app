import Vue from 'vue';
import App from './App.vue';
import User from './components/User';

Vue.component('app-global-user', User);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
