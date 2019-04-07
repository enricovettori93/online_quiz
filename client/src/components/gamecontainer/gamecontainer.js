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
        return (this.dataReturned) ? 'btn-success' : 'btn-danger';
      } else {
        return '';
      }
    }
  },
  mounted () {

  },
  created() {
    this.getQuestion();
  },
  methods: {
    getQuestion: function() {
      this.resetForm();
      let data = questionService.getNewQuestion();
      this.question = data.newQuestion;
      this.newQuestionAvaiable = data.avaiable;
      if (!data.avaiable) {
        this.answered = userService.getQuestionAnswered();
        this.lengthtotal = this.answered.length;
        this.lengthcorrect = this.answered.filter(item => item.index === item.correctAnswer).length;
      }
    },
    postQuestion: function() {
      this.dataReturned = questionService.validateAnswer(this.question.id, this.answer);
    },
    resetForm: function() {
      this.question = '';
      this.answer = '';
      this.dataReturned = '';
      this.lengthcorrect = '';
      this.lengthtotal = '';
      this.answered = '';
    },
    playAgain: function() {
      userService.resetQuestionAnswered();
      this.getQuestion();
    }
  }
}
