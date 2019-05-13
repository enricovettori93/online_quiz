const express = require('express');
const QuestionController = require('./questions.controller');
const { middlewareAuth } = require('../../middlewares/auth.middleware');
const { hasQuestionDataMiddleware } = require('../../middlewares/hasQuestionData.middleware');

const router = express.Router();

const questionController = new QuestionController();

router.get('/', questionController.getAllQuestions);
router.get('/:questionId', questionController.getSingleQuestion);
router.post('/:questionId', questionController.checkAnswer);
router.post('/', [middlewareAuth, hasQuestionDataMiddleware], questionController.newQuestion);

module.exports = router;