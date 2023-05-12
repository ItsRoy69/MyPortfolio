import React, { useState } from "react";
import "./Navbar.css";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <h1>
            Portfo<span>lio.</span>
          </h1>
        </a>

        {menuOpen === true ? (
          <>
            <span
              className="navbar-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {" "}
              <FiXCircle />{" "}
            </span>
          </>
        ) : (
          <>
            <span
              className="navbar-toggle menuq2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {" "}
              <FiAlignRight />{" "}
            </span>
          </>
        )}

        <ul className={`navbar-menu ${menuOpen ? "true" : ""}`}>
          <li
            className="navbar-item"
            onMouseEnter={() => setMenuOpen(true)}
          >
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>

          <li className="navbar-item">
            <a href="/" className="navbar-link">
              About
            </a>
          </li>

          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Skills
            </a>
          </li>

          <li
            className="navbar-item"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="/" className="navbar-link">
              Work <FiChevronDown />
            </a>

            {showDropdown && (
              <ul className="navbar-dropdown">
                <li className="navbar-dropdown-item">
                  <a href="#internship">Internships</a>
                </li>
                <li className="navbar-dropdown-item">
                  <a href="#volunteering">Volunteering</a>
                </li>
                <li className="navbar-dropdown-item">
                  <a href="#opensource">Opensource</a>
                </li>
                <li className="navbar-dropdown-item">
                  <a href="#blogs">Blogs</a>
                </li>
                <li className="navbar-dropdown-item">
                  <a href="#achievements">Achievements</a>
                </li>
                <li className="navbar-dropdown-item">
                  <a href="#projects">Projects</a>
                </li>
                <li className="navbar-dropdown-item">
                  <a href="#workshops">Workshops</a>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
