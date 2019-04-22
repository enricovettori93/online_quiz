const logger = require('../services/logger.services');

/**
 * Function used to log requests
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function middlewareLog(req, res, next) {
    // do not block operations while logging
    let logContent = `${req.ip} calling ${req.originalUrl}`;

    if (req.body) {
        logContent += '\n body: ';
        logContent += JSON.stringify(req.body);
    }

    if (req.query) {
        logContent += '\n query: ';
        logContent += JSON.stringify(req.query);
    }

    let context = '';
    if (req.baseUrl && req.baseUrl.length) {
        context = req.baseUrl.substring(1, req.baseUrl.length);
    }

    logger.log('NORMAL', logContent);
    next();
}

module.exports = {
    middlewareLog,
};