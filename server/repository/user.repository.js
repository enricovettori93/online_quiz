const UserModel = require('../db/models/user');

class UserRepository {
    constructor() {
        this.userModel = UserModel.getModel();

        this.getUserByUsername = this.getUserByUsername.bind(this);
    }

    getUserByUsername(username) {
        return new Promise((resolve, reject) => {
            this.userModel.find({ username })
                .then(data => (data && data.length !== 0) ? resolve(data[0]) : reject('User not found'))
                .catch(err => reject(err));
        });
    }
}

const userRepository = new UserRepository();

module.exports = userRepository;