//import express
const express = require('express');
//Call the router method from express to create the router
const router = express.Router();
//Import the install controller
const installController = require('../controllers/install.controller')

//create a route to handle the install request on get
router.get('/install', installController.install);

//export the router
module.exports = router;