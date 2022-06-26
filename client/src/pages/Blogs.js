import React from 'react';
import "../styles/Blogs.css";

import blogs1 from '../assets/blogs.png';


const Blogs = () => {
  return (
    <>
      <div className="blogs" id='blogs'>
        <div className="blogs_content">
          <h1 className="title">Blogs</h1>
        </div> 
        <div className="blogs_details">  
          <div className="blogs-techcontent">
            <div className="blogs-techthree">
              <div className="blogs-techcontent_box">
                <img src={blogs1} alt="blogs1" />
              </div> 
            </div>
          </div>     
          <div className="blogs-names">
            <div className='blogs-box'>
              <div className='blogs-year'>
                <h3>2022</h3>
              </div>
              <div className='blogs-about'>
                <div className='blogs-officedetails'>
                  <div className="blogs_head">
                    <h3>All about Hackathons</h3>
                    <p>1st May, 2022</p>
                  </div>
                  <div className="blogs_body">
                    <p>In this blog I've talked about all thew prerequisites of Hackathons.</p>
                  </div>
                </div>   
                <div className='blogs-officedetails'>
                  <div className="blogs_head">
                    <h3>How to make Ghost Buster Game in Pygame?</h3>
                    <p>9th June, 2022</p>
                  </div>
                  <div className="blogs_body">
                    <p>I've talked about how to make a game using Pygame.</p>
                  </div>
                </div>             
              </div>
              <div className='blogs-officedetails'>
                 <div className="blogs_head">
                   <h3>Figma Plugins For Designers</h3>
                   <p>26th June, 2022</p>
                 </div>
                 <div className="blogs_body">
                    <p>I've listed few figma plugins that a designer can use to make their life easier when designing.</p>
                 </div>
               </div>
            </div>            
          </div>    
        </div>
      </div>
    </>
  )
}

export default Blogs
