const router = require('express').Router();
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

// Create a new UserController 
const userController = new UserController;
const authController = new AuthController();

// USER Routes
router.route("/api/user/")
    // Get Users
    .get((req, res) => {
        // Only allow one query at a time:
        if (Object.keys(req.query).length > 1) {
            res.send("Error! Only one query is allowed at a time.");
            return;
        }

        // AUTHORIZATION
        authorizeRequest(req, authorization => {
            if (authorization === 'Error: Authorization is Unsuccessful.') {
                res.send("Error! User is not authorized.");
                return;
            }

            // Define request query parameters
            let id = req.query.id;

            // If there is an 'id' query
            if (id) {
                userController.getUserById(id, (user) => {
                    res.json(user);
                    console.log("API: Got user by id: ", id);
                })
            }
            // If there is a 'username' query
            else {
                username = authorization.username;
                console.log("USER:", username);
                userController.getUserByUsername(username, (user) => {
                    res.json(user);
                    console.log("API: Got user by username: ", username);
                })
            }
        });
    })
    // Delete Users
    .delete((req, res) => {
        // Only allow one query at a time:
        if (Object.keys(req.query).length > 1) {
            res.send("Error! Only one query is allowed at a time.");
            return;
        }

        // Define request query parameters
        let id = req.query.id;

        // Delete user by ID
        if (id) {
            userController.deleteUserById(id, (result) => {
                res.send(result);
                console.log("API: Deleting user by id: ", id);
            });
        }
    })
    .post((req, res) => {
        let user = req.body;

        if (checkIfObjectIsEmpty(user) === false) {
            console.log("API: Creating user: ", req.body);
            userController.createUser(req.body, (result) => {
                res.send(result);
            });
        } else {
            console.log("API ERROR: Attempted to create user but object was empty.");
            res.send("Error: object empty");
        }
    });

// AUTHORIZATION Routes
router.route("/api/auth")
    .post((req, res) => {

        // Get existing variables based on request
        let username = req.body.username
        let password = req.body.password;

        if (username && password) {
            userController.getUserByUsername(username, user => {

                if (!user) {
                    res.send("Error: Incorrect Username or Password.");
                }
                else {
                    authController.validatePasswordToken(password, user, result => {
                        (result === "Error: Incorrect Username or Password.") ? res.send(result) : res.json({ token: result, user: user });
                    });
                }

            });
        }
    });

// SURVEY Routes
router.route("/api/survey")
    .get((req, res) => {
        // AUTHORIZATION
        authorizeRequest(req, authorization => {
            if (authorization === "Error: Authorization is Unsuccessful.") {
                res.send("Error: Authorization is Unsuccessful.");
                return;
            }

            // define query parameters
            let id = req.query.id;

            // Get one survey by id
            if (id) {
                console.log("GET ONE SURVEY BY ID");
            } else {
                console.log("GET ALL SURVEYS OF USER");
            }
        });
    })
    .post((req, res) => {
        console.log("Post Survey");
    });

function authorizeRequest(request, cb) {
    let token = request.body.token;

    // If no token, unauthorized
    if (!token) { cb("Error! User is not authorized."); }

    authController.verifyAuthSignature(token, authorization => {
        cb(authorization);
    })
}

function checkIfObjectIsEmpty(obj) {
    // Check if the req.query object is empty!
    if (Object.keys(obj).length === 0) return true;
    else return false;
}

module.exports = router;