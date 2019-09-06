<template>
  <div id="app">
    <notifications group="notify"/>
    <transition name="fade">
      <div v-if="loading" id="loader">
        <img src="./assets/loader.gif" alt="">
      </div>
    </transition>
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>