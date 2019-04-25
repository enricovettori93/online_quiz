const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    question: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    answer1: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    answer2: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    answer3: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    answer4: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    correctAnswer: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    imageName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    }
});

// questionModel will be singleton
let questionModel;

function getSchema() {
    return questionSchema;
};

function getModel() {
    if (!questionModel) {
        questionModel = mongoose.model('Question', getSchema());
    }
    return questionModel;
};

function newQuestion(data) {
    let _questionModel = getModel();
    let question = new _questionModel(data);
    return question;
};

module.exports = {
    getModel,
    getSchema,
    newQuestion,
};
