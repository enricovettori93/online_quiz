import questionService from '../../services/question.service';

export default {
  name: 'gamecontainer',
  components: {},
  props: [],
  data () {
    return {
      question: undefined,
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
    }
  }
}
