import React from "react";

import contact1 from "../../assets/contact1.png";
import contact2 from "../../assets/contact2.png";
import contact3 from "../../assets/contact3.png";
import contact4 from "../../assets/contact4.png";
import contact5 from "../../assets/contact5.png";
import contact6 from "../../assets/contact6.png";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contactme">
        <h4>Contact</h4>
        <div className="title_down">
          <hr className="line" />
          <span className="title_after">let's know each other</span>
        </div>
        <div className="contact_details">
          <div className="contact_box1">
            <div className="contact_mail">
              <img src={contact1} alt="" />
              <p>
                <a href="mailto:jyotirmoyroy649@gmail.com">
                  jyotirmoyroy649@gmail.com
                </a>
              </p>
            </div>
            <div className="contact_twitter">
              <img src={contact2} alt="twitter" />
              <p>
                <a href="https://twitter.com/itsmeroy69">itsmeroy69</a>
              </p>
            </div>
            <div className="contact_twitter">
              <img src={contact4} alt="twitter" />
              <p>
                <a href="https://github.com/ItsRoy69">ItsRoy69</a>
              </p>
            </div>
          </div>
          <div className="contact_box2">
            <div className="contact_linkedin">
              <img src={contact3} alt="" />
              <p>
                <a href="https://www.linkedin.com/in/jyotirmoyroy69/">
                  jyotirmoyroy69
                </a>
              </p>
            </div>
            <div className="contact_linkedin">
              <img src={contact5} alt="" />
              <p>
                <a href="https://hashnode.com/@ItsRoy69">ItsRoy69</a>
              </p>
            </div>
            <div className="contact_linkedin">
              <img src={contact6} alt="" />
              <p>
                <a href="https://medium.com/@ItsRoy69">ItsRoy69</a>
              </p>
            </div>
          </div>
          <div className="contact_box3">
            <div className="contact_name">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
              />
            </div>
            <div className="contact_mailid">
              <input
                className="p-text"
                type="email"
                placeholder="Your Mail"
                name="mail"
              />
            </div>
            <div className="contact_message">
              <textarea
                type="text"
                placeholder="Your Message"
                name="message"
              ></textarea>
            </div>
            <a href="mailto:jyotirmoyroy649@gmail.com">
              <button type="button">
                <span>Send Message</span>
                <i></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
