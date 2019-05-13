const { MISSING_PARAMETERS } = require('../exceptions/messagges');
const logger = require('../services/logger.services');

function hasQuestionDataMiddleware(req, res, next) {
    if (!req.body.question
        || !req.body.answer1
        || !req.body.answer2
        || !req.body.answer3
        || !req.body.answer4
        || !req.files.img) {
        logger.log('WARN', 'Login middleware, missing parameters');
        res.status(MISSING_PARAMETERS.code).json(MISSING_PARAMETERS.message);
    } else {
        next();
    }
}

module.exports = {
    hasQuestionDataMiddleware,
}