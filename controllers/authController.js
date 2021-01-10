const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
function AuthController() { }

// Return Random Salt Value
AuthController.prototype.generateSalt = function (cb) {
    bcrypt.genSalt(10).then(salt => {
        cb(salt);
    }).catch(err => {
        console.log("ERROR!", err);
    });
}

// Return Encrypted Password Token
AuthController.prototype.getHash = function (password, salt, cb) {
    bcrypt.hash(password, salt).then(hash => {
        cb(hash);
    }).catch(err => {
        console.log("ERROR!", err);
    });
}

// Return JWT Token When Validation is Successful
AuthController.prototype.validatePasswordToken = function (passwordInput, user, cb) {
    bcrypt.compare(passwordInput, user.passToken).then(response => {
        if (!response) {
            // Validation Failed
            cb('Error: Incorrect Username or Password.');
        }
        else if (response) {
            // Validation Successful
            const jwtSignature = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '12h' });
            cb(jwtSignature);
        }
    });
}

// Return User Data When Authorization is Successful
AuthController.prototype.verifyAuthSignature = function (jwtSignature, cb) {
    try {
        const verification = jwt.verify(jwtSignature, process.env.JWT_SECRET);
        cb(verification);
    }
    catch (err) {
        cb('Error: Authorization is Unsuccessful.');
    }
}

module.exports = AuthController;