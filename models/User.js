const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    passToken: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    surveys: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;