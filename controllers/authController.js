const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
function AuthController() { }

// Encryption
AuthController.prototype.generateSalt = function (cb) {
    bcrypt.genSalt(10).then(salt => {
        cb(salt);
    });
}

AuthController.prototype.getHash = function (password, salt, cb) {
    bcrypt.hash(password, salt).then(hash => {
        cb(hash);
    });
}

AuthController.prototype.validatePasswordToken = function (passwordInput, user, cb) {
    bcrypt.compare(passwordInput, user.passToken).then(response => {
        if (!response) {
            // Validation Failed
            cb('Error: Incorrect Username or Password.');
        }
        else if (response) {
            // Validation Successful
            const jwtSignature = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
            cb(jwtSignature);
        }
    });
}

// Testing
const auth = new AuthController();
auth.validatePasswordToken("password123", {
    "_id": "5fd97cc6867de64b10924901",
    "surveys": [],
    "username": "test",
    "passToken": "$2b$10$nA7seLpRxHHaGgd7rO9g4.XvCBBhwd89751mqqlt9pdKzS30b0.Bu",
    "__v": 0
}, signature => {
    console.log(signature);
});

module.exports = AuthController;