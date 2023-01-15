import React from 'react';
import "../styles/Workshop.css";

import workshop1 from '../assets/workshop1.png';
import workshop2 from '../assets/workshop2.jpg';
import workshop3 from '../assets/workshop4.jpg';
import workshop5 from '../assets/workshop5.jpg';
import workshop6 from '../assets/workshop6.jpg';
import workshop7 from '../assets/workshop7.jpg';

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
            <div className="workshop_box">
              <div className="workshop_box_content">
                <img src={workshop5} alt="workshop3" />
              </div> 
              <div className="workshop_box_contenthead"> 
                <h4>Android Compose Camp</h4>
              </div>
              <div className="workshop_box_contentbody"> 
                <p>Taking online 4-Day long Android Workshop using Kotlin And Java. </p>
              </div>  
              <div className="workshop_box_linkbody"> 
                <a className='linkbody' href='https://twitter.com/sayanstwt/status/1580946083122774016'>More... </a>               
              </div>
            </div>                       
                        
          </div>

          <br />
          <br />

          <div className="workshop_boxes">
            
            <div className="workshop_box">
              <div className="workshop_box_content">
                <img src={workshop6} alt="workshop3" />
              </div> 
              <div className="workshop_box_contenthead"> 
                <h4>Web3 Workshop</h4>
              </div>
              <div className="workshop_box_contentbody"> 
                <p>Took Workshop on blockchain and how we can make build a smart contract. </p>
              </div>  
              <div className="workshop_box_linkbody"> 
                <a className='linkbody' href='https://twitter.com/supratimtwt/status/1591355075091632128'>More... </a>               
              </div>
            </div>    

            <div className="workshop_box">
              <div className="workshop_box_content">
                <img src={workshop7} alt="workshop3" />
              </div> 
              <div className="workshop_box_contenthead"> 
                <h4>Azure Dev Day</h4>
              </div>
              <div className="workshop_box_contentbody"> 
                <p>Had an awesome in-person workshop and geeking out session with folks from around the city at Azure dev day 2022 </p>
              </div>  
              <div className="workshop_box_linkbody"> 
                <a className='linkbody' href='https://twitter.com/mrTamall/status/1553414835475398656'>More... </a>               
              </div>
            </div>           
                        
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Workshop
