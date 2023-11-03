import React from "react";
import "./Volunteering.css";

import volunteer from "../../assets/volunteer.png";

const Volunteering = () => {
  return (
    <div className="volunteering" id="volunteering">
      <h4>Volunteering</h4>
      <div className="title_down">
        <hr className="line" />
        <span className="title_after">side-work</span>
      </div>

      <div className="volunteering_details">
        <div className="volunteering-techcontent">
          <img src={volunteer} alt="" className="volunteeringimg" />
        </div>
        <div className="volunteering-names">
          <div className="volunteering-box">
            <div className="volunteering-year">
              <h3>2022</h3>
            </div>
            <div className="volunteering-about">
              <div className="volunteering-officedetails">
                <div className="volunteering_head">
                  <h3>Core Team Lead</h3>
                  <h4>Ureckon, UEM Kolkata</h4>
                  <p>Oct 2022 - Feb 2023</p>
                </div>
                <div className="volunteering_body">
                  <p>
                    • Organized the largest hackathon of our college named as
                    Ureckathon with 650+ registrations.
                  </p>
                  <p>
                    • Coordinated the web development offline event named Spyder
                    with 70+ participants.
                  </p>
                  <p>
                    • Managed to bring top tier sponsors to execute the event
                    succesfully.
                  </p>
                </div>
              </div>
              <div className="volunteering-officedetails">
                <div className="volunteering_head">
                  <h3>Student Coordinator</h3>
                  <h4>Google Developer Student Club UEMK</h4>
                  <p>Aug 2022 - May 2023</p>
                </div>
                <div className="volunteering_body">
                  <p>
                    • Established an inclusive community experience on discord
                    for 500+ students to navigate their path in the tech
                    ecosystem through mentorship opportunities and
                    collaboration.
                  </p>
                  <p>
                    • Organized a Women-in-Tech program increasing female
                    participation in the club by 50%{" "}
                  </p>
                  <p>
                    • Instructed 250+ students of multiple batches to reinforce
                    learning concepts on ”Web, Android, Blockchain development”
                    by organizing 10+ workshops.{" "}
                  </p>
                  <p>
                    • Mobilized a group of developers and designeers working in
                    the biggest startups of India for them to mentor students
                    currently learning web, android development, UX design or
                    aspiring to become software developers.
                  </p>

                  <p>
                    • Organized 40+ technical workshops, boot camps, and
                    Google-sponsored programs with 500+ participants from across
                    the globe.
                  </p>
                </div>
              </div>
              <div className="volunteering-officedetails">
                <div className="volunteering_head">
                  <h3>Fullstack Developer</h3>
                  <h4>UEM-IEM Cyclothon</h4>
                  <p>Feb 2022</p>
                </div>
                <div className="volunteering_body">
                  <p>
                    • Built the official website of this event using Html, CSS
                    and JS.
                  </p>
                </div>
              </div>

              <div className="volunteering-officedetails">
                <div className="volunteering_head">
                  <h3>AngelHack Student Ambassador</h3>
                  <h4>AngelHack</h4>
                  <p>August 2022 - Present</p>
                </div>
                <div className="volunteering_body">
                  <p>• Building tech and start-up communities.</p>
                  <p>
                    • Strengthening local ecosystems and promoting innovation.
                  </p>
                  <p>
                    • Bringing together passionate and motivated individuals.
                  </p>
                </div>
              </div>

              <div className="volunteering-officedetails">
                <div className="volunteering_head">
                  <h3>Microsoft Learn Student Ambassador</h3>
                  <h4>Microsoft</h4>
                  <p>August 2022 - Present</p>
                </div>
                <div className="volunteering_body">
                  <p>
                    • Participated enthusiastically in remote mentorship program
                    of Microsoft <br /> Ambassadors, solved technical
                    assignments under Microsoft's mentors, <br />
                    attended webinars to improve soft skills and accessed
                    learning-aids <br /> for self learning.
                  </p>
                </div>
              </div>

              <div className="volunteering-officedetails">
                <div className="volunteering_head">
                  <h3>Technical Writer</h3>
                  <h4>BUIDL</h4>
                  <p>Oct 2022</p>
                </div>
                <div className="volunteering_body">
                  <p>• Worked in writing the contents of the website.</p>
                  <p>
                    • Helped the team in promotional stuffs too by bringing
                    technical clubs from different colleges.
                  </p>
                  <p>
                    • Wrote blogs, twitter threads by giving a review of the
                    event.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="volunteering-box">
            <div className="volunteering-year">
              <h3>2021</h3>
            </div>
            <div className="volunteering-about">
              <div className="volunteering-officedetails">
                <div className="volunteering_head">
                  <h3>Web Master</h3>
                  <h4>UEM Kolkata ACM Student Chapter</h4>
                  <p>Nov 2021 - Dec 2022</p>
                </div>
                <div className="volunteering_body">
                  <p>
                    • Worked on the Frontend section of the site using ReactJS,
                    Redux, CSS to achieve the design given by the UI/UX Team.
                  </p>
                  <p>
                    • Also integrated and added APIs using Axios, Javascript to
                    handle requests from Backend, store and authorize users.
                  </p>
                  <p>
                    • Conducted Technical Workshops at UEM, Kolkata with 200+
                    attendees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
