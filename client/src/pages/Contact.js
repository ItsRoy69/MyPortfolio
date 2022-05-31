import React from 'react';

import "../styles/Contact.css";

import contact1 from '../assets/contact1.png';
import contact2 from '../assets/contact2.png';
import contact3 from '../assets/contact3.png';

const Contact = () => {
  return (
    <>
      <div className="contact" id='contact'>
        <div className="contact_content">
          <h1 className="title">So Contact Me</h1>
        </div> 
        <div className="contact_details"> 
          <div className="contact_box1">
            <div className="contact_mail">
              <img src={contact1} alt="" />
              <p>jyotirmoyroy649@gmail.com</p>
            </div>
            <div className="contact_twitter">
              <img src={contact2} alt="" />
              <p>itsmeroy69</p>
            </div>
          </div>
          <div className="contact_box2">
            <div className="contact_linkedin">
              <img src={contact3} alt="" />
              <p>jyotirmoyroy69</p>
            </div>
          </div> 
          <div className="contact_box3">
            <div className="contact_name">
              <input className="p-text" type="text" placeholder="Your Name" name="username" />
            </div>
            <div className="contact_mailid">
              <input className="p-text" type="email" placeholder="Your Mail" name="mail" />
            </div>
            <div className="contact_message">
              <textarea className="p-text" type="text" placeholder="Your Message" name="message"></textarea>
            </div>
            <button type="button" class="p-text">Send Message</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
