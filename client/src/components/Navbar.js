import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import "../styles/Navbar.css";

const Navbar = () => {  

  return (
    <>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <h1 href="#">Portfo<span>lio.</span></h1>
          </div>
          <ul className="menu">
            <li><a href="#home" className="menu-btn">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#skills" className="menu-btn">Skills</a></li>
            <li><a href="#achievements" className="menu-btn">Achievements</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
