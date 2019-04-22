require('dotenv').config({
    path: `${__dirname}/./../.env`,
});

const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyparser = require('body-parser');

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

server.listen(
    backend.general.port,
    backend.general.ip,
    () => {
        logService.log('NORMAL', `Booting up server ${backend.general.ip}:${backend.general.port}`);
    }
)