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
    })
}

// Testing
const userController = new UserController();

userController.getAllUsers(data => {
    console.log(data);
});

// userController.createUser({
//     username: 'user',
//     passToken: 'passToken',
//     salt: 'salt',
//     email: 'email'
// }, data => {
//     console.log(data);
// });

module.exports = UserController