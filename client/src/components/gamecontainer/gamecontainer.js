import questionService from '../../services/question.service';
import userService from '../../services/user.service';

export default {
  name: 'gamecontainer',
  components: {},
  props: [],
  data () {
    return {
      question: '',
      answer: '',
      answers: [],
      dataReturned: '',
      newQuestionAvaiable: true,
      lengthcorrect: '',
      lengthtotal: '',
      answered: ''
    }
  },
  computed: {
    classAnswer: function() {
      if (this.dataReturned !== '') {
        return (this.dataReturned.isCorrect) ? 'btn-success' : 'btn-danger';
      } else {
        return '';
      }
    }
  },
  mounted () {

  },
  created() {
    questionService.fetchAllQuestions()
      .then(() => this.getQuestion())
      .catch((err) => {
        this.$notify({
          group: 'notify',
          title: 'Errore',
          text: 'Errore durante il reperimento delle domande',
          type: 'error',
        });
        console.error(err);
      });
  },
  methods: {
    getQuestion: function() {
      this.resetForm();
      questionService.getNewQuestion()
        .then((returnData) => {
          let data = returnData;
          this.answers.push({
            index: 0,
            value: returnData.newQuestion.answer1,
          });
          this.answers.push({
            index: 1,
            value: returnData.newQuestion.answer2,
          });
          this.answers.push({
            index: 2,
            value: returnData.newQuestion.answer3,
          });
          this.answers.push({
            index: 3,
            value: returnData.newQuestion.answer4,
          });
          this.question = data.newQuestion;
          this.newQuestionAvaiable = data.avaiable;
          if (!data.avaiable) {
            this.answered = userService.getQuestionAnswered();
            this.lengthtotal = this.answered.length;
            this.lengthcorrect = this.answered.filter(item => item.isCorrect).length;
          }
        })
    },
    postQuestion: function() {
      questionService.validateAnswer(this.question.id, this.answer)
        .then(data => this.dataReturned = data)
        .catch((err) => {
          this.$notify({
            group: 'notify',
            title: 'Errore',
            text: 'Errore durante il reperimento delle domande',
            type: 'error',
          });
          console.error(err);
        });
    },
    resetForm: function() {
      this.question = '';
      this.answer = '';
      this.dataReturned = '';
      this.lengthcorrect = '';
      this.lengthtotal = '';
      this.answered = '';
      this.answers = [];
    },
    playAgain: function() {
      userService.resetQuestionAnswered();
      this.getQuestion();
    }
  }
}
