import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiChevronsDown } from "react-icons/bi";

import "../styles/Navbar.css";

const Navbar = () => {  
  const [modal, setModal] = useState(false);

  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <h1 href="#">Portfo<span>lio.</span></h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Work<BiChevronsDown />
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
