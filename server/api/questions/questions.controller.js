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
        let questionData = {
            question: req.body.question,
            answer1: req.body.answer1,
            answer2: req.body.answer2,
            answer3: req.body.answer3,
            answer4: req.body.answer4,
            description: req.body.description,
            correctAnswer: req.body.correctAnswer,
            imageName: req.files.img.name
        };
        this.questionBusiness.newQuestion(questionData, req.files.img)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(err.code).json(err.message));
    }
}