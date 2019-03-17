<template>
  <div id="app">
    <nav id="main-nav">
      <ul>
        <router-link
          tag="li"
          to="/"
          exact
        ><a>Home</a></router-link>
        <router-link
          tag="li"
          to="/blog"
        ><a>Blog</a></router-link>
        <router-link
          tag="li"
          to="/account"
        ><a>Account</a></router-link>
      </ul>
    </nav>
    <h1>App Component</h1>
    <router-view></router-view>
    <!--<app-global-user />-->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  }

  #main-nav {
    display: block;
    background: #333;
  }

  #main-nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 3rem;
  }

  #main-nav ul li {
    display: inline-block;
    /*height: 100%;*/
  }

  #main-nav ul li a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
  }

  #main-nav ul li a:hover {
    background: #555;
  }
</style>
