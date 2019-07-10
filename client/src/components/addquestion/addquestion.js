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
    },
    filesChange(files) {
      this.file = files[0] || null;
    }
  }
}
