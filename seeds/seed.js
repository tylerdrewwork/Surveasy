// Seed used for testing and development

const mongoose = require('mongoose');
const UserController = require('../controllers/userController');
const SurveyController = require('../controllers/surveyController');

const userController = new UserController();
const surveyController = new SurveyController();

const userIds = new Array();
const surveyIds = new Array();

process.env = require('../env.json');

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
).then(({ connections }) => {
    console.log('Database connected on port', connections[0].port + '...');

    seedUser({
        username: "bestuser",
        password: "Password123",
        email: "bestuser@test.com"
    });
    seedUser({
        username: "smithy4556",
        password: "smithyP@ssword5",
        email: "smithy@test.com"
    });
    seedUser({
        username: "mcUser",
        password: "mcPassword",
        email: "mcEmail@test.com"
    });
    seedSurvey({
        title: "Test Survey Title",
        question1: "Question 1",
        question2: "Question 2",
        q1Choice1: "Test Choice 1",
        q1Choice2: "Test Choice 2",
        q1Choice3: "Test Choice 3",
        q1Choice4: "Test Choice 4",
        q2Choice1: "Test Choice 1",
        q2Choice2: "Test Choice 2",
        q2Choice3: "Test Choice 3",
        q2Choice4: "Test Choice 4"
    });
    seedSurvey({
        title: "Favorite Things",
        question1: "What is your favorite color?",
        question2: "What is your favorite food?",
        q1Choice1: "Red",
        q1Choice2: "Green",
        q1Choice3: "Yellow",
        q1Choice4: "Blue",
        q2Choice1: "Pizza",
        q2Choice2: "Ramen Noodles",
        q2Choice3: "Burritos",
        q2Choice4: "Cereal"
    });
    seedSurvey({
        title: "Web Dev Quiz",
        question1: "What is CSS stand for",
        question2: "Which of these is a framework?",
        q1Choice1: "Cascading Style Sheets",
        q1Choice2: "Cascading Style Slips",
        q1Choice3: "Computer Style Slips",
        q1Choice4: "Computer Style Sheets",
        q2Choice1: "React",
        q2Choice2: "Express",
        q2Choice3: "jQuery",
        q2Choice4: "HTML"
    });
    seedSurvey({
        title: "Music Survey",
        question1: "Which of these genres do you like the most?",
        question2: "Which of these genres do you like the least?",
        q1Choice1: "Pop",
        q1Choice2: "Country",
        q1Choice3: "Rock",
        q1Choice4: "Hip Hop",
        q2Choice1: "Pop",
        q2Choice2: "Country",
        q2Choice3: "Rock",
        q2Choice4: "Hip Hop"
    });
    seedSurvey({
        title: "Meta Survey",
        question1: "What is the answer to this question?",
        question2: "What was the answer to the previous question?",
        q1Choice1: "This answer",
        q1Choice2: "No, this answer",
        q1Choice3: "This one!",
        q1Choice4: "Pick me!",
        q2Choice1: "The first choice",
        q2Choice2: "The third choice",
        q2Choice3: "The second choice",
        q2Choice4: "None of the above"
    });
});

// Create Users
function seedUser(userData) {
    userController.createUser({
        username: userData.username,
        password: userData.password,
        email: userData.email
    }, result => {
        userIds.push(result._id);
        if (userIds.length === 3 && surveyIds.length === 5) {
            assignSurveys(userIds, surveyIds);
        }
    });
}

// Create Surveys
function seedSurvey(surveyData) {
    surveyController.createSurvey({
        title: surveyData.title,
        active: true,
        public: true,
        questions: [{
            question: surveyData.question1,
            choices: [
                { choice: surveyData.q1Choice1 },
                { choice: surveyData.q1Choice2 },
                { choice: surveyData.q1Choice3 },
                { choice: surveyData.q1Choice4 }
            ]
        }, {
            question: surveyData.question2,
            choices: [
                { choice: surveyData.q2Choice1 },
                { choice: surveyData.q2Choice2 },
                { choice: surveyData.q2Choice3 },
                { choice: surveyData.q2Choice4 }
            ]
        }]
    }, result => {
        surveyIds.push(result._id);
        if (surveyIds.length === 3 && userIds.length === 5) {
            assignSurveys(userIds, surveyIds);
        }
    });
}

function assignSurveys(users, surveys) {
    let addedSurveys = 0;
    let userIndex = 0;
    let surveyIndex = 0;

    // Loop through and assign surveys and users so all users have 3 surveys
    while (addedSurveys < 3) {
        userController.addSurveyToUser(users[userIndex], surveys[surveyIndex], result => { });

        surveyIndex++;
        if (surveyIndex >= surveys.length) {
            surveyIndex = 0;
        }

        userIndex++;
        if (userIndex >= users.length) {
            userIndex = 0;
            addedSurveys++;
        }
    }
}