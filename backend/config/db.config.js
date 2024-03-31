// import mysql2 
const mysql = require("mysql2/promise")

// Connection parameters
const dbConfig = {
  connectionLimit: 10,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: DB_PASS,
  host: process.env.DB_HOST
}

//Create a connection pool
const pool = mysql.createPool(dbConfig)

//prepare a function that will execute the SQL queries Asynchronously
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}

//Export query function
module.exports = { query }