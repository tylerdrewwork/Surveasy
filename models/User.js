const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    passToken: String,
    salt: String,
    surveys: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;