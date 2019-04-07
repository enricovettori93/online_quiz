const backend = {
    general: {
        server: process.env.APP_NODE_SERVER,
        port: process.env.APP_NODE_PORT,
        ip: process.env.APP_NODE_IP,
        socketPort: process.env.APP_NODE_SOCKET_PORT,
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
    }
}

module.exports = {
    backend,
}