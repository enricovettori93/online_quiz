<template>
  <div id="app">
    <notifications group="notify"/>
    <div v-if="loading" id="loader">
      <img src="./assets/loader.gif" alt="">
    </div>
    <div id="nav">
      <router-link to="/">Gioca</router-link> |
      <router-link to="/addquestion">Aggiungi una domanda</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.$root.$on('enable-loader', () => {
      this.loading = true;
    });
    this.$root.$on('disable-loader', () => {
      this.loading = false;
    });
  }
}
</script>

<style lang="scss" scoped>
  #loader {
    background-color: white;
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    margin-top: -35px;
  }
</style>