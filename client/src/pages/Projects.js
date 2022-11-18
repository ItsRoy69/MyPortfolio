import React from 'react';
import "../styles/Projects.css";

import { AiOutlineArrowRight } from "react-icons/ai";
import Button from '@mui/material/Button';

import projects1 from '../assets/projects1.png';
import projects2 from '../assets/projects2.png';
import projects3 from '../assets/projects3.PNG';
import projects4 from '../assets/projects4.PNG';
import projects5 from '../assets/projects5.PNG';
import projects6 from '../assets/projects6.PNG';
import projects7 from '../assets/projects7.PNG';

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
                <Button className='button' href="https://github.com/ItsRoy69/messenger">Link{" "}<AiOutlineArrowRight /></Button>               
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
                <Button className='button' href="https://github.com/ItsRoy69/myfilms">Link{" "}<AiOutlineArrowRight /></Button>               
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
                <Button className='button' href="https://github.com/ItsRoy69/AnyHelper">Link{" "}<AiOutlineArrowRight /></Button>               
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
                <Button className='button' href="https://github.com/ItsRoy69/Devmeet">Link{" "}<AiOutlineArrowRight /></Button>               
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
                <Button className='button' href="https://github.com/ItsRoy69/Student-Helper">Link{" "}<AiOutlineArrowRight /></Button>               
              </div> 
            </div>             
          </div>
          <div className="projects_boxes">
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects6} alt="projects1" />
              </div> 
              <div className="projects_box_contenthead"> 
                <h4>Metaverse</h4>
              </div>
              <div className="projects_box_contentbody"> 
                <p>Website using React focusing on UI/UX. </p>                
              </div> 
              <div className="projects_box_buttonbody"> 
                <Button className='button' href="https://metaverse-wheat.vercel.app/">Link{" "}<AiOutlineArrowRight /></Button>               
              </div>               
            </div>  

            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects7} alt="projects1" />
              </div> 
              <div className="projects_box_contenthead"> 
                <h4>Ashray</h4>
              </div>
              <div className="projects_box_contentbody"> 
                <p>Website using React focusing on helping NGOs. </p>                
              </div> 
              <div className="projects_box_buttonbody"> 
                <Button className='button' href="https://ashray-ngo.netlify.app/">Link{" "}<AiOutlineArrowRight /></Button>               
              </div>               
            </div>       
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
