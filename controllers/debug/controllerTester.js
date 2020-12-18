// Created this for easy, separate testing of the controllers. Edit as you need!

const surveyController = require('../surveyController');

// Test Method:
let testController = new SurveyController();

testController.createSurvey({
    title: "Test survey!",
    active: true,
    public: true,
    questions: [
        {
            question: "Favorite color?",
            choices: [
                {choice: "Red"},
                {choice: "Blue"},
                {choice: "Green"},
                {choice: "Incandescent Yellow"},
            ]
        },
        {
            question: "Favorite vehicle?",
            choices: [
                {choice: "car"},
                {choice: "truck"},
                {choice: "ufo"},
            ]
        },
        {
            question: "Favorite number?",
            choices: [
                {choice: "5"},
                {choice: "5"},
                {choice: ""},
                {choice: "10000000000000000000000"},
                {choice: "what's a number"},
            ]
        }
    ]
});