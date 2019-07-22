<template>
  <div id="app">
    <notifications group="foo" />
    <div id="nav">
      <router-link to="/">Gioca</router-link> |
      <router-link to="/addquestion">Aggiungi una domanda</router-link>
    </div>
    <router-view/>
  </div>
</template>