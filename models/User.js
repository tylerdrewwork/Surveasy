const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    passToken: String,
    salt: String,
    email: {
        type: String,
        unique: true
    },
    surveys: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;