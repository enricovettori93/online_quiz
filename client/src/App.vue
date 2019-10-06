<template>
  <div id="app">
    <notifications group="notify"/>
    <loader/>
    <div id="nav">
      <router-link to="/">Gioca</router-link> |
      <router-link to="/addquestion">Aggiungi una domanda</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Loader from './components/Loader.vue';

  export default {
    components: {
      Loader
    },
    data() {
      return { }
    },
    mounted() { }
  }
</script>

<style lang="scss" scoped>

</style>