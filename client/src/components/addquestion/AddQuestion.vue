<template>
  <div class="addquestion">
    <h1>Aggiungi una domanda</h1>
    <div class="container">
      <form v-on:submit.prevent="goForm" class="newquestion">
        <input v-model="question" class="form-control" type="text" id="question" required :placeholder="formLabel.question">
        <input v-model="answer1" class="form-control" type="text" id="answer1" required :placeholder="formLabel.answer1">
        <input v-model="answer2" class="form-control" type="text" id="answer2" required :placeholder="formLabel.answer2">
        <input v-model="answer3" class="form-control" ype="text" id="answer3" required :placeholder="formLabel.answer3">
        <input v-model="answer4" class="form-control" type="text" id="answer4" required :placeholder="formLabel.answer4">
        <input v-model="correctAnswer" class="form-control" type="text" id="correctanswer" required :placeholder="formLabel.correct">
        <input v-model="description" class="form-control" type="text" id="description" required :placeholder="formLabel.description">
        <input accept="image/x-png,image/gif,image/jpeg" type="file" id="file" required @change="filesChange($event.target.files)">
        <label for="file">{{ formLabel.file }}</label>
        <button class="btn btn-primary">{{ formLabel.go }}</button>
      </form>
    </div>
  </div>
</template>

<script> 
/* eslint-disable no-console */
import questionService from '../../services/question.service';

export default {
  name: 'addquestion',
  components: {},
  props: [],
  data () {
    return {
      formLabel: {
        question: 'Inserisci la domanda',
        answer1: 'Inserisci la prima risposta',
        answer2: 'Inserisci la seconda risposta',
        answer3: 'Inserisci la terza risposta',
        answer4: 'Inserisci la quarta risposta',
        correct: 'Inserisci la risposta esatta',
        file: 'Inserisci l\'immagine',
        description: 'Inserisci la descrizione',
        go: 'Aggiungi la domanda'
      },
      question: null,
      answer1: null,
      answer2: null,
      answer3: null,
      answer4: null,
      correct: null,
      file: null,
      description: null,
      correctAnswer: null,
    }
  },
  computed: { },
  mounted () { },
  methods: {
    resetData() {
      this.question = null;
      this.answer1 = null;
      this.answer2 = null;
      this.answer3 = null;
      this.answer4 = null;
      this.correct = null;
      this.file = null;
      this.description = null;
      this.correctAnswer = null;
    },
    goForm() {
      // eslint-disable-next-line no-console
      console.log('subit del form');
      const body = {
        question: this.question,
        answer1: this.answer1,
        answer2: this.answer2,
        answer3: this.answer3,
        answer4: this.answer4,
        description: this.description,
        img: this.file,
        correctAnswer: this.correctAnswer,
      };
      if (this.correctAnswer !== this.answer1 &&
        this.correctAnswer !== this.answer2 &&
        this.correctAnswer !== this.answer3 &&
        this.correctAnswer !== this.answer4) {
          console.error('ahiahi');
      } else {
        questionService.postNewQuestion(body)
          .then(() => {
            this.$notify({
              group: 'notify',
              title: 'Nuova domanda',
              text: 'La domanda è stata aggiunta con successo',
              type: 'success',
            });
            this.resetData();
          })
          .catch((err) => {
            this.$notify({
              group: 'notify',
              title: 'Nuova domanda',
              text: 'Errore durante l\'inserimento della domanda',
              type: 'error',
            });
            console.error(err);
          });
      }
    },
    filesChange(files) {
      this.file = files[0] || null;
    }
  }
}
</script>

<style lang="scss" scoped>

.addquestion {
  .container {
    .newquestion{
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;

      input {
        margin: 7px;
      }
    }
  }
}
</style>