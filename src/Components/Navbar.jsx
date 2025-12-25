import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import Bell from "./Bell";
import Tips from "./Tips"
const Navbar = () => {
  return (
    <>  
    <div className='navbar'>
        <span className='logoicon'>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="#667eea" opacity="0.1"/>
              <circle cx="100" cy="100" r="75" fill="none" stroke="#764ba2" stroke-width="8" stroke-dasharray="20 10"/>
              <circle cx="100" cy="100" r="55" fill="#667eea"/>
              <text x="100" y="95" text-anchor="middle" fill="white" font-size="24" font-weight="bold">SOLO</text>
              <text x="100" y="115" text-anchor="middle" fill="white" font-size="18">TRACK</text>
              <circle cx="100" cy="25" r="10" fill="#10b981"/>
              <path d="M100 35 L100 45" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
          </svg>
          </span>
        <div className='left'>
         <ul>
           
         <li className='dashboard'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="3" y="3" width="7" height="7" rx="1" fill="#667eea"/>
               <rect x="14" y="3" width="7" height="7" rx="1" fill="#764ba2"/>
               <rect x="3" y="14" width="7" height="7" rx="1" fill="#f59e0b"/>
               <rect x="14" y="14" width="7" height="7" rx="1" fill="#10b981"/>
           </svg><Link to="/dashboard" style={{ color: "#e5e7eb", textDecoration: "none" }}> Dashboard</Link></li>
         <li className='application'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" fill="#667eea"/>
               <path d="M14 2V8H20" fill="#764ba2"/>
               <path d="M8 13H16M8 17H16" stroke="white" stroke-width="2" stroke-linecap="round"/>
           </svg><Link to="/application" style={{ color: "#e5e7eb", textDecoration: "none" }} >Application</Link></li>
           <li className='analytics'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M3 3L8 21L12 9L21 5L3 3Z" fill="#667eea" stroke="#667eea" stroke-width="2" stroke-linejoin="round"/>
                 <path d="M21 21L12 9" stroke="#764ba2" stroke-width="2" stroke-linecap="round"/>
             </svg><Link to="/analytics" style={{ color: "#e5e7eb", textDecoration: "none" }}>Analytics</Link></li>
         </ul>
        </div>
      
        <div className='right'>
          
       
        </div>
      
        <div className='bellicon'>
               <Bell />
        </div>

      <div className='profileicon'>
          
          <Tips/>

      </div>
      
      </div>
      
    </>
  
  )
}

export default Navbar