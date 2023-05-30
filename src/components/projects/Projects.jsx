import React from "react";
import "./Projects.css";
import projects1 from "../../assets/projects1.png";
import projects2 from "../../assets/projects2.png";
import projects3 from "../../assets/projects3.png";
import projects4 from "../../assets/projects4.png";
import projects5 from "../../assets/projects5.png";
import projects6 from "../../assets/projects6.png";
import projects7 from "../../assets/projects7.png";
import projects8 from "../../assets/projects8.png";
import projects9 from "../../assets/projects9.png";

import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "@mui/material/Button";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <h4>Projects</h4>
        <div className="title_down">
          <hr className="line" />
          <span className="title_after">side hustle</span>
        </div>

        <div className="projects_content">
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
                <div className="projects_box_buttonbody">
                  <Button
                    className="button"
                    href="https://github.com/ItsRoy69/messenger"
                  >
                    Link <AiOutlineArrowRight />
                  </Button>
                </div>
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
                <p>Disney Clone using React, Sockets and CSS. </p>{" "}
                <div className="projects_box_buttonbody">
                  <Button
                    className="button"
                    href="https://github.com/ItsRoy69/myfilms"
                  >
                    Link <AiOutlineArrowRight />
                  </Button>
                </div>
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
                <p>A website that'll help when we need.</p>
              </div>
              <div className="projects_box_buttonbody">
                <Button
                  className="button"
                  href="https://github.com/ItsRoy69/AnyHelper"
                >
                  Link <AiOutlineArrowRight />
                </Button>
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
                <Button
                  className="button"
                  href="https://github.com/ItsRoy69/Devmeet"
                >
                  Link <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects5} alt="projects5" />
              </div>
              <div className="projects_box_contenthead">
                <h4>Student Helper</h4>
              </div>
              <div className="projects_box_contentbody">
                <p>A website that'll help when students need help.</p>
              </div>
              <div className="projects_box_buttonbody">
                <Button
                  className="button"
                  href="https://github.com/ItsRoy69/Student-Helper"
                >
                  Link <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects6} alt="projects5" />
              </div>
              <div className="projects_box_contenthead">
                <h4>Metaverse</h4>
              </div>
              <div className="projects_box_contentbody">
                <p>Website using React focusing on UI/UX.</p>
              </div>
              <div className="projects_box_buttonbody">
                <Button
                  className="button"
                  href="https://metaverse-wheat.vercel.app/"
                >
                  Link <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects7} alt="projects5" />
              </div>
              <div className="projects_box_contenthead">
                <h4>Ashray</h4>
              </div>
              <div className="projects_box_contentbody">
                <p>Website using React focusing on helping NGOs.</p>
              </div>
              <div className="projects_box_buttonbody">
                <Button
                  className="button"
                  href="https://ashray-ngo.netlify.app/"
                >
                  Link <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects8} alt="projects5" />
              </div>
              <div className="projects_box_contenthead">
                <h4>ManPloyee</h4>
              </div>
              <div className="projects_box_contentbody">
                <p>Application for employee management within organizations.</p>
              </div>
              <div className="projects_box_buttonbody">
                <Button
                  className="button"
                  href="https://github.com/ItsRoy69/ManPloyee"
                >
                  Link <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
            <div className="projects_box">
              <div className="projects_box_content">
                <img src={projects9} alt="projects5" />
              </div>
              <div className="projects_box_contenthead">
                <h4>MedHelp</h4>
              </div>
              <div className="projects_box_contentbody">
                <p>Get some medical assistance which can be dealt with by staying at home.</p>
              </div>
              <div className="projects_box_buttonbody">
                <Button
                  className="button"
                  href="https://itsroy69.github.io/MedHelp/"
                >
                  Link <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
