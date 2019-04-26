const questionRepository = require('../repository/question.repository');

module.exports = class QuestionBusiness {
    constructor() {
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    getAllQuestions() {
        return questionRepository.getAllQuestions();
    }

    getSingleQuestion(questionId) {
        return questionRepository.findById(questionId);
    }

    checkAnswer(_id, answer) {
        return new Promise((resolve, reject) => {
            questionRepository.findById(_id)
                .then((data) => {
                    resolve(data[0].correctAnswer === answer);
                })
                .catch(err => reject(err)); 
        });
    }
}