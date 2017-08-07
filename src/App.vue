<template>
  <div id="app">
      <router-link to="/home"><img id="logo" src="./assets/logo.png" /></router-link>
      <p>
        <router-link to="/record">Record Outfit</router-link>
        <router-link to="/history">History</router-link>
      </p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  width: 300px;
  border: 0;
}
</style>