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
    },
    postQuestion: function() {
      this.dataReturned = questionService.validateAnswer(this.question.id, this.answer);
    },
    resetForm: function() {
      this.question = '',
      this.answer = '',
      this.dataReturned = ''
    },
    playAgain: function() {
      userService.resetQuestionAnswered();
      this.getQuestion();
    }
  }
}
