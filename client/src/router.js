import Vue from 'vue';
import Router from 'vue-router';
import gamecontainer from './components/gamecontainer/GameContainer.vue';
import addquestion from './components/addquestion/AddQuestion.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: gamecontainer
    },
    {
      path: '/addquestion',
      name: 'about',
      component: addquestion
    }
  ]
})
