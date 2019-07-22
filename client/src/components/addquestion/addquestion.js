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
  computed: {

  },
  mounted () {

  },
  methods: {
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
              group: 'newquestion',
              title: 'Nuova domanda',
              text: 'La domanda è stata aggiunta con successo',
              type: 'success',
            });
          })
          .catch((err) => {
            this.$notify({
              group: 'newquestion',
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
