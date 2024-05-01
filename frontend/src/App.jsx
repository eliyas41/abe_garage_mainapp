import React from 'react'
import './App.css'
//Import Routes and Route components from react-router
import { Routes, Route } from "react-router";
// Import components
import Home from "./markup/pages/Home"
import Login from "./markup/pages/Login"
import AddEmployee from "./markup/pages/admin/AddEmployee"
import Unauthorized from './markup/pages/Unauthorized';
// Import the Orders and Customers components 
import Orders from './markup/pages/admin/Orders';
import Customers from './markup/pages/admin/Customers';
// Import the Employees component 
import Employees from './markup/pages/admin/Employees';

// Import the css file
import "./assets/template_assets/css/bootstrap.css"
import "./assets/template_assets/css/style.css"
import "./assets/template_assets/css/responsive.css"
import "./assets/template_assets/css/color.css"
//Import custom.css
import "./assets/styles/custom.css"

// Import the Header component
import Header from "./markup/components/Header/Header"
// Import  Footer Component
import Footer from "./markup/components/Footer/Footer"

// Import the PrivateAuthRoute component 
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* // Add the Orders Route  */}
        <Route path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          } />
        {/* // Add the Customers Route  */}
        <Route path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          } />
        <Route path="/admin/employee" element={<Employees />} />
        {/* // Add the Employees Route  */}
        <Route path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          } />
        {/* 
          Customers (/admin/customers) - managers and admins
          Orders (/admin/orders) - Can be accessed by all employees
          Add employee (/admin/add-employee) - admins only 
            - Admin: 3 
            - Manager: 2 
            - Employee: 1 
        */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
