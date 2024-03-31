//import the query function from the db.config.js file 
const connection = require('../config/db.config')

//import the fs module to read our sql file
const fs = require('fs')
//write a function to create the database tables
async function install() {
  //create a variable to hold the path to the aql file
  const queryFile = __dirname + '/sql/initial-queries.sql';
  // console.log(queryFile)
  //temporary variable , used to store all queries
  let queries = [];
  let finalMessage = {};
  let templine = '';

  //Read the sql file
  const lines = await fs.readFileSync(queryFile, 'utf8').split('\n');
  //Create a promise to handle the Asynchronous reading of the file 
  const executed = await new Promise((resolve, reject) => {
    //Iterate over all lines
    lines.forEach((lines) => {
      if (lines.trim().startsWith('--') || lines.trim() === '') {
        //Skip if it is a comment or empty lines
        return;
      }
      templine += lines;
      if (lines.trim().endsWith(';')) {
        //if it has a semicolon at the end, it is the end of the query
        //prepare the individual query
        const sqlQuery = templine.trim();
        //Add query to the lists of queries
        queries.push(sqlQuery);
        templine = '';
      }
    })
    resolve("Queries are added to the list");
  });
  //Loop through the queries and execute them one by one asynchronously 
  for (let i = 0; i < queries.length; i++) {
    try {
      const result = await connection.query(queries[i]);
      console.log("Table created")
    } catch (error) {
      // console.log("Error occurred - Table not created")
      finalMessage.message = "Not all tables are created"
    }
  }
  //prepare the final message to return to the controller 
  if (!finalMessage.message) {
    finalMessage.message = "All tables are created"
    finalMessage.status = 200;
  } else {
    finalMessage.status = 500;
  }
  //Return the final Message
  return finalMessage;
}

//Export the install function for use in the controller
module.exports = { install };