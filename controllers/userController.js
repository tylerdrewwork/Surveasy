AuthController = require('./authController.js');
const db = require('../models');

function UserController() {
    this.authorize = new AuthController();
}

UserController.prototype.createUser = function (userData, cb) {
    this.authorize.generateSalt(salt => {
        this.authorize.getHash(userData.password, salt, hash => {
            db.User.create({
                username: userData.username,
                passToken: hash,
                salt: salt,
                email: userData.email,
                surveys: new Array()
            }).then(result => {
                cb(result);
            });
        });
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

// Testing
const userController = new UserController();
// userController.createUser({
//     username: "username",
//     password: "password123",
//     email: "userData.email"
// }, result => {
//     console.log(result);
// });

module.exports = UserController