require('dotenv').config({
    path: `${__dirname}/./../.env`,
});

const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const { sessionInstance } = require('./config/express');
const { backend } = require('./config/config');
const logService = require('./services/logger.services');
const routes = require('./config/routes');
const userModel = require('./db/models/user');

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(sessionInstance);
routes.configRoutes(app)


// Booting server
const server = http.createServer(app);

mongoose.connect(`mongodb://${backend.db.ip}:${backend.db.port}/${backend.db.name}`).then(
    function onconnected() {
        logService.log('NORMAL', 'Connected to MongoDB, starting webserver');
        let model = userModel.getModel();
        model.find({}).then((data) => {
            if(!data) {
                let admin = userModel.newUser({
                    'username': process.env.APP_ADMIN_USERNAME,
                    'password': process.env.APP_ADMIN_PASSWORD,
                });
                return admin.save();
            }
            return -1;
        }).then((data) => {
            (data === -1) ?
                logService.log('NORMAL', 'Admin already exists'):
                logService.log('NORMAL', 'Admin created');
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