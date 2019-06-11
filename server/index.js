require('dotenv').config({
    path: `${__dirname}/./../.env`,
});

const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const { sessionInstance } = require('./config/express');
const { backend } = require('../config/config');
const logService = require('./services/logger.services');
const routes = require('./config/routes');
const userModel = require('./db/models/user');

const app = express();

// Setup app configuration
app.use(bodyparser.urlencoded({ 
    extended: true,
    uploadDir: './static',
}));
app.use(fileUpload({
    abortOnLimit: true,
    limits: { fileSize: 100 * 1024 * 1024 },
}));
app.use(bodyparser.json());
app.use(cors());
app.use(sessionInstance);
routes.configRoutes(app)


// Creating server
const server = http.createServer(app);

// Connect to mongodb
mongoose.connect(`mongodb://${backend.db.ip}:${backend.db.port}/${backend.db.name}`).then(
    function onconnected() {
        logService.log('NORMAL', 'Connected to MongoDB, starting webserver');
        let model = userModel.getModel();
        model.find({}).then((data) => {
            if(!data || data.length === 0) {
                let admin = userModel.newUser({
                    'username': process.env.APP_ADMIN_USERNAME,
                    'password': process.env.APP_ADMIN_PASSWORD,
                });
                return admin.save();
            }
            return -1;
        }).then((data) => {
            (data === -1) ?
                logService.log('NORMAL', 'User -> Admin already exists'):
                logService.log('NORMAL', 'User -> Admin created');
            server.listen(
                backend.general.port,
                backend.general.ip,
                () => {
                    logService.log('NORMAL', `Booting up server ${backend.general.ip}:${backend.general.port}`);
                }
            )
        }).catch(err => logService.log('ERROR', `Unable to create admin user: ${err}`));
    },

    function onrejected() {
        logService.log('ERROR', 'Unable to connect to MongoDB');
    }
)