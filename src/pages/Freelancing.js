import React from 'react';
import "../styles/Freelancing.css";

import freelancing from '../assets/freelancing.png';

const Freelancing = () => {
  return (
    <>
      <div className="freelancing" id='freelancing'>
        <div className="freelancing_content">
          <h1 className="title">Freelancing</h1>
        </div> 
        <div className="freelancing_details">                
          <div className="freelancing-names">
            
            <div className='freelancing-box'>
              <div className='freelancing-year'>
                <h3>2022</h3>
              </div>
              <div className='freelancing-about'>
                <div className='freelancing-officedetails'>
                  <div className="freelancing_head">
                    <h3>Fullstack Developer</h3>
                    <h4>Airbots</h4>
                    <p>Dec 15, 2022 - Jan 15, 2023</p>
                  </div>
                  <div className="freelancing_body">
                    <p>• Revamped the website with complete new UI .</p>
                    <p>• Tested the product on the User Interface level and reported over 50+ critical bugs.</p>
                    <p>• Added more pages and components to give much more detail to the website.</p>
                  </div>
                </div>
                <div className='freelancing-officedetails'>
                  <div className="freelancing_head">
                    <h3>Fullstack Developer</h3>
                    <h4>Mentor of two react projects in GSSOC, 2022</h4>
                    <p>March 01 - July 05, 2022</p>
                  </div>
                  <div className="freelancing_body">
                    <p>• Mentoring 200+ students to implement features in live projects .</p>
                    <p>• Guiding students about freelancing.</p>
                  </div>
                </div>  
                <div className='freelancing-officedetails'>
                  <div className="freelancing_head">
                    <h3>Diversion</h3>
                    <h4>Mentor of one react project in Diversion, 2022 organised by IEM</h4>
                    <p>Jan 01 - April 05, 2022</p>
                  </div>
                  <div className="freelancing_body">
                    <p>• Mentoring 70+ students on how to work on freelancing projects for the event DIVERSION.</p>
                    <p>• Mentored students to implement features in Kubernetes, Web & Middleware tech.</p>
                  </div>
                </div>              
              </div>              
            </div>

            <div className='freelancing-box'>
              <div className='freelancing-year'>
                <h3>2021</h3>
              </div>
              <div className='freelancing-about'>
                <div className='freelancing-officedetails'>
                  <div className="freelancing_head">
                    <h3>HacktoberFest</h3>
                    <h4>freelancing Contributor of HacktoberFest</h4>
                    <p>Oct 01 - Nov 01, 2021</p>
                  </div>
                  <div className="freelancing_body">
                    <p>• Successfully made 12 PRs to web applications in Hacktoberfest 2021.</p>
                    <p>• Established universal search functionality.</p>
                  </div>
                </div>                
              </div>
            </div>

          </div>
          <div className="freelancing-techcontent">
            <div className="freelancing-techthree">
              <div className="freelancing-techcontent_box">
                <img src={freelancing} alt="freelancing" />
              </div> 
            </div>
          </div>     
        </div>
      </div>
    </>
  )
}

export default Freelancing
