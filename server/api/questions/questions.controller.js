const QuestionBusiness = require('../../business/questions.business');

module.exports = class QuestionController {
    constructor() { 
        this.questionBusiness = new QuestionBusiness();
        
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.newQuestion = this.newQuestion.bind(this);
    }

    getAllQuestions(req, res) {
        this.questionBusiness.getAllQuestions()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(err.code).json(err.message));
    }

    getSingleQuestion(req, res) {
        this.questionBusiness.getSingleQuestion(req.params.questionId)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(err.code).json(err.message));
    }

    checkAnswer(req, res) {
        this.questionBusiness.checkAnswer(req.params.questionId, req.body.answer)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(err.code).json(err.message));
    }

    newQuestion(req, res) {
        this.questionBusiness.newQuestion(req.params.questionId, req.body.answer)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(err.code).json(err.message));
    }
}