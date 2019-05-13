const userRepository = require('../repository/user.repository');
const { BAD_REQUEST } = require('../exceptions/messagges');

module.exports = class UserBusiness {
    constructor() {
        this.getCurrentuser = this.getCurrentuser.bind(this);
        this.login = this.login.bind(this);
    }

    getCurrentuser(username) {
        return new Promise((resolve, reject) => {
            userRepository.getUserByUsername(username)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    login(username, password) {
        return new Promise((resolve, reject) => {
            userRepository.getUserByUsername(username)
                .then((data) => {
                    if (data.password === password) {
                        resolve('Login success');
                    }
                    throw(BAD_REQUEST);
                })
                .catch(err => reject(err));
        });
    }
}