//Import employee service
const employeeService = require('../services/employee.service')
//create the add employee controller
async function createEmployee(req, res, next) {
  //check if employee email is already exist in the database
  const employeeExist = await employeeService.checkIfEmployeeExists(req.body.employee_email)
  //If employee exists, send a response to the client
  if (employeeExist) {
    res.status(400).json({
      error: "This email address is already associated with another employee"
    })
  } else {
    try {
      const employeeData = req.body;
      //create the employee
      const employee = await employeeService.createEmployee(employeeData)
      if (!employee) {
        res.status(400).json({
          error: "Failed to add the employee"
        });
      } else {
        res.status(200).json({
          status: "true",
        })
      }
    } catch (error) {
      console.log(error)
      res.status(400).json({
        error: "Something went wrong!"
      })
    }
  }

}


// Create the getAllEmployees controller 
async function getAllEmployees(req, res, next) {
  // Call the getAllEmployees method from the employee service 
  const employees = await employeeService.getAllEmployees();
  // console.log(employees);
  if (!employees) {
    res.status(400).json({
      error: "Failed to get all employees!"
    });
  } else {
    res.status(200).json({
      status: "success",
      data: employees,
    });
  }
}

//export the createEmployee controller
module.exports = {
  createEmployee,
  getAllEmployees
}