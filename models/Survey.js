const mongoose = require('mongoose');

const SurveySchema = mongoose.Schema({
    title: String,
    active: Boolean,
    public: Boolean,
    questions: [{
        // This _id is the MongoDb id for the current question. This is the syntax for creating an ObjectId within a mongoose object!
        _id: {type: String, default: mongoose.Types.ObjectId()},
        question: String,
        choices: [{
            _id: {type: String, default: mongoose.Types.ObjectId()},
            choice: String,
            votes: {type: Number, default: 0}
        }]
    }]
});

const Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;