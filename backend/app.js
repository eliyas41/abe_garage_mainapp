const express = require('express')
require('dotenv').config()
//create variable to hold the port number
const port = process.env.PORT;
// Import the router
const router = require('./routes')
//create the web server
const app = express();
// Add the routes to the application as middleware
app.use(router)
//start the web server
app.listen(port, () => {
  console.log(`Server is runnin on port: ${port}`)
})

//export the web server for use in the application
module.exports = app;