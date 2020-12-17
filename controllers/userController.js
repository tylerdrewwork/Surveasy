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

UserController.prototype.deleteUserById = function (userId, cb) {
    db.User.deleteOne({ _id: userId }).then(result => {
        cb(result);
    }).catch(err => {
        console.log("ERROR: ", err);
        cb(err);
    });
}

UserController.prototype.addSurveyToUser = function (userId, surveyId, cb) {
    db.User.updateOne({ _id: userId }, { $push: { surveys: surveyId } }).then(result => {
        cb(result);
    })
}

// Testing
const userController = new UserController();

// userController.createUser({
//     username: 'popUser',
//     password: '123456',
//     email: 'email@email.com'
// }, data => {
//     console.log(data);
// })

// userController.addSurveyToUser('5fdac3ddd0d65c558c546105', "5fdabc6c2dae044c1414eedb", data => {
//     console.log(data);
// });

module.exports = UserController;