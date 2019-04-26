const express = require('express');
const router = express.Router();
const QuestionController = require('./questions.controller');

const questionController = new QuestionController();

router.get('/', questionController.getAllQuestions);
router.get('/:questionId', questionController.getSingleQuestion);
router.post('/:questionId', questionController.checkAnswer);

module.exports = router;