import QuestionService from '../../services/question.service';

const getters = {
  GET_ALL_QUESTIONS: state => state.questions,
  GET_SINGLE_QUESTION: (state) => {
    return state.questions.find(question => question.answered === false) || {};
  }
};

// actions
const actions = {
  FETCH_ALL_QUESTIONS({ commit }, { vm }) {
    return new Promise((resolve, reject) => {
      commit('ui/UPDATE_LOADING_STATUS', { loading: true }, { root: true });
      QuestionService.fetchAllQuestions()
        .then(data => commit('SAVE_QUESTIONS', data))
        .then(() => commit('RESET_QUESTIONS'))
        .then(() => resolve())
        .catch(err => {
          vm.$notify({
            group: 'notify',
            title: 'Errore',
            text: 'Errore durante il reperimento delle domande',
            type: 'error',
          });
          reject(err);
        })
        .finally(() => {
          setTimeout(() => 
            commit('ui/UPDATE_LOADING_STATUS', { loading: false }, { root: true }), 800);
        });
    })
  },
  UPDATE_QUESTION({ commit }, payload) {
    commit('UPDATE_QUESTION', payload);
  },
  RESET_ANSWERED_QUESTION({ commit }) {
    commit('RESET_QUESTIONS');
  },
  VALIDATE_QUESTION({ commit }, question) {
    QuestionService.validateAnswer(question.id, question.value)
      .then(data => commit('VALIDATE_QUESTION', data))
      // eslint-disable-next-line no-console
      .catch(err => console.error(err))
  }
};

// mutations
const mutations = {
  SAVE_QUESTIONS(state, payload) {
    state.questions = payload;
  },
  RESET_QUESTIONS(state) {
    state.questions = state.questions.map((question) => {
      question['answered'] = false;
      question['correct'] = null;
      question['description'] = '';
      return question;
    });
  },
  VALIDATE_QUESTION(state, payload) {
    state.questions = state.questions.map((question) => {
      if (question.id === payload.id) {
        question.answered = true;
        question.correct = payload.isCorrect;
        question.description = payload.description;
      }
      return question;
    });
  },
};

// initial state
const state = {
  questions: [],
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};