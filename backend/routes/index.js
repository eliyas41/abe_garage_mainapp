//Import the express module
const express = require('express')
//Call the router method from express to create router
const router = express.Router();
//Import the install router
const installRouter = require('./install.routes')
//Add the install router to the main route 
router.use(installRouter)

// Export the router
module.exports = router;