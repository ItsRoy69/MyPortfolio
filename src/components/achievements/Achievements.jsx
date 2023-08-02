import React from "react";
import "./Achievements.css";
import achievements from "../../assets/achievements.png";

const Achievements = () => {
  return (
    <>
      <div className="achievements" id="achievements">
        <h4>Achievements</h4>
        <div className="title_down">
          <hr className="line" />
          <span className="title_after">honors</span>
        </div>
        <div className="achievements_content">
          <div className="achievements_left">
            <div className="achievements-box">
              <div className="achievements-year">
                <h3>2023</h3>
              </div>
              <div className="achievements-about">
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Hack4Bengal 2.0</h3>
                    <h4>
                      Got invited to judge as well as mentor the East India's Largest Hackathon
                    </h4>
                    <p>Jul 9 - 10</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="achievements-box">
              <div className="achievements-year">
                <h3>2022</h3>
              </div>
              <div className="achievements-about">
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Xiaomi India</h3>
                    <h4>
                      Came among top 10 performer in Ode2Code2.0 competition
                      among 8450 registrations
                    </h4>
                    <p>Jul 11 - Nov 11</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>NIT Rourkela</h3>
                    <h4>1st Prize In HackOdisha 2.0 for use of Twilio</h4>
                    <p>Sep 10 - 11</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>University of Engineering & Management, Kolkata</h3>
                    <h4>Vice Chancellor's Award for Best Techno Wiz, 2022</h4>
                    <p>Aug 30</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Microsoft</h3>
                    <h4>
                      Got selected as Microsoft Learn Student Ambassador among
                      100,000 registrations around the world
                    </h4>
                    <p>Aug 10</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Google</h3>
                    <h4>Got selected as the GDSC UEMK Coordinator (2022-23)</h4>
                    <p>Aug 20</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>NIT Mizoram</h3>
                    <h4>1st Prize In Web/App Hackathon ,2022</h4>
                    <p>June 18 - 19</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Presidency University, Kolkata</h3>
                    <h4>Got 2nd prize in Game Jam in Milieu,2022</h4>
                    <p>May 16 - 17</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Institute of Engineering & Management, Kolkata</h3>
                    <h4>Got 1st prize in Hackathon in IemHacks,2022</h4>
                    <p>April 16 - 17</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>University of Engineering & Management, Kolkata</h3>
                    <h4>Got 2nd prize in Hackathon in Ureckathon,2022</h4>
                    <p>April 2 - 3</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Sister Nivedity University</h3>
                    <h4>
                      Most Creative Use of GitHub in Hackathon in
                      Hack4Bengal,2022
                    </h4>
                    <p>April 8 - 10</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>NIT-Hamirpur</h3>
                    <h4>Top 6th Prize In Vividhata: A Blend of Ideas,2022</h4>
                    <p>Jan 2 - 4</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="achievements-box">
              <div className="achievements-year">
                <h3>2021</h3>
              </div>
              <div className="achievements-about">
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Sister Nivedity University</h3>
                    <h4>Got 3rd prize in Hackathon in DecHack,2021</h4>
                    <p>Dec 15 - 19</p>
                  </div>
                </div>
                <div className="achievements-officedetails">
                  <div className="achievements_head">
                    <h3>Commudle</h3>
                    <h4>Winner of Share Your Build contest by Commudle,2021</h4>
                    <p>Nov 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="achievements_right">
            <img src={achievements} alt="" className="achievementsimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
