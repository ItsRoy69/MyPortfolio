import React from 'react';
import "../styles/Skills.css";

import skills1 from '../assets/skills1.png';
import skills2 from '../assets/skills2.png';
import skills3 from '../assets/skills3.png';
import skills4 from '../assets/skills4.png';

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills_content">
          <h1 className="title">Skills</h1>
        </div> 
        <div className="skills_details">  
          <div className="skills_boxes">
            <div className="skills_box">
              <div className="skills_box_content">
                <img src={skills1} alt="skills1" />
              </div> 
              <div className="skills_box_contenthead"> 
                <h4>Fullstack Developer</h4>
              </div>
              <div className="skills_box_contentbody"> 
                <p>I make the website look cool with awesome codes based on researched UI/UX. </p>
              </div>  
            </div>  
            <div className="skills_box">
              <div className="skills_box_content">
                <img src={skills2} alt="skills2" />
              </div> 
              <div className="skills_box_contenthead"> 
                <h4>UI/UX Designer</h4>
              </div>
              <div className="skills_box_contentbody"> 
                <p>I design elegantly beautiful, yet minimal web designs for the users. </p>
              </div>  
            </div>
            <div className="skills_box">
              <div className="skills_box_content">
                <img src={skills3} alt="skills3" />
              </div> 
              <div className="skills_box_contenthead"> 
                <h4>Programmer</h4>
              </div>
              <div className="skills_box_contentbody"> 
                <p>I’m also a programmer who solves dsa related problems everyday . </p>
              </div>  
            </div>  
            <div className="skills_box">
              <div className="skills_box_content">
                <img src={skills4} alt="skills4" />
              </div> 
              <div className="skills_box_contenthead"> 
                <h4>Blockchain</h4>
              </div>
              <div className="skills_box_contentbody"> 
                <p>I build products using blochain technologies.</p>
              </div>  
            </div>                  
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
