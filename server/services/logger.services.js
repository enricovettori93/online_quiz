const colors = require('colors');
const { backend } = require('../config/config');

class LogService {
    constructor() {
        this.log = this.log.bind(this);
        colors.enabled = true;
    }
    
    log(type, message) {
        /* const color = backend.log.types.filter((item) => item.type === type)[0].color
            See config.js for all logger type
        */
        switch(type) {
            case 'NORMAL':
                console.log(`${message}`.green);
                break;
            case 'WARN':
                console.log(`${message}`.yellow);
                break;
            case 'ERROR':
                console.log(`${message}`.RED);
                break;
            default:
                console.log(`${message}`.green);
                break;
        }
    }
}

const logService = new LogService();
module.exports = logService;