const router = require('express').Router();
const db = require('../models');
const UserController = require('../controllers/UserController');

// Create a new UserController 
const userController = new UserController;

// USER Routes

// When hitting the /api/user route, reference the controller and run the respective function
router.route("/api/user")
    .get((req, res) => {
        userController.getAllUsers(users => {
            console.log("Users: ", users);
            res.json(users);
        });
    })
    .post((req, res) => {
        console.log("posting. req.body: ", req.body);
        userController.createUser(req.body, (result) => {
            res.send(result);
        });
    });

router.route("/api/user/:id")
    .get((req, res) => {
        userController.getUserById(req.params.id, (user) => {
            res.json(user);
        })
    })
    .delete((req, res) => {
        // userController.deleteUserById(req.params.id, (user))
    })

router.route("api/user/:username")
    .get(userController.getUserByUsername)

// SURVEY Routes

router.route("/api/survey")
    // .get()
    // .post();

router.route("/api/survey/:id")
    // .get()
    // .put()
    // .delete();

module.exports = router;