const router = require('express').Router();
const db = require('../models');
const UserController = require('../controllers/UserController');

// Create a new UserController 
const userController = new UserController;

// USER Routes
router.route("/api/user/")
    .get((req, res) => {
        // Only allow one query at a time:
        if (Object.keys(req.query).length > 1) {
            res.send("Error! Only one query is allowed at a time.");
            return;
        }

        // Define request query parameters
        let id = req.query.id;
        let username = req.query.username;

        // If there is an 'id' query
        if (id) {
            userController.getUserById(req.query.id, (user) => {
                res.json(user);
                console.log("Got user by id.")
            })
        }

        // If there is a 'username' query
        if (username) {
            userController.getUserByUsername(req.query.username, (user) => {
                res.json(user);
            })
        }
    })
    .delete((req, res) => {
        userController.deleteUserById(req.query.id, (result) => {
            res.send(result);
        });
    })

router.route("/api/user")
    .get((req, res) => {
        userController.getAllUsers(users => {
            console.log("Users: ", users);
            res.json(users);
            console.log("Got all users")
        });
    })
    .post((req, res) => {
        console.log("posting. req.body: ", req.body);
        userController.createUser(req.body, (result) => {
            res.send(result);
        });
    });

// SURVEY Routes
router.route("/api/survey")
    // .get()
    // .post();

router.route("/api/survey/:id")
    // .get()
    // .put()
    // .delete();

module.exports = router;