require('dotenv').config({
    path: `${__dirname}/./../.env`,
});

const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const expressConfig = require('./config/express');
const { backend } = require('./config/config');
const logService = require('./services/logger.services');
const routes = require('./config/routes');

const app = express();

app.use(bodyparser.json());
app.use(cors());
routes.configRoutes(app)


// Booting server
const server = http.createServer(app);

mongoose.connect(`mongodb://${backend.db.ip}:${backend.db.port}/${backend.db.name}`).then(
    function onconnected() {
        logService.log('NORMAL', 'Connected to MongoDB, starting webserver');
        server.listen(
            backend.general.port,
            backend.general.ip,
            () => {
                logService.log('NORMAL', `Booting up server ${backend.general.ip}:${backend.general.port}`);
            }
        )
    },

    function onrejected() {
        logService.log('ERROR', 'Unable to connect to MongoDB');
    }
)