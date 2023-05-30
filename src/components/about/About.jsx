import React from "react";
import "./About.css";
import about from '../../assets/about.png'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className="about" id="aboutme">
      <h4>A little about me</h4>
      <div className="title_down">
        <hr className="line" />
        <span className="title_after">Who am I</span>
      </div>

      <div className="about_content">
        <div className="about_left">
          <img src={about} alt="" className="aboutimg" />
        </div>
        <div className="about_right">
          <h5>Hi! 👋 I'm Jyotirmoy and I'm a{' '}
            <TypeAnimation
              loop={Infinity}
              className="about-text"
              wrapper="b"
              repeat={Infinity}
              sequence={[
                'Software Developer', 1000,
                'UI/UX Designer', 1000,
                'Freelancer', 1000,
                'Coder', 1000,
                'Community Manager', 1000,
                'Developer Advocate', 1000,
              ]}  
            /> 
          </h5>
          <p>I am a B.tech undergrad in Computer Science 
            from University of Engineering and Management, Kolkata who
             is interested in Software Development, UI/UX Design, and Coding.</p>

          <p>Thanks for visiting my website!</p>

          <a href="/">
            <button>
              <span>CV</span>
              <i></i>
            </button>
          </a>          
        </div>
      </div>
    </div>
  );
};

export default About;
