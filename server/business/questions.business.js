const questionRepository = require('../repository/question.repository');
const checkAnswerDTO = require('../dto/checkAnswer.dto');
const getAnswerDTO = require('../dto/getAnswer.dto');

module.exports = class QuestionBusiness {
    constructor() {
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    getAllQuestions() {
        return new Promise((resolve, reject) => {
            questionRepository.getAllQuestions()
                .then(data => resolve(data.map(item => getAnswerDTO(item))))
                .catch(err => reject(err));
        })
    }

    getSingleQuestion(questionId) {
        return new Promise((resolve, reject) => {
            questionRepository.findById(questionId)
                .then(data => resolve(getAnswerDTO(data[0])))
                .catch(err => reject(err));
        })
    }

    checkAnswer(_id, answer) {
        return new Promise((resolve, reject) => {
            questionRepository.findById(_id)
                .then((data) => {
                    let app = {};
                    app.answerId = _id;
                    app.isCorrect = data[0].correctAnswer === answer;
                    resolve(checkAnswerDTO(app));
                })
                .catch(err => reject(err)); 
        });
    }
}