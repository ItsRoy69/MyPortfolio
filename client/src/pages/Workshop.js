import React from 'react';
import "../styles/Workshop.css";

import workshop1 from '../assets/workshop1.png';
import workshop2 from '../assets/workshop2.jpg';
import workshop3 from '../assets/workshop4.jpg';

const Workshop = () => {
  return (
    <>
      <div className="workshop" id='workshops'>
        <div className="workshop_content">
          <h1 className="title">Workshop</h1>
        </div> 
        <div className="workshop_details">  
          <div className="workshop_boxes">
            <div className="workshop_box">
              <div className="workshop_box_content">
                <img src={workshop1} alt="workshop1" />
              </div> 
              <div className="workshop_box_contenthead"> 
                <h4>Android Workshop</h4>
              </div>
              <div className="workshop_box_contentbody"> 
                <p>Conducted an Android Development workshop under ACM UEMk with 70+ members. </p>                
              </div> 
              <div className="workshop_box_linkbody"> 
                <a className='linkbody' href='https://twitter.com/itsmeroy69/status/1512672939157733378'>More...</a>               
              </div>               
            </div>  
            <div className="workshop_box">
              <div className="workshop_box_content">
                <img src={workshop2} alt="workshop2" />
              </div> 
              <div className="workshop_box_contenthead"> 
                <h4>Web-Development Workshop</h4>
              </div>
              <div className="workshop_box_contentbody"> 
                <p>Organized a 3 hour long offline workshop on Web, Git, GitHub and Open source. </p>
              </div> 
              <div className="workshop_box_linkbody"> 
                <a className='linkbody' href='https://twitter.com/itsmeroy69/status/1500391027965763586'>More... </a>               
              </div> 
            </div>
            <div className="workshop_box">
              <div className="workshop_box_content">
                <img src={workshop3} alt="workshop3" />
              </div> 
              <div className="workshop_box_contenthead"> 
                <h4>JAM Event</h4>
              </div>
              <div className="workshop_box_contentbody"> 
                <p>Taking online Web-Development Workshop at University Of Engineering & Management, Kolkata. </p>
              </div>  
              <div className="workshop_box_linkbody"> 
                <a className='linkbody' href='https://twitter.com/itsmeroy69/status/1489307031286599682'>More... </a>               
              </div>
            </div> 
                        
          </div>
        </div>
      </div>
    </>
  )
}

export default Workshop
