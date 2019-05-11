const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    }
});

let userModel;

function getSchema() {
    return userSchema;
};

function getModel() {
    if (!userModel) {
        userModel = mongoose.model('User', getSchema());
    }
    return userModel;
};

function newUser(data) {
    let _userModel = getModel();
    let question = new _userModel(data);
    return question;
};

module.exports = {
    getModel,
    getSchema,
    newUser,
};
