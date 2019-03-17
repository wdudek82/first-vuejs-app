<template>
  <div id="user">
    <h3>The User</h3>
    <p>My username is {{ username }}</p>
    <Info />
  </div>
</template>

<script>
import Info from './Info.vue';

export default {
  components: {
    Info,
  },
  data() {
    return {
      username: 'Max',
    };
  },
};
</script>

<style scoped>
  p {
    font-style: italic;
  }
</style>
