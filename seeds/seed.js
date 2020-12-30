// Seed used for testing and development

const mongoose = require('mongoose');
const UserController = require('../controllers/userController');
const SurveyController = require('../controllers/surveyController');

const userController = new UserController();
const surveyController = new SurveyController();

process.env = require('../env.json');

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
).then(({ connections }) => {
    console.log('Database connected on port', connections[0].port + '...');

    // Create Users
    userController.createUser({
        username: "bestuser",
        password: "Password123",
        email: "bestuser@test.com"
    }, result => {
        console.log(result);
    });

    userController.createUser({
        username: "smithy4556",
        password: "smithyP@ssword5",
        email: "smithy@test.com"
    }, result => {
        console.log(result);
    });

    userController.createUser({
        username: "mcUser",
        password: "mcPassword",
        email: "mcEmail@test.com"
    }, result => {
        console.log(result);
    });

    userController.createUser({
        username: "testUser4",
        password: "testPassword4",
        email: "testEmail4@test.com"
    }, result => {
        console.log(result);
    });

    userController.createUser({
        username: "bananas",
        password: "banana123",
        email: "banana@test.com"
    }, result => {
        console.log(result);
    });

    // Create Surveys
    surveyController.createSurvey({
        title: "Test Quiz Title",
        active: true,
        public: true,
        questions: [{
            question: "Question 1",
            choices: [
                { choice: "Test Choice 1" },
                { choice: "Test Choice 2" },
                { choice: "Test Choice 3" },
                { choice: "Test Choice 4" }
            ]
        }, {
            question: "Question 2",
            choices: [
                { choice: "Test Choice 1" },
                { choice: "Test Choice 2" },
                { choice: "Test Choice 3" },
                { choice: "Test Choice 4" }
            ]
        }]
    }, result => {
        console.log(result);
    });
});