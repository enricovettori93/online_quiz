
const getters = {
  // controllers will use getter to access the vuex state
  payload: state => state.payload,
};

// actions
const actions = {
  goTo({ commit }, payload) {
    // do stuff and call mutations
    commit('goTo', payload);
  },
};

// mutations
const mutations = {
  goTo(state, payload) {
    // here I mutate the state
    state.payload = payload;
  },
};

// initial state
const state = {
  payload: null,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
  