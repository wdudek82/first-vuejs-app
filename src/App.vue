<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <User />
    <Info />
    <app-global-user />
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
import User from './components/User.vue';
import Info from './components/Info.vue';

export default {
  name: 'App',
  components: {
    User,
    Info,
  },
};
</script>
