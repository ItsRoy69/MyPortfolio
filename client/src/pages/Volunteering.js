import React from 'react';
import "../styles/Volunteering.css";

import volunteer1 from '../assets/volunteer.png';


const Volunteering = () => {
  return (
    <>
      <div className="volunteering" id='volunteering'>
        <div className="volunteering_content">
          <h1 className="title">Volunteering</h1>
        </div> 
        <div className="volunteering_details">  
          <div className="volunteering-techcontent">
            <div className="volunteering-techthree">
              <div className="volunteering-techcontent_box">
                <img src={volunteer1} alt="volunteer1" />
              </div> 
            </div>
          </div>     
          <div className="volunteering-names">
            <div className='volunteering-box'>
              <div className='volunteering-year'>
                <h3>2022</h3>
              </div>
              <div className='volunteering-about'>
                <div className='volunteering-officedetails'>
                  <div className="volunteering_head">
                    <h3>Technical Writer</h3>
                    <h4>BUIDL</h4>
                    <p>Oct 2022</p>
                  </div>
                  <div className="volunteering_body">
                    <p>• Worked in writing the contents of the website.</p>
                    <p>• Helped the team in promotional stuffs too by bringing technical clubs from different colleges.</p>
                    <p>• Wrote blogs, twitter threads by giving a review of the event.</p>
                    <p>• You can check the site <a href='https://buildersofweb3.xyz/ccu/'>here</a>.</p>
                  </div>
                </div> 
                <div className='volunteering-officedetails'>
                  <div className="volunteering_head">
                    <h3>AngelHack Student Ambassador</h3>
                    <h4>AngelHack</h4>
                    <p>August 2022 - Present</p>
                  </div>
                  <div className="volunteering_body">
                    <p>• AngelHack is a global hackathon organization.</p>
                    <p>• Building tech and start-up communities.</p>
                    <p>• Strengthening local ecosystems and promoting innovation.</p>
                    <p>• Bringing together passionate and motivated individuals.</p>
                  </div>
                </div>
                <div className='volunteering-officedetails'>
                  <div className="volunteering_head">
                    <h3>Fullstack Developer</h3>
                    <h4>UEM-IEM Cyclothon</h4>
                    <p>Feb 2022</p>
                  </div>
                  <div className="volunteering_body">
                    <p>• Built the official website of this event using ReactJS and CSS.</p>
                    <p>• Worked on the Frontend part.</p>
                    <p>• Site is live <a href='https://uemcyclothon.uem.edu.in/'>here</a>.</p>
                  </div>
                </div>   

                <div className='volunteering-officedetails'>
                  <div className="volunteering_head">
                    <h3>Student Coordinator</h3>
                    <h4>Google Developer Student Club UEMK</h4>
                    <p>Aug 2022 - Present</p>
                  </div>
                  <div className="volunteering_body">
                    <p>• Instructed 250+ students of multiple batches to reinforce learning concepts on "Web Development" through workshop.</p>
                    <p>• Taught 150+ students about Git & GitHub.</p>
                    <p>• Organizing workshops and technical events in collaboration with different colleges.</p>
                  </div>
                </div> 

              </div>
            </div>
            <div className='volunteering-box'>
              <div className='volunteering-year'>
                <h3>2021</h3>
              </div>
              <div className='volunteering-about'>
                <div className='volunteering-officedetails'>
                  <div className="volunteering_head">
                    <h3>Web Master</h3>
                    <h4>UEM Kolkata ACM Student Chapter</h4>
                    <p>Nov 2021 - Present</p>
                  </div>
                  <div className="volunteering_body">
                    <p>• Working as a full-stack developer with React, MongoDB, NodeJS, ExpressJS.</p>
                    <p>• Building the official website which will be used by thousands of students.</p>
                    <p>• Added new features, improved styles,worked on the UI.</p>
                    <p>• Conducting Technical Workshops at UEM, Kolkata with 200+ attendees.</p>
                  </div>
                </div>                
              </div>
            </div>
          </div>    
        </div>
      </div>
    </>
  )
}

export default Volunteering
