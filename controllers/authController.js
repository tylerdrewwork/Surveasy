// const jwt = require(jsonwebtoken);
const bcrypt = require('bcrypt');

function AuthController() { }

AuthController.prototype.getSalt = function (cb) {
    bcrypt.genSalt(10).then(salt => {
        cb(salt);
    });
}

// Testing
const auth = new AuthController();

auth.getSalt(salt => {
    console.log(salt);
});

module.exports = AuthController;