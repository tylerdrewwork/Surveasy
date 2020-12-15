const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    passToken: String,
    salt: String,
    email: String,
    surveys: []
});

const User = mongoose.model('User', UserSchema);

module.exports = User;