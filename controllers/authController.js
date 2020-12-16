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

AuthController.prototype.verifyAuthSignature = function (jwtSignature, cb) {
    try {
        const verification = jwt.verify(jwtSignature, process.env.JWT_SECRET);
        cb(verification);
    }
    catch (err) {
        cb('Error: Authorization is Unsuccessful.');
    }
}

// Testing
const auth = new AuthController();

module.exports = AuthController;