import './App.css'
import React from "react";
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from  './Components/Footer'
import Application from './Components/Application'
export default function App() {
  return (
    <Router> 
      
        <Navbar/>
        <Routes>
        <Route path="/" element={<Hero/>} />
           <Route path="/application" element={<Application/>} />
        </Routes>
  
       <Footer/>
    </Router>
  
  )
}
