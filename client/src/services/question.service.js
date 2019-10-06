import axios from 'axios';
// import userService from './user.service';
import { frontend } from '../config';

class QuestionService {
  constructor() {
    this.fetchAllQuestions = this.fetchAllQuestions.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
    this.postNewQuestion = this.postNewQuestion.bind(this);
  }

  fetchAllQuestions() {
    return new Promise((resolve, reject) => {
      axios.get(`${frontend.general.backendprotocol}${frontend.general.backendserver}:${frontend.general.backendport}/api/questions`)
        .then(data => resolve(data.data))
        .catch(err => reject(err));
    })
  }

  validateAnswer(questionId, value) {
    return new Promise((resolve, reject) => {
      axios.post(`${frontend.general.backendprotocol}${frontend.general.backendserver}:${frontend.general.backendport}/api/questions/${questionId}`, { answer: value })
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    })
  }

  postNewQuestion(newQuestion) {
    let formData = new FormData();
    Object.keys(newQuestion).forEach(item => formData.set(item, newQuestion[item]));
    return axios.post(`${frontend.general.backendprotocol}${frontend.general.backendserver}:${frontend.general.backendport}/api/questions`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

const questionService = new QuestionService;
export default questionService;