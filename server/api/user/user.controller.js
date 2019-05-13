const UserBusiness = require('../../business/user.business');

module.exports = class UserController{
    constructor() {
        this.userBusiness = new UserBusiness();

        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.login = this.login.bind(this);
    }

    getCurrentUser(req, res) {
        this.userBusiness.getCurrentUser(req.session.username)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(err.code).json(err.message));
    }

    login(req, res) {
        this.userBusiness.login(req.body.username, req.body.password)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(err.code).json(err.message));
    }
}