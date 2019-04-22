const questions = require('../api/questions');
const { middlewareLog } = require('../middlewares/logs.middleware');

module.exports = {
    configRoutes(app) {
        app.use('/api/questions', middlewareLog, questions);
    }
}