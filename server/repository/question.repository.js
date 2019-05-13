const QuestionModel = require('../db/models/question');

class QuestionRepository {
    constructor() { 
        this.questionModel = QuestionModel.getModel();

        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.findById = this.findById.bind(this);
        this.newQuestion = this.newQuestion.bind(this);
    }

    getAllQuestions() {
        return new Promise((resolve, reject) => {
            this.questionModel.find({})
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    findById(_id) {
        return new Promise((resolve, reject) => {
            this.questionModel.find({_id})
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    newQuestion(data) {
        return new Promise((resolve, reject) => {
            this.questionModel.newQuestion(data).save()
                .then(() => resolve())
                .catch(err => reject(err));
        });
    }
}

const questionRepository = new QuestionRepository();

module.exports = questionRepository;