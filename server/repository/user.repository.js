const UserModel = require('../db/models/user');

class UserRepository {
    constructor() {
        this.userModel = UserModel.getModel();

        this.getUserByUsername = this.getUserByUsername.bind(this);
    }

    getUserByUsername(username) {
        return new Promise((resolve, reject) => {
            this.userModel.findOne({ 'username': username})
                .then(data => resolve(data[0]))
                .catch(err => reject(err));
        });
    }
}

const userRepository = new UserRepository();

module.exports = userRepository;