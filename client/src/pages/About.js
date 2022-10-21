import React from 'react';
import "../styles/About.css";

import aboutimg from '../assets/about.png';
import Typical from 'react-typical';

const About = () => {
  return (
    <>
      <div className="about" id='aboutme'>
        <div className="about_content">
          <h1 className="title">A little about me</h1>
        </div> 
         <div className="about_details">
            <div className="about_pic">
              <img src={aboutimg} alt="aboutimg"/>
            </div>
            <div className="about_padding">
              <div className="about-content">              
                <h2>Hi! 👋 I'm Jyotirmoy and I'm a{' '}
                  <Typical 
                    loop={Infinity}
                    className="about-text"
                    wrapper="b"
                    steps={[
                      'Web Developer', 1000,
                      'UI/UX Designer', 1000,
                      'Freelancer', 1000,
                      'Coder', 1000,
                      'Community Manager', 1000,
                    ]}  
                  />  
                </h2>
                <p>I am a B.tech undergrad in Computer Science from University of Engineering and Management, Kolkata who is interested in Web Development, UI/UX Design, and Coding.</p>                           
                <h4>Thanks for visiting my website!</h4>
                <a type="button" className='button' href="https://drive.google.com/file/d/1Of3pXg5oxLWYPIgs47V0n_qXAtfaFP_S/view?usp=drivesdk" style={{textDecoration: 'none'}}>
                  <h3>CV</h3>
                </a>
              </div>            
            </div>            
         </div>
      </div>
    </>
  )
}

export default About
