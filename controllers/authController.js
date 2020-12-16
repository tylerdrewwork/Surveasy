// const jwt = require(jsonwebtoken);
const bcrypt = require('bcrypt');
function AuthController() { }

// Encryption
AuthController.prototype.getSalt = function (cb) {
    bcrypt.genSalt(10).then(salt => {
        cb(salt);
    });
}

AuthController.prototype.getHash = function (password, salt, cb) {
    bcrypt.hash(password, salt).then(hash => {
        cb(hash);
    });
}

module.exports = AuthController;