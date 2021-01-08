const mongoose = require('mongoose');

const SurveySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    public: {
        type: Boolean,
        default: false
    },
    questions: [{
        // This _id is the MongoDb id for the current question. This is the syntax for creating an ObjectId within a mongoose object!
        _id: {
            type: String,
            required: true,
            unique: true
        },
        question: {
            type: String,
            required: true
        },
        choices: [{
            _id: {
                type: String,
                required: true,
                unique: true
            },
            choice: {
                type: String,
                required: true
            },
            votes: {
                type: Number,
                default: 0
            }
        }]
    }]
});

const Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;