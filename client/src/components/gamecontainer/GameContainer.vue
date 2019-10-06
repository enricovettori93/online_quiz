<template>
  <div class="gamecontainer">
    <div class="container-fluid game">
      <div v-if="inGame" class="ingame">
        <h1>{{ question.question }}</h1>
        <img v-bind:src="question.imagePath" alt="gameImg" class="gameimg">
        <form @submit.prevent="postQuestion">
          <div class="btn-group btn-group-toggle row">
            <div class="col-6 single-button" v-for="item in question.answers" :key="item.index">
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
        <end-game/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import EndGame from './EndGame.vue';
  import questionService from '../../services/question.service';

  export default {
    name: 'gamecontainer',
    components: {
      EndGame
    },
    props: [],
    data () {
      return {
        question: {},
        answer: '',
        dataReturned: '',
        answered: ''
      }
    },
    computed: {
      ...mapGetters({
        inGame: 'question/GET_INGAME_STATUS',
      }),
      lengthtotal() {
        return this.$store.state.question.questions.length;
      },
      classAnswer() {
        if (this.dataReturned !== '') {
          return (this.dataReturned.isCorrect) ? 'btn-success' : 'btn-danger';
        } else {
          return '';
        }
      }
    },
    mounted () {},
    watch: {
      inGame(newValue, oldValue) {
        if (newValue === true && oldValue === false) {
          this.fetchQuestion();
        }
      }
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
        if (Object.keys(this.question).length === 0) {
          this.$store.dispatch('question/CHANGE_INGAME_STATUS', false);
        }
      },
      getQuestion: function() {
        this.resetForm();
        this.fetchQuestion();
      },
      postQuestion: function() {
        this.$store.dispatch('question/VALIDATE_QUESTION', { id: this.question.id, value: this.answer })
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
        this.answer = '';
        this.dataReturned = '';
        this.answered = '';
        this.answers = [];
      },
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