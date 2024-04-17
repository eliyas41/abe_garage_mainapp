// Import the express module
const express = require('express');
// call the router method from the express to create the router
const router = express.Router();

// Import the controller
const loginControllers = require('../controllers/login.controller');

// Create the routes
router.post('/api/employee/login', loginControllers.logIn);

// export the router
module.exports = router;