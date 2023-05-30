import React from "react";
import "./Workshops.css";
import workshop1 from "../../assets/workshop1.png";
import workshop2 from "../../assets/workshop2.jpg";
import workshop3 from "../../assets/workshop3.jpg";
import workshop4 from "../../assets/workshop4.jpg";
import workshop5 from "../../assets/workshop5.jpg";
import workshop6 from "../../assets/workshop6.jpg";
import workshop7 from "../../assets/workshop7.jpg";
import workshop8 from "../../assets/workshop8.png";
import workshop9 from "../../assets/workshop9.jpeg";

import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "@mui/material/Button";

const Workshops = () => {
  return (
    <>
      <div className="workshops" id="workshops">
        <h4>Workshops</h4>
        <div className="title_down">
          <hr className="line" />
          <span className="title_after">community work</span>
        </div>{" "}
        <div className="workshops_content">
          <div className="workshops_boxes">
          <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop8} alt="workshops1" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>Organized Ureckathon</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>Organized Ureckathon 3.0, a hackathon which recieved 200+ teams, and over 100 projects.</p>
                <div className="workshops_box_buttonbody">
                  <Button
                    className="button"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7030418470265659392/"
                  >
                    More <AiOutlineArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop9} alt="workshops1" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>Lead organizer Spyder 5.0</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>Organized an offline event, Spyder 5.0, with 100+ participants </p>
                <div className="workshops_box_buttonbody">
                  <Button
                    className="button"
                    href="https://www.linkedin.com/posts/jyotirmoyroy69_first-time-organized-a-nationwide-hackathon-activity-7038060026879483904-r4GQ?utm_source=share"
                  >
                    More <AiOutlineArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop1} alt="workshops1" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>Android Workshop</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>Conducted an Android Development workshop under ACM UEMk with 70+ members. </p>
                <div className="workshops_box_buttonbody">
                  <Button
                    className="button"
                    href="https://twitter.com/itsmeroy69/status/1512672939157733378"
                  >
                    More <AiOutlineArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop2} alt="workshops2" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>Web-Development Workshop</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>Organized a 3 hour long offline workshop on Web, Git, GitHub and Open source. </p>{" "}
                <div className="workshops_box_buttonbody">
                  <Button
                    className="button"
                    href="https://twitter.com/itsmeroy69/status/1500391027965763586"
                  >
                    More <AiOutlineArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop3} alt="workshops3" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>AnyHelper</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>A website that'll help when we need. </p>
              </div>
              <div className="workshops_box_buttonbody">
                <Button
                  className="button"
                  href="https://github.com/ItsRoy69/AnyHelper"
                >
                  More <AiOutlineArrowRight />
                </Button>
              </div>
            </div> */}
            <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop4} alt="workshops4" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>JAM Event</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>Taking online Web-Development Workshop at University Of Engineering & Management, Kolkata.</p>
              </div>
              <div className="workshops_box_buttonbody">
                <Button
                  className="button"
                  href="https://twitter.com/itsmeroy69/status/1489307031286599682"
                >
                  More <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
            <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop5} alt="workshops5" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>Android Compose Camp</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>Taking online 4-Day long Android Workshop using Kotlin And Java.</p>
              </div>
              <div className="workshops_box_buttonbody">
                <Button
                  className="button"
                  href="https://twitter.com/sayanstwt/status/1580946083122774016"
                >
                  More <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
            <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop6} alt="workshops5" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>Web3 Workshop</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>Took Workshop on blockchain and how we can make build a smart contract.</p>
              </div>
              <div className="workshops_box_buttonbody">
                <Button
                  className="button"
                  href="https://twitter.com/supratimtwt/status/1591355075091632128"
                >
                  More <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
            <div className="workshops_box">
              <div className="workshops_box_content">
                <img src={workshop7} alt="workshops5" />
              </div>
              <div className="workshops_box_contenthead">
                <h4>Azure Dev Day</h4>
              </div>
              <div className="workshops_box_contentbody">
                <p>Had an awesome in-person workshop and geeking out session with folks from around the city at Azure dev day 2022</p>
              </div>
              <div className="workshops_box_buttonbody">
                <Button
                  className="button"
                  href="https://ashray-ngo.netlify.app/"
                >
                  More <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshops;
