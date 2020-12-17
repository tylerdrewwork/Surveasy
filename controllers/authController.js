// const jwt = require(jsonwebtoken);
const bcrypt = require('bcrypt');
function AuthController() { }

// Encryption
AuthController.prototype.generateSalt = function (cb) {
    bcrypt.genSalt(10).then(salt => {
        cb(salt);
    }).catch(err => {
        console.log("ERROR!", err);
    });
}

AuthController.prototype.getHash = function (password, salt, cb) {
    bcrypt.hash(password, salt).then(hash => {
        cb(hash);
    }).catch(err => {
        console.log("ERROR!", err);
    });
}

AuthController.prototype.validateWithHash = function (passwordInput, hash) {
    bcrypt.compare(passwordInput, hash).then(response => {
        console.log(response);
    });
}

module.exports = AuthController;