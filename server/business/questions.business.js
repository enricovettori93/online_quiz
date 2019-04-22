module.exports = class QuestionBusiness {
    constructor() {
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);
    }

    getAllQuestions() {
        return new Promise((resolve, reject) => {
            return resolve('Get all questions it works!');
        });
    }

    getSingleQuestion(questionId) {
        return new Promise((resolve, reject) => {
            return resolve(`Get single question it works with questionId: ${questionId}!`);
        });
    }
}