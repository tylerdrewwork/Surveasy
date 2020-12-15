const db = require('../models');

function UserController() { }

UserController.prototype.createUser = function (userData, cb) {
    db.User.create({
        username: userData.username,
        passToken: userData.passToken,
        salt: userData.salt,
        email: userData.email,
        surveys: new Array()
    }).then(result => {
        cb(result);
    });
}

UserController.prototype.getAllUsers = function (cb) {
    db.User.find({}).then(result => {
        cb(result);
    });
}

UserController.prototype.getUserById = function (userId, cb) {
    db.User.findOne({ _id: userId }).then(result => {
        cb(result);
    });
}

UserController.prototype.getUserByUsername = function (username, cb) {
    db.User.findOne({ username: username }).then(result => {
        cb(result);
    });
}

UserController.prototype.deleteUserById = function (userId, cb) {
    db.User.deleteOne({ _id: userId }).then(result => {
        cb(result);
    });
}

module.exports = UserController