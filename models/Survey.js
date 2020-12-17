// mock model for survey
const survey = {
    title: "Food Survey",
    active: true,
    public: true,
    questions: [
        {
            id: 0,
            question: "What is your favorite ice cream",
            choices: [
                {id: 1, name: "Rocky Road", votes: 5},
                {id: 2, name: "Butter Pecan", votes: 0},
                {id: 3, name: "Mint :(", votes: 0},
                {id: 4, name: "French Vanilla", votes: 0}
            ],
        },
        {
            id: 1,
            question: "What is your favorite italian food",
            choices: [
                {name: "Rocky Road", votes: 5},
                {name: "Butter Pecan", votes: 0},
                {name: "Mint :(", votes: 0},
                {name: "French Vanilla", votes: 0}
            ],
        }
    ],   
}