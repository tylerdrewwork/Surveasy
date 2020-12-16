// const jwt = require(jsonwebtoken);
const bcrypt = require('bcrypt');
function AuthController() { }

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

// Testing
const auth = new AuthController();

auth.getSalt(salt => {
    console.log('salt', salt);
    auth.getHash('pass123', salt, hash => {
        console.log('hash', hash);
    });
});

module.exports = AuthController;