const router = require('express').Router();
const db = require('models');
const userController = require('../controllers/userController');

// USER Routes

// When hitting the /api/user route, reference the controller and run the respective function
router.route("/api/user")
    // .get(userController.read) 
    .post(userController.createUser);

router.route("/api/user/:id")
    // .get()
    // .put()
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