import React, { useState } from "react";
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";

import "../styles/Navbar.css";

const Navbar = () => {  
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

  return (
    <>
      <navbar className="navbar__middle">
        <div className="container">
          <div className="row">
            <div className="navbar__middle__logo">
              <NavLink exact activeClassName='is-active' to="/">
                  <h1>Portfo<span>lio.</span></h1>
              </NavLink>
            </div>

            <div className="navbar__middle__menus">
              <nav className="main-nav " >

                {isResponsiveclose === true ? <> 
                  <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                </> : <> 
                  <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                </>}

                <ul className={boxClass.join(' ')}>
                  <li  className="menu-item" >
                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                  </li>
                  <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>
                  <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> Skills </NavLink> </li>
                  <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Work <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} > 
                      <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Internships </NavLink> </li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Volunteering </NavLink> </li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Opensource </NavLink> </li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Achievements </NavLink> </li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Projects </NavLink> </li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Workshops </NavLink> </li>
                    </ul>
                  </li>
                  <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>
                </ul>
              </nav>     
            </div>       
          </div>
        </div>
      </navbar>
    </>
  )
}

export default Navbar
