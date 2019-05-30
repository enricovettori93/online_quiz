const express = require('express');
const questions = require('../api/questions');
const user = require('../api/user');
const { middlewareLog } = require('../middlewares/logs.middleware');

module.exports = {
    configRoutes(app) {
        app.use('/api/questions', middlewareLog, questions);
        app.use('/api/user', middlewareLog, user);
        app.use('/static', express.static('static'));
    }
}