const questionRepository = require('../repository/question.repository');

module.exports = class QuestionBusiness {
    constructor() {
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);
    }

    getAllQuestions() {
        return questionRepository.getAllQuestions();
    }

    getSingleQuestion(questionId) {
        return questionRepository.findById(questionId);
    }
}