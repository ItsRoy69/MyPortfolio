import React from 'react';

import "./Footer.css";

import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h4>Copyrights@Jyotirmoy Roy</h4>
        <a className="links" href="#home"><RiArrowUpSLine className="logos" /></a>
      </div>
    </>
  )
}

export default Footer