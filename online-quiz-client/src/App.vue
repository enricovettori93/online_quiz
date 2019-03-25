<template>
  <div id="app">
    <gamecontainer/>
  </div>
</template>

<script>
import gamecontainer from './components/gamecontainer/index.vue'

export default {
  name: 'app',
  components: {
    gamecontainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
