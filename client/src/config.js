const frontend = {
  general: {
    backendserver: process.env.VUE_APP_APP_CLIENT_ORIGIN,
    backendport: process.env.VUE_APP_API_PORT,
    backendprotocol: process.env.VUE_APP_API_PROTOCOL,
  },
}

module.exports = {
  frontend,
}