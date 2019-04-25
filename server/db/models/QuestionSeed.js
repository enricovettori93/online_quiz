const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
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
let questionModel = mongoose.model('Question', questionSchema);;

module.exports = {
    questionModel,
};
