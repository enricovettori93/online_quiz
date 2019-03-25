import questionService from '../../services/question.service';

export default {
  name: 'gamecontainer',
  components: {},
  props: [],
  data () {
    return {
      question: '',
      answer: '',
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
    },
  }
}
