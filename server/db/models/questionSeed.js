const mongoose = require('mongoose');
const question = require('./question');
let questionModel = mongoose.model('Question', question.getSchema());;

module.exports = {
    questionModel,
};
