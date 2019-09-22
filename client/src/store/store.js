import Vue from 'vue';
import Vuex from 'vuex';

import question from './modules/question';
import ui from './modules/ui';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    question,
  },
});
