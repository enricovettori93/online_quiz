const path = require('path');
const questionRepository = require('../repository/question.repository');
const checkAnswerDTO = require('../dto/checkAnswer.dto');
const getAnswerDTO = require('../dto/getAnswer.dto');
const { BAD_REQUEST, SERVER_ERROR } = require('../exceptions/messagges');

module.exports = class QuestionBusiness {
    constructor() {
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.newQuestion = this.newQuestion.bind(this);
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
                .then((data) => {
                    (data && data.length !== 0) ? resolve(getAnswerDTO(data[0])) : reject(BAD_REQUEST);
                })
                .catch(err => reject(err));
        })
    }

    checkAnswer(_id, answer) {
        return new Promise((resolve, reject) => {
            questionRepository.findById(_id)
                .then((data) => {
                    if (!data || data.length === 0) {
                        reject(BAD_REQUEST);
                    }
                    let app = {};
                    app.answerId = _id;
                    app.isCorrect = data[0].correctAnswer === answer;
                    app.description = data[0].description;
                    resolve(checkAnswerDTO(app));
                })
                .catch(err => reject(err)); 
        });
    }

    newQuestion(data, image) {
        return new Promise((resolve, reject) => {
            questionRepository.newQuestion(data)
                .then(() => {
                    let uploadFolder = path.resolve(`../server/static/${image.name}`);
                    return image.mv(uploadFolder);
                })
                .then(() => resolve('New answer correctly inserted!'))
                .catch(err => reject(SERVER_ERROR));
        });
    }
}