import React from 'react';
import "../styles/Projects.css";

import { AiOutlineArrowRight } from "react-icons/ai";
import Button from '@mui/material/Button';

import projects1 from '../assets/projects1.png';
import projects2 from '../assets/projects2.png';
import projects3 from '../assets/projects1.png';
import projects4 from '../assets/projects1.png';
import projects5 from '../assets/projects2.png';

const Projects = () => {
  return (
    <>
      <div className="projects" id='projects'>
        <div className="projects_content">
          <h1 className="title">Projects</h1>
        </div> 
        <div className="projects_details">  
          <div className="projects_boxes">
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects1} alt="projects1" />
              </div> 
              <div className="projects_box_contenthead"> 
                <h4>Messenger Clone</h4>
              </div>
              <div className="projects_box_contentbody"> 
                <p>Messenger Clone using React, Sockets and CSS. </p>                
              </div> 
              <div className="projects_box_buttonbody"> 
                <Button className='button'>Link{" "}<AiOutlineArrowRight /></Button>               
              </div>               
            </div>  
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects2} alt="projects2" />
              </div> 
              <div className="projects_box_contenthead"> 
                <h4>MyFilms</h4>
              </div>
              <div className="projects_box_contentbody"> 
                <p>Disney Clone using React, Sockets and CSS. </p>
              </div> 
              <div className="projects_box_buttonbody"> 
                <Button className='button'>Link{" "}<AiOutlineArrowRight /></Button>               
              </div> 
            </div>
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects3} alt="projects3" />
              </div> 
              <div className="projects_box_contenthead"> 
                <h4>AnyHelper</h4>
              </div>
              <div className="projects_box_contentbody"> 
                <p>A website that'll help when we need maid. </p>
              </div>  
              <div className="projects_box_buttonbody"> 
                <Button className='button'>Link{" "}<AiOutlineArrowRight /></Button>               
              </div>
            </div>  
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects4} alt="projects4" />
              </div> 
              <div className="projects_box_contenthead"> 
                <h4>Devmeet</h4>
              </div>
              <div className="projects_box_contentbody"> 
                <p>Easily find people for your hackathons & projects.</p>
              </div>
              <div className="projects_box_buttonbody"> 
                <Button className='button'>Link{" "}<AiOutlineArrowRight /></Button>               
              </div>  
            </div>     
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects5} alt="projects4" />
              </div> 
              <div className="projects_box_contenthead"> 
                <h4>Student Helper</h4>
              </div>
              <div className="projects_box_contentbody"> 
                <p>A website that'll help when students need help.</p>
              </div> 
              <div className="projects_box_buttonbody"> 
                <Button className='button'>Link{" "}<AiOutlineArrowRight /></Button>               
              </div> 
            </div>             
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
