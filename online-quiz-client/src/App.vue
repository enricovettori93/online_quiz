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