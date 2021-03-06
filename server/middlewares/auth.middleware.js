const { UNAUTHORIZED } = require('../exceptions/messagges');
const logger = require('../services/logger.services');
const { backend } = require('../../config/config');

function middlewareAuth(req, res, next) {
    if (backend.general.loginMandatory === "true" && (!req.session || !req.session.username)) {
        req.session.destroy();
        logger.log('WARN', 'Auth middleware, user is unauthorized');
        res.status(UNAUTHORIZED.code).json(UNAUTHORIZED.message);
    } else {
        next();
    }
}

module.exports = {
    middlewareAuth,
}