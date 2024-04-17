// Import the query function from the db.config.js file
const connection = require('../config/db.config')
//import bcrypt module
const bcrypt = require('bcrypt')
// function to check if employee exists in the database
async function checkIfEmployeeExists(email) {
  const query = "SELECT * FROM employee WHERE employee_email = ?";
  const rows = await connection.query(query, [email])
  console.log(rows);
  if (rows.length > 0) {
    return true
  }
  return false
}

// A function to create a new employee
async function createEmployee(employee) {
  const createdEmployee = {};
  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(employee.employee_password, salt)
    // Insert the email into the employee table
    const query = "INSERT INTO employee (employee_email, active_employee) VALUES (?, ?)";
    const rows = await connection.query(query, [employee.employee_email, employee.active_employee]);
    console.log(rows)
    if (rows.affectedRows !== 1) {
      return false;
    }
    // Get the employee_id from the insert
    const employee_id = rows.insertId;
    // Insert the remaining data into the employee_info
    const query2 = "INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?, ?, ?, ?)";
    const rows2 = await connection.query(query2, [employee_id, employee.employee_first_name, employee.employee_last_name, employee.employee_phone])

    const query3 = "INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?)";
    const rows3 = await connection.query(query3, [employee_id, hashedPassword]);

    const query4 = "INSERT INTO employee_role (employee_id, company_role_id) VALUES (?, ?)";
    const rows4 = await connection.query(query4, [employee_id, employee.company_role_id]);
    // construct to the employee object to return
    createEmployee = {
      employee_id: employee_id,
      //! we can send the employee_id only to the controller
      // employee_email: employee.employee_email,
      // active_employee: employee.active_employee,
      // employee_first_name: employee.employee_first_name,
      // employee_last_name: employee.employee_last_name,
      // employee_phone: employee.employee_phone
    }
  } catch (error) {
    console.log(error)
  }
  // return the employee object
  return createEmployee;
}

// A function to get employee by email
async function getEmployeeByEmail(employee_email) {
  const query = "SELECT * FROM employee INNER JOIN employee_info ON employee.employee_id = employee_info.employee_id INNER JOIN employee_pass ON employee.employee_id = employee_pass.employee_id INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id WHERE employee.employee_email = ?";
  const rows = await connection.query(query, [employee_email]);
  return rows;
}

// export the function for use in the controller
module.exports = {
  checkIfEmployeeExists,
  createEmployee,
  getEmployeeByEmail
};