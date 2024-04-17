//Import the express module
const express = require('express')
//Call the router method from express to create router
const router = express.Router();
//Import the install router
const installRouter = require('./install.routes')
//Import the employee route
const employeeRouter = require("./employee.routes")
//Import the login route
const loginRouter = require('./login.routes')
//Add the install router to the main route 
router.use(installRouter)
//add the employee routes to the main route
router.use(employeeRouter)
//add the login route to the main route
router.use(loginRouter)

// Export the router
module.exports = router;