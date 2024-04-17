// import the query function from the db.config.js file 
const connection = require("../config/db.config")
// import the bcrypt module
const bcrypt = require("bcrypt")
// import the employee.service to get employee data by email
const employeeService = require("./employee.service")

// Handle employee login
async function logIn(employeeData) {
  try {
    let returnData = {}; //object to be returned
    const employee = await employeeService.getEmployeeByEmail(employeeData.employee_email)
    if (employee.length === 0) {
      returnData = {
        status: "fail",
        message: "Employee does not exist"
      }
      return returnData;
    }
    const passwordMatch = await bcrypt.compare(employeeData.employee_password, employee[0].employee_password_hashed);
    if (!passwordMatch) {
      returnData = {
        status: "fail",
        message: "Invalid credential"
      };
      return returnData;
    }
    returnData = {
      status: "Success",
      data: employee[0],
    }
    return returnData;
  } catch (error) {
    console.log(error)
  }
}

// Export the Login function
module.exports = {
  logIn
}