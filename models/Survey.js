const mongoose = require('mongoose');

const SurveySchema = mongoose.Schema({
    title: String,
    active: Boolean,
    public: Boolean,
    questions: [{
        questionId: String,
        question: String,
        choices: [{
            choiceId: String,
            choice: String,
            votes: Number
        }]
    }]
});

const Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;