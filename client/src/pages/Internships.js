import React from 'react';
import "../styles/Internships.css";


import techstack1 from '../assets/techstack1.png';
import techstack2 from '../assets/techstack2.png';
import techstack3 from '../assets/techstack3.png';
import techstack4 from '../assets/techstack4.png';
import techstack5 from '../assets/techstack5.png';
import techstack6 from '../assets/techstack6.png';
import techstack7 from '../assets/techstack7.png';
import techstack8 from '../assets/techstack8.png';
import techstack9 from '../assets/techstack9.png';
import techstack10 from '../assets/techstack10.png';
import techstack11 from '../assets/techstack11.png';
import techstack12 from '../assets/techstack12.png';
import techstack13 from '../assets/techstack13.png';
import techstack14 from '../assets/techstack14.png';
import techstack15 from '../assets/techstack15.png';


const Internships = () => {
  return (
    <>
      <div className="internships" id='internships'>
        <div className="internships_content">
          <h1 className="title">Tech Stacks & Internships</h1>
        </div> 
        <div className="internships_details">  
          <div className="internships-techcontent">
            <div className="internships-techthree">
              <div className="internships-techcontent_box">
                <img src={techstack1} alt="techstack1" />
              </div> 
              <div className="internships-techcontent_box">
                <img src={techstack2} alt="techstack2" />
              </div>
              <div className="internships-techcontent_box">
                <img src={techstack3} alt="techstack3" />
              </div>
            </div>
            <div className="internships-techthree">
              <div className="internships-techcontent_box">
                <img src={techstack4} alt="techstack4" />
              </div>
              <div className="internships-techcontent_box">
                <img src={techstack5} alt="techstack5" />
              </div>
              <div className="internships-techcontent_box">
                <img src={techstack6} alt="techstack6" />
              </div>
            </div>
            <div className="internships-techthree">
              <div className="internships-techcontent_box">
                <img src={techstack7} alt="techstack7" />
              </div>
              <div className="internships-techcontent_box">
                <img src={techstack8} alt="techstack8" />
              </div>
              <div className="internships-techcontent_box">
                <img src={techstack9} alt="techstack9" />
              </div> 
            </div>
            <div className="internships-techthree">
              <div className="internships-techcontent_box">
                <img src={techstack10} alt="techstack10" />
              </div> 
              <div className="internships-techcontent_box">
                <img src={techstack11} alt="techstack11" />
              </div>
              <div className="internships-techcontent_box">
                <img src={techstack12} alt="techstack12" />
              </div>
            </div>
            <div className="internships-techthree">
              <div className="internships-techcontent_box">
                <img src={techstack13} alt="techstack13" />
              </div>
              <div className="internships-techcontent_box">
                <img src={techstack14} alt="techstack14" />
              </div>
              <div className="internships-techcontent_box">
                <img src={techstack15} alt="techstack15" />
              </div>
            </div>
          </div>     
          <div className="internships-names">
            <div className='interships-box'>
              <div className='internships-year'>
                <h3>2022</h3>
              </div>
              <div className='internship-about'>
                <div className='internships-officedetails'>
                  <div className="internships_head">
                    <h3>Backend Developer Intern</h3>
                    <h4>Confederation of Global Innovators - CGI</h4>
                    <p>Jan 2022 - May 2022</p>
                  </div>
                  <div className="internships_body">
                    <p>• Built the official website of this company using MERN.</p>
                    <p>• Server side code, storing details into database, handling validations.</p>
                    <p>• Worked on API Development for managing all the Master Data for Team Members Portal.</p>
                  </div>
                </div>
                <div className='internships-officedetails'>
                  <div className="internships_head">
                    <h3>Fullstack Developer Intern</h3>
                    <h4>The Sparks Foundation</h4>
                    <p>Jan 2022 -  Mar 2022</p>
                  </div>
                  <div className="internships_body">
                    <p>• Building a bank transaction website using MERN from scratch.</p>
                    <p>• Written Clean Code, Increased Code coverage, Maintained Cognitive Complexity of the project.</p>
                    <p>• During this provisional period, Jyotirmoy has worked on the mentioned technology stack and some projects of several Service area sectors.</p>
                  </div>
                </div>
                <div className='internships-officedetails'>
                  <div className="internships_head">
                    <h3>FRT Intern</h3>
                    <h4>Microsoft</h4>
                    <p>Jan 2022 - Apr 2022</p>
                  </div>
                  <div className="internships_body">
                    <p>• Building a fullstack website using Microsoft Azure.</p>
                    <p>• Clean Code focusing more on Frontend Technologies.</p>
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

export default Internships
