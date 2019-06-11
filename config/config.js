const backend = {
    general: {
        server: process.env.APP_NODE_SERVER,
        port: process.env.APP_NODE_PORT,
        ip: process.env.APP_NODE_IP,
        socketPort: process.env.APP_NODE_SOCKET_PORT,
        uploadFolder: process.env.UPLOAD_FOLDER,
        protocol: process.env.API_PROTOCOL,
    },
    db: {
        port: process.env.MONGO_PORT,
        ip: process.env.MONGO_IP,
        name: process.env.MONGO_NAME,
    },
    log: {
        types: [{
            type: 'NORMAL',
            color: 'green'
        }, {
            type: 'WARN',
            color: 'yellow',
        }, {
            type: 'ERROR',
            color: 'red',
        }]
    },
    secret: {
        password: process.env.APP_CRYPT_ALGORITHM,
        key: process.env.APP_SESSION_KEY,
    }
}

module.exports = {
    backend,
}