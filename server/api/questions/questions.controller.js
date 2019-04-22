const { SERVER_ERROR } = require('../../exceptions/messagges');
const QuestionBusiness = require('../../business/questions.business');

module.exports = class QuestionController {
    constructor() { 
        this.questionBusiness = new QuestionBusiness();
        
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);
    }

    getAllQuestions(req, res) {
        this.questionBusiness.getAllQuestions()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(SERVER_ERROR.code).json(err));
    }

    getSingleQuestion(req, res) {
        this.questionBusiness.getSingleQuestion(req.params.questionId)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(SERVER_ERROR.code).json(err));
    }
}