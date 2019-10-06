<template>
  <div class="gamecontainer">
    <div class="container-fluid game">
      <div v-if="newQuestionAvaiable" class="ingame">
        <h1>{{ question.question }}</h1>
        <img v-bind:src="question.imagePath" alt="gameImg" class="gameimg">
        <form @submit.prevent="postQuestion">
          <div class="btn-group btn-group-toggle row">
            <div class="col-6 single-button" v-for="item in answers" :key="item.id">
              <label class="btn" v-bind:class="[classAnswer, (answer === item.value) ? 'btn-primary' : 'btn-light']">
                <input type="radio" :disabled="dataReturned !== ''" name="options" v-bind:id="item.index"
                  autocomplete="off" v-model="answer" v-bind:value="item.value">
                {{ item.value }}
              </label>
            </div>
          </div>
          <div class="send">
            <button type="submit" :hidden="dataReturned !== ''" class="btn btn-primary">Invia</button>
          </div>
        </form>
        <div class="nextquestion" v-if="dataReturned !== ''">
          <h1>Maggiori informazioni</h1>
          <p>{{ dataReturned.description }}</p>
          <button v-on:click="getQuestion" class="btn btn-primary">Prossima domanda</button>
        </div>
      </div>
      <div v-else class="nogame">
        <h1>Hai completato tutte le domande!</h1>
        <div>
          <p>
            Hai risposto correttamente a {{ lengthcorrect }} {{ lengthcorrect === 1 ? 'domanda' : 'domande'}} su {{ lengthtotal }}.
          </p>
          <p v-for="(answer, index) in answered" :key="index">
            Domanda {{ index }}: {{ answer.isCorrect ? 'Risposta giusta' : 'Risposta sbagliata'}}
          </p>
          <div>
            <button v-on:click="playAgain" class="btn btn-primary">Riprova</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import questionService from '../../services/question.service';

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
      this.$store.dispatch('question/RESET_ANSWERED_QUESTION');
      this.$store.dispatch('question/FETCH_ALL_QUESTIONS', { vm: this })
        .then(() => this.fetchQuestion())
        .catch(err => console.error(err));
    },
    methods: {
      fetchQuestion() {
        this.question = this.$store.getters['question/GET_SINGLE_QUESTION'];
      },
      getQuestion: function() {
        this.resetForm();
        this.fetchQuestion();
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
        this.$store.dispatch('question/RESET_ANSWERED_QUESTION');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/_variables';
  @import '../../styles/_colors';

  .gamecontainer {
    height: 100%;

    button {
      width: $width-button;
      height: $height-button;
    }

    .ingame {
      height: inherit;

      img {
        &.gameimg {
          margin-top: 1em;
          margin-bottom: 2em;
          border-radius: 20px;
        }
      }

      form {
        margin-bottom: 1em;

        div.send {
          margin-top: 1em;
        }

        .single-button {
          justify-content: center;
          display: flex;
          align-items: center;

          label {
            &.btn-light {
              border-color: $primary-black;
            }
            input[type="radio"] {
              display: none;
            }
            width: $width-button;
            height: $height-button;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .nextquestion {
          margin-bottom: 2em;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
    .gamecontainer {
      .ingame {
        img {
          &.gameimg {
            width: 40%;
          }
        }
      }
      .nextquestion {
        width: 70%;
        margin: 0 15%;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    .gamecontainer {
      .ingame {
        img {
          &.gameimg {
            width: 80%;
          }
        }
      }
    }
  }
</style>