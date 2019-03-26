import questionService from '../../services/question.service';

export default {
  name: 'gamecontainer',
  components: {},
  props: [],
  data () {
    return {
      question: '',
      answer: '',
      dataReturned: '',
      aaa: '',
    }
  },
  computed: {

  },
  mounted () {

  },
  created() {
    this.getQuestion();
  },
  methods: {
    getQuestion: function() {
      this.question = questionService.getNewQuestion();
    },
    postQuestion: function() {
      // eslint-disable-next-line no-console
      console.log(`Sending data ${this.answer}`);
      this.dataReturned = questionService.validateAnswer(this.question.id, this.answer);
    },
  }
}
