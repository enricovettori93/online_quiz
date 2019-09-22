<template>
  <div v-if="loading" class="loader">
    <img src="../assets/loader.gif" alt="">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        loading: 'ui/GET_LOADING_STATUS',
      }),
    }
  }
</script>

<style lang="scss" scoped>
  .loader {
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