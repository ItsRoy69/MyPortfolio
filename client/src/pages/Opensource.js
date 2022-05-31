import React from 'react';
import "../styles/Opensource.css";

import opensource from '../assets/opensource.png';

const Opensource = () => {
  return (
    <>
      <div className="opensource" id='opensource'>
        <div className="opensource_content">
          <h1 className="title">Opensource</h1>
        </div> 
        <div className="opensource_details">                
          <div className="opensource-names">
            <div className='opensource-box'>
              <div className='opensource-year'>
                <h3>2021</h3>
              </div>
              <div className='opensource-about'>
                <div className='opensource-officedetails'>
                  <div className="opensource_head">
                    <h3>HacktoberFest</h3>
                    <h4>Opensource Contributor of HacktoberFest</h4>
                    <p>Oct 01 - Nov 01, 2021</p>
                  </div>
                  <div className="opensource_body">
                    <p>• Successfully made 12 PRs to web applications in Hacktoberfest 2021.</p>
                    <p>• Established universal search functionality.</p>
                  </div>
                </div>                
              </div>
            </div>
            <div className='opensource-box'>
              <div className='opensource-year'>
                <h3>2022</h3>
              </div>
              <div className='opensource-about'>
                <div className='opensource-officedetails'>
                  <div className="opensource_head">
                    <h3>Girlscript Summer of Code</h3>
                    <h4>Mentor of two react projects in GSSOC, 2022</h4>
                    <p>March 01 - July 05, 2022</p>
                  </div>
                  <div className="opensource_body">
                    <p>• Mentoring 200+ students to implement features in live projects .</p>
                    <p>• Guiding students about Opensource.</p>
                  </div>
                </div>  
                <div className='opensource-officedetails'>
                  <div className="opensource_head">
                    <h3>Diversion</h3>
                    <h4>Mentor of one react project in Diversion, 2022 organised by IEM</h4>
                    <p>Jan 01 - April 05, 2022</p>
                  </div>
                  <div className="opensource_body">
                    <p>• Mentoring 70+ students on how to work on opensource projects for the event DIVERSION.</p>
                    <p>• Mentored students to implement features in Kubernetes, Web & Middleware tech.</p>
                  </div>
                </div>              
              </div>              
            </div>
          </div>
          <div className="opensource-techcontent">
            <div className="opensource-techthree">
              <div className="opensource-techcontent_box">
                <img src={opensource} alt="opensource" />
              </div> 
            </div>
          </div>     
        </div>
      </div>
    </>
  )
}

export default Opensource
