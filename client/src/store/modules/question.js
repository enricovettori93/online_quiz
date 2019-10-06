import QuestionService from '../../services/question.service';

const getters = {
  GET_INGAME_STATUS: state => state.ingame,
  GET_ALL_QUESTIONS: state => state.questions,
  GET_SINGLE_QUESTION: (state) => {
    return state.questions.find(question => question.answered === false) || {};
  },
  GET_NUMBER_CORRECT_ANSWERS: (state) => {
    return state.questions.filter(question => question.answered === true && question.correct === true).length;
  },
};

// actions
const actions = {
  CHANGE_INGAME_STATUS({ commit }, status) {
    commit('CHANGE_INGAME_STATUS', status);
  },
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
    return new Promise((resolve, reject) => {
      QuestionService.validateAnswer(question.id, question.value)
      .then((data) => {
        commit('VALIDATE_QUESTION', data);
        resolve(data);
      })
      .catch(err => reject(err))
    })
  }
};

// mutations
const mutations = {
  CHANGE_INGAME_STATUS(state, payload) {
    state.ingame = payload;
  },
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
  ingame: true,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};