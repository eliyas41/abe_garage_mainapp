//import the install service to handle communication  with the database
var InstallService = require('../services/install.service');

//create a function to handle the install request
async function install(req, res, next) {
  //Call the install service  to create the database tables
  const installMessages = await InstallService.install();

  //check if the install was successful or not and send appropriate response to the client
  if (installMessages === 200) {
    //if successful, send a response to the client
    res.status(200).json({
      message: installMessages
    })
  } else {
    //if unsuccessful, send response to the client
    res.status(500).json({
      message: installMessages
    })
  }
}

module.exports = { install };