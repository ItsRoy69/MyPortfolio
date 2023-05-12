import React from "react";
import "./Blogs.css";

import blogs from "../../assets/blogs.png";

const Blogs = () => {
  return (
    <div className="blogs" id="blogs">
      <h4>Blogs</h4>
      <div className="title_down">
        <hr className="line" />
        <span className="title_after">writeups</span>
      </div>

      <div className="blogs_details">
        <div className="blogs-techcontent">
          <img src={blogs} alt="" className="blogsimg" />
        </div>
        <div className="blogs-names">
          <div className="blogs-box">
            <div className="blogs-year">
              <h3>2022</h3>
            </div>
            <div className="blogs-about">
              <div className="blogs-officedetails">
                <div className="blogs_head">
                  <h3>
                    <a
                      href="https://itsroy69-blogs.hashnode.dev/how-to-make-ghost-buster-game-in-pygame"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      How to make Ghost Buster Game in Pygame?
                    </a>
                  </h3>
                </div>
                <div className="blogs_body">
                  <p>
                    <a
                      href="https://itsroy69-blogs.hashnode.dev/how-to-make-ghost-buster-game-in-pygame"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      I've talked about how to make a game using Pygame.{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="blogs-officedetails">
                <div className="blogs_head">
                  <h3>
                    <a
                      href="https://medium.com/@ItsRoy69/ethereum-2-0-2a7c09f75ef5"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      ETHEREUM 2.0-The MERGE?
                    </a>
                  </h3>
                </div>
                <div className="blogs_body">
                  <p>
                    <a
                      href="https://medium.com/@ItsRoy69/ethereum-2-0-2a7c09f75ef5"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      I've explained what Merge is.{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="blogs-officedetails">
                <div className="blogs_head">
                  <h3>
                    <a
                      href="https://medium.com/@ItsRoy69/figma-plugins-for-designers-d2e6e2a35962"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      Figma Plugins For Designers
                    </a>
                  </h3>
                </div>
                <div className="blogs_body">
                  <p>
                    <a
                      href="https://medium.com/@ItsRoy69/figma-plugins-for-designers-d2e6e2a35962"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      I've listed few figma plugins that a designer can use to
                      make their life easier when designing.{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="blogs-officedetails">
                <div className="blogs_head">
                  <h3>
                    <a
                      href="https://medium.com/@ItsRoy69/demystifying-dark-side-of-web3-0-45dc542bdff1"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      Demystifying dark side of web3.0
                    </a>
                  </h3>
                </div>
                <div className="blogs_body">
                  <p>
                    <a
                      href="https://medium.com/@ItsRoy69/demystifying-dark-side-of-web3-0-45dc542bdff1"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      I've talked about all the dark sides of web3.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs_more" style={{ textAlign: "center" }}>
        <h4>
          ➡️ More blog posts from{" "}
          <a
            href="https://hashnode.com/@ItsRoy69"
            style={{ textDecoration: "none" }}
          >
            Hashnode
          </a>{" "}
          or{" "}
          <a
            href="https://medium.com/@ItsRoy69"
            style={{ textDecoration: "none" }}
          >
            Medium
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Blogs;
