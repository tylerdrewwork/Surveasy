const router = require('express').Router();
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
    .delete(userController.deleteUserById)

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