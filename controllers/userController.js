AuthController = require('./authController.js');
const db = require('../models');

function UserController() {
    this.authorize = new AuthController();
}

// Create Methods
UserController.prototype.createUser = function (userData, cb) {
    this.authorize.generateSalt(salt => {
        this.authorize.getHash(userData.password, salt, hash => {
            db.User.create({
                username: userData.username,
                passToken: hash,
                email: userData.email,
                surveys: new Array()
            }).then(result => {
                cb(result);
            }).catch(err => {
                console.log("ERROR: ", err);
                cb(err);
            });
        });
    });
}

// Read Methods
UserController.prototype.getAllUsers = function (cb) {
    db.User.find({}).then(result => {
        cb(result);
    }).catch(err => {
        console.log("ERROR: ", err);
        cb(err);
    });
}

UserController.prototype.getUserById = function (userId, cb) {
    db.User.findOne({ _id: userId }).then(result => {
        cb(result);
    }).catch(err => {
        console.log("ERROR: ", err);
        cb(err);
    });
}

UserController.prototype.getUserByIdPopulated = function (userId, cb) {
    db.User.findOne({ _id: userId }).populate('surveys').then(result => {
        cb(result);
    }).catch(err => {
        console.log("ERROR: ", err);
        cb(err);
    });
}

UserController.prototype.getUserByUsername = function (username, cb) {
    db.User.findOne({ username: username }).then(result => {
        cb(result);
    }).catch(err => {
        console.log("ERROR: ", err);
        cb(err);
    });
}

UserController.prototype.getUserByUsernamePopulated = function (username, cb) {
    db.User.findOne({ username: username }).populate('surveys').then(result => {
        cb(result);
    }).catch(err => {
        console.log("ERROR: ", err);
        cb(err);
    });
}

// Update Methods
UserController.prototype.addSurveyToUser = function (userId, surveyId, cb) {
    db.User.updateOne({ _id: userId }, { $push: { surveys: surveyId } }).then(result => {
        cb(result);
    })
}

// Delete Methods
UserController.prototype.deleteUserById = function (userId, cb) {
    db.User.deleteOne({ _id: userId }).then(result => {
        cb(result);
    }).catch(err => {
        console.log("ERROR: ", err);
        cb(err);
    });
}

module.exports = UserController;