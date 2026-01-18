import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import Bell from "./Bell";
import Tips from "./Tips";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Close menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <>  
      <div className='navbar'>
        {/* Logo */}
        <span className='logoicon'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#667eea" opacity="0.1"/>
            <circle cx="100" cy="100" r="75" fill="none" stroke="#764ba2" strokeWidth="8" strokeDasharray="20 10"/>
            <circle cx="100" cy="100" r="55" fill="#667eea"/>
            <text x="100" y="95" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">SOLO</text>
            <text x="100" y="115" textAnchor="middle" fill="white" fontSize="18">TRACK</text>
            <circle cx="100" cy="25" r="10" fill="#10b981"/>
            <path d="M100 35 L100 45" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </span>

        {/* Desktop Navigation Links */}
        <div className='left'>
          <ul>
            <li className='dashboard'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="#667eea"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="#764ba2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="#f59e0b"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="#10b981"/>
              </svg>
              <Link to="/dashboard" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                Dashboard
              </Link>
            </li>
            <li className='application'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" fill="#667eea"/>
                <path d="M14 2V8H20" fill="#764ba2"/>
                <path d="M8 13H16M8 17H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <Link to="/application" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                Application
              </Link>
            </li>
            <li className='analytics'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L8 21L12 9L21 5L3 3Z" fill="#667eea" stroke="#667eea" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M21 21L12 9" stroke="#764ba2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <Link to="/analytics" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                Analytics
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            // Cross (X) SVG
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#ffffff" stroke-width="5" fill="#ff0000"/>
            <path d="M30 30 L70 70 M70 30 L30 70" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
          </svg>
          ) : (
            // Hamburger SVG
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 60">
              <rect x="0" y="0" width="80" height="8" rx="4" fill="#e5e7eb"/>
              <rect x="0" y="26" width="80" height="8" rx="4" fill="#e5e7eb"/>
              <rect x="0" y="52" width="80" height="8" rx="4" fill="#e5e7eb"/>
            </svg>
          )}
        </button>


        {/* Right Side Icons */}
        <div className='right'>
          <div className='bellicon'>
            <Bell />
          </div>
          <div className='profileicon'>
            <Tips />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/dashboard" onClick={closeMenu}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="#667eea"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="#764ba2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="#f59e0b"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="#10b981"/>
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/application" onClick={closeMenu}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" fill="#667eea"/>
                <path d="M14 2V8H20" fill="#764ba2"/>
              </svg>
              Application
            </Link>
          </li>
          <li>
            <Link to="/analytics" onClick={closeMenu}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M3 3L8 21L12 9L21 5L3 3Z" fill="#667eea" stroke="#667eea" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M21 21L12 9" stroke="#764ba2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Analytics
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;