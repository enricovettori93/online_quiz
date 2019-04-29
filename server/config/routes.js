const questions = require('../api/questions');
const user = require('../api/user');
const { middlewareLog } = require('../middlewares/logs.middleware');

module.exports = {
    configRoutes(app) {
        app.use('/api/questions', middlewareLog, questions);
        app.use('/api/user', middlewareLog, user);
    }
}