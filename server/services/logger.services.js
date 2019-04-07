const colors = require('colors');
const { backend } = require('../config/config');

class LogService {
    constructor() {
        this.log = this.log.bind(this);
        colors.enabled = true;
    }
    
    log(type, message) {
        const color = backend.log.types.filter((item) => item.type === type)[0].color
        console.log(`${message}`.color);
    }
}

const logService = new LogService();
module.exports = logService;