import React from 'react';
import useSound from 'use-sound';
import "../styles/Education.css";

import education1 from '../assets/education1.png';
import education2 from '../assets/education2.png';
import audio from '../assets/audio.mp3';

const Education = () => {  
  const [play] = useSound(audio);

  return (
    <>
      <div className="education">
        <div className="education_content">
          <h1 className="title">Education</h1>
        </div> 
         <div className="education_details">  
            <div className="education-content"> 
              <div className="college">
                <h2>2004 - 2018</h2>
                <h3><span>Class X </span> - Meghmala Roy Education Center</h3>
              </div>
              <div className="college">
                <h2>2018 - 2020</h2>
                <h3><span>Class XII </span> - St.Joseph & Mary's School,New Alipore</h3>
              </div>
              <div className="college">
                <h2>2020 - Present</h2>
                <h3><span>B.Tech in CSE  </span> - University Of Engineering & Management Kolkata</h3>
              </div>        
            </div> 
            <div className="education_pic">
              <img src={education1} alt="educationimg"/>
            </div>           
         </div>
         <div className="engineer_details">   
            <div className="engineer_pic">
              <img src={education2} alt="engineerimg"/>
            </div>   
            <div className="engineer-content"> 
              <div className="engineer">
                <h2>Why Engineering ?</h2>
                <div className='button' type="button" onClick={play}><h3>Listen</h3></div>
              </div>
            </div>                    
         </div>
      </div>
    </>
  )
}

export default Education
