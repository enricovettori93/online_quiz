const { MISSING_PARAMETERS } = require('../exceptions/messagges');
const logger = require('../services/logger.services');

function middlewareLogin(req, res, next) {
    if (!req.body.username || !req.body.password) {
        logger.log('WARN', 'Login middleware, missing parameters');
        res.status(MISSING_PARAMETERS.code).json(MISSING_PARAMETERS.message);
    } else {
        next();
    }
}

module.exports = {
    middlewareLogin,
}