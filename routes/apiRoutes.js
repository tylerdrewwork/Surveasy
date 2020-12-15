const router = require('express').Router();
const db = require('models');
const UserController = require('../controllers/UserController');

// Create a new UserController 
const userController = new UserController;

// USER Routes

// When hitting the /api/user route, reference the controller and run the respective function
router.route("/api/user")
    .get(userController.getAllUsers) 
    .post(userController.createUser);

router.route("/api/user/:id")
    .get(userController.getUserById)
    // .put(userController.)
    // .delete()

// SURVEY Routes

router.route("/api/survey")
    // .get()
    // .post();

router.route("/api/survey/:id")
    // .get()
    // .put()
    // .delete();

module.exports = router;