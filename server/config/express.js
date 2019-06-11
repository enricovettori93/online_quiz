const session = require('express-session');
const { backend } = require('../../config/config');

const sessionInstance = session({
    secret: backend.secret.password,
    key: backend.secret.key,
    cookie: {
        maxAge: 60 * 60 * 52000,
    },
    resave: false,
    saveUninitialized: false,
    rolling: true,
});

module.exports = {
    sessionInstance,
}