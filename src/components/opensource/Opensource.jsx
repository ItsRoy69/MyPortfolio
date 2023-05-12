import React from "react";
import "./Opensource.css";
import opensource from "../../assets/opensource.png";

const Opensource = () => {
  return (
    <>
      <div className="opensource" id="opensource">
        <h4>Opensource</h4>
        <div className="title_down">
          <hr className="line" />
          <span className="title_after">collaborations</span>
        </div>
        <div className="opensource_content">
          <div className="opensource_left">
            <div className="opensource-box">
              <div className="opensource-year">
                <h3>2023</h3>
              </div>
              <div className="opensource-about">
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>Google Summer of Code @ Keploy</h3>
                    <h4>Mentor</h4>
                    <p>Mar 01 - Present</p>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Collaborating with student developers to define and
                      refine project goals and objectives, ensuring alignment
                      with Keploy’s requirements and standards.
                    </p>
                    <p>
                      • Helping students contribute to Open Source projects for
                      social good under the umbrella of Keploy Test Cases.
                    </p>
                  </div>
                </div>
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>MindsDB</h3>
                    <h4>Contributor</h4>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Corrected the Oracle documentation template in GUI .
                    </p>
                  </div>
                </div>
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>Appwrite</h3>
                    <h4>Contributor</h4>
                  </div>
                  <div className="opensource_body">
                    <p>• Updated the installation guide.</p>
                  </div>
                </div>
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>Tauri Apps</h3>
                    <h4>Contributor</h4>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Established the linking of documentation page to the
                      governance page.
                    </p>
                  </div>
                </div>
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>Slint Ui</h3>
                    <h4>Contributor</h4>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Contributed by building error by changing the cache
                      variables and executing successful outputs.
                    </p>
                  </div>
                </div>

                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>Moja Global</h3>
                    <h4>Contributor</h4>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Contributed by fixing the hyperlinks which were
                      redirecting to wrong pages previously .
                    </p>
                    <p>
                      • Advanced the appendix of hyperlinks to notebooks and
                      repositories in the Community Handbook project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="opensource-box">
              <div className="opensource-year">
                <h3>2022</h3>
              </div>
              <div className="opensource-about">
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>Social Summer Of Code</h3>
                    <h4>Contributor</h4>
                    <p>Jun 10 - Oct 1</p>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Contributed by using backend technologies by
                      implementing features in live projects .
                    </p>
                    <p>• Worked on documentation of the projects.</p>
                  </div>
                </div>
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>Girlscript Summer of Code</h3>
                    <h4>Mentor</h4>
                    <p>March 01 - July 05</p>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Mentoring 20+ students to implement features in live
                      projects .
                    </p>
                    <p>• Guiding students about Opensource.</p>
                  </div>
                </div>
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>Diversion</h3>
                    <h4>Mentor</h4>
                    <p>Jan 01 - April 05</p>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Mentoring 30+ students on how to work on opensource
                      projects for the event DIVERSION.
                    </p>
                    <p>
                      • Mentored students to implement features in Kubernetes,
                      Web & Middleware tech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="opensource-box">
              <div className="opensource-year">
                <h3>2021</h3>
              </div>
              <div className="opensource-about">
                <div className="opensource-officedetails">
                  <div className="opensource_head">
                    <h3>HacktoberFest</h3>
                    <h4>Contributor</h4>
                    <p>Oct 01 - Nov 01</p>
                  </div>
                  <div className="opensource_body">
                    <p>
                      • Successfully made 12 PRs to web applications in
                      Hacktoberfest 2021.
                    </p>
                    <p>
                      • Established universal search functionality in one PR.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opensource_right">
            <img src={opensource} alt="" className="opensourceimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Opensource;
