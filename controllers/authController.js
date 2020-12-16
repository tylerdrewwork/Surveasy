// const jwt = require(jsonwebtoken);
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

AuthController.prototype.validateWithHash = function (passwordInput, hash) {
    bcrypt.compare(passwordInput, hash).then(response => {
        console.log(response);
    });
}

const auth = new AuthController();
auth.validateWithHash('password123', '$2b$10$ozOqiRayNagmHpSsrrctheVMJ5mJKUZhY3y0nz1LPK0bB4FWhw6WK');

module.exports = AuthController;