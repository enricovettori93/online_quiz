const userRepository = require('../repository/user.repository');

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
                .then(data => resolve(data.password === password))
                .catch(err => reject(err));
        });
    }
}