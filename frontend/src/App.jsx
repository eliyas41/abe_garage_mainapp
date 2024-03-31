import React from 'react'
import './App.css'
//Import Routes and Route components from react-router
import { Routes, Route } from "react-router";
// Import components
import Home from "./markup/pages/Home"
import Login from "./markup/pages/Login"
import AddEmployee from "./markup/pages/admin/AddEmployee"

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

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
