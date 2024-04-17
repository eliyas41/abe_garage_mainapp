const express = require('express')
require('dotenv').config()
//Import the sanitizer module
const sanitize = require('sanitize')
//Import cors module
const cors = require('cors')
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}
//create variable to hold the port number
const port = process.env.PORT;
// Import the router
const router = require('./routes')
//create the web server
const app = express();
app.use(cors(corsOptions))
//Add the express.json middleware to the application
app.use(express.json());
//Add sanitizer to the express middleware
app.use(sanitize.middleware)
// Add the routes to the application as middleware
app.use(router)
//start the web server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

//export the web server for use in the application
module.exports = app;