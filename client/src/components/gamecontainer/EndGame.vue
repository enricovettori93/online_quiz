<template>
  <div class="endgame">
    <h1>Hai completato tutte le domande!</h1>
    <div>
      <p>
        Hai risposto correttamente a {{ lengthcorrect }} {{ lengthcorrect === 1 ? 'domanda' : 'domande'}} su {{ lengthtotal }}.
      </p>
      <p v-for="(answer, index) in questions" :key="index">
        Domanda {{ index }}: {{ answer.correct ? 'Risposta giusta' : 'Risposta sbagliata'}}
      </p>
      <div>
        <button v-on:click="playAgain" class="btn btn-primary">Riprova</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
  ...mapGetters({
      lengthcorrect: 'question/GET_NUMBER_CORRECT_ANSWERS',
    }),
  },
  data() {
    return {
      questions: this.$store.state.question.questions,
      lengthtotal: this.$store.state.question.questions.length
    }
  },
  methods: {
    playAgain: function() {
      this.$store.dispatch('question/RESET_ANSWERED_QUESTION');
      this.$store.dispatch('question/CHANGE_INGAME_STATUS', true);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>