import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiChevronsDown } from "react-icons/bi";

import "../styles/Navbar.css";

const Navbar = () => {  
  const [modal, setModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="navbar-brand" onClick="/">
            <h1>Portfo<span>lio.</span></h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h4 className="nav-link active" aria-current="page" onClick="/">
                  Home
                </h4>
              </li>
              <li className="nav-item">
                <h4 className="nav-link" onClick="/">
                  About Us
                </h4>
              </li>
              <li className="nav-item">
                <h4 className="nav-link" onClick="/">
                  Skills
                </h4>
              </li>
              <li className="nav-item">
                <h4 className="nav-link" onClick={setModal}>
                  Work<BiChevronsDown />
                </h4>
              </li>
              {modal && 
                <div className="dropdown">
                  <div className="dropdown-content">
                    <li className="nav-dropdown">
                      <h4 className="nav-link" onClick="/">
                        Internships
                      </h4>
                    </li>
                    <li className="nav-dropdown">
                      <h4 className="nav-link" onClick="/">
                        Volunteering
                      </h4>
                    </li>
                    <li className="nav-dropdown">
                      <h4 className="nav-link" onClick="/">
                        Opensource
                      </h4>
                    </li>
                    <li className="nav-dropdown">
                      <h4 className="nav-link" onClick="/">
                        Achievements
                      </h4>
                    </li>
                    <li className="nav-dropdown">
                      <h4 className="nav-link" onClick="/">
                        Projects
                      </h4>
                    </li>
                    <li className="nav-dropdown">
                      <h4 className="nav-link" onClick="/">
                      Workshops
                      </h4>
                    </li>
                  </div>  
                </div>              
              }

              <li className="nav-item">
                <h4 className="nav-link" onClick="/">
                  Contact
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
