const { UNAUTHORIZED } = require('../exceptions/messagges');
const logger = require('../services/logger.services');

function middlewareAuth(req, res, next) {
    if (!req.session || !req.session.user) {
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