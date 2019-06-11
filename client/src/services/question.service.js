import axios from 'axios';
import userService from './user.service';

//TODO: remove hardcode axios call
class QuestionService {
    constructor() {
        this.questions = [];

        this.fetchAllQuestions = this.fetchAllQuestions.bind(this);
        this.getNewQuestion = this.getNewQuestion.bind(this);
    }

    fetchAllQuestions() {
        return new Promise((resolve, reject) => {
            axios.get('http://127.0.0.1:3005/api/questions')
                .then((data) => {
                    this.questions = data.data;
                    resolve();
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    getNewQuestion() {
        return new Promise((resolve) => {
            if (this.questions.length === userService.questionAnswered.length) {
                resolve({
                    avaiable: false,
                    message: 'Hai completato tutte le domande',
                    newQuestion: {},
                });
            }
            const answered = userService.getQuestionAnswered().map(item => item.id);
            const avaiable = [];
            this.questions.forEach((question) => {
                if (answered.indexOf(question.id) === -1) {
                    avaiable.push(question);
                }
            });
            resolve({
                avaiable: true,
                message: '',
                newQuestion: avaiable[0],
            })
        });
    }

    validateAnswer(questionId, value) {
        return new Promise((resolve, reject) => {
            axios.post(`http://127.0.0.1:3005/api/questions/${questionId}`, { answer: value })
                .then((response) => {
                    userService.pushQuestionAnswered(response.data.id, response.data.isCorrect);
                    resolve(response.data);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    }
}

const questionService = new QuestionService;
export default questionService;