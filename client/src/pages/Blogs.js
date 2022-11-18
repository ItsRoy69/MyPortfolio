import React from 'react';
import "../styles/Blogs.css";

import blogs1 from '../assets/blogs.png';
import { BsArrowRight } from "react-icons/bs";


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
                    <h3><a href="https://itsroy69-blogs.hashnode.dev/how-to-make-ghost-buster-game-in-pygame" style={{textDecoration: "none", color: '#000000'}}>How to make Ghost Buster Game in Pygame?</a></h3>
                    <p>Nov 2, 2022</p>
                  </div>
                  <div className="blogs_body">
                    <p><a href="https://itsroy69-blogs.hashnode.dev/how-to-make-ghost-buster-game-in-pygame" style={{textDecoration: "none", color: '#000000'}}>I've talked about how to make a game using Pygame.</a></p>
                  </div>
                </div>  

                <div className='blogs-officedetails'>
                 <div className="blogs_head">
                   <h3><a href="https://medium.com/@ItsRoy69/demystifying-dark-side-of-web3-0-45dc542bdff1" style={{textDecoration: "none", color: '#000000'}}>Demystifying dark side of web3.0</a></h3>
                   <p>21st Sept, 2022</p>
                 </div>
                 <div className="blogs_body">
                    <p><a href="https://medium.com/@ItsRoy69/demystifying-dark-side-of-web3-0-45dc542bdff1" style={{textDecoration: "none", color: '#000000'}}>I've talked about all the dark sides of web3.</a></p>
                 </div>
                </div>  

                <div className='blogs-officedetails'>
                 <div className="blogs_head">
                   <h3><a href="https://medium.com/@ItsRoy69/ethereum-2-0-2a7c09f75ef5" style={{textDecoration: "none", color: '#000000'}}>ETHEREUM 2.0-The MERGE?</a></h3>
                   <p>13th Sept, 2022</p>
                 </div>
                 <div className="blogs_body">
                    <p><a href="https://medium.com/@ItsRoy69/ethereum-2-0-2a7c09f75ef5" style={{textDecoration: "none", color: '#000000'}}>I've lexplained what Merge is.</a></p>
                 </div>
                </div> 

                <div className='blogs-officedetails'>
                 <div className="blogs_head">
                   <h3><a href="https://medium.com/@ItsRoy69/figma-plugins-for-designers-d2e6e2a35962" style={{textDecoration: "none", color: '#000000'}}>Figma Plugins For Designers</a></h3>
                   <p>26th June, 2022</p>
                 </div>
                 <div className="blogs_body">
                    <p><a href="https://medium.com/@ItsRoy69/figma-plugins-for-designers-d2e6e2a35962" style={{textDecoration: "none", color: '#000000'}}>I've listed few figma plugins that a designer can use to make their life easier when designing.</a></p>
                 </div>
                </div>  

                <div className='blogs-officedetails'>
                  <div className="blogs_head">
                    <h3><a href="https://medium.com/@ItsRoy69/all-about-hackathons-67260c45394d" style={{textDecoration: "none", color: '#000000'}}>All about Hackathons</a></h3>
                    <p>1st May, 2022</p>
                  </div>
                  <div className="blogs_body">
                    <p><a href="https://medium.com/@ItsRoy69/all-about-hackathons-67260c45394d" style={{textDecoration: "none", color: '#000000'}}>In this blog I've talked about all thew prerequisites of Hackathons.</a></p>                    
                  </div>
                </div>              

              </div>              
            </div>                          
          </div>
            
        </div>
        <br/>
        <div style={{textAlign: "center"}}>
          <h4>➡️ More blog posts from <a href="https://hashnode.com/@ItsRoy69" style={{textDecoration: "none"}}>Hashnode</a> or <a href="https://medium.com/@ItsRoy69" style={{textDecoration: "none"}}>Medium</a></h4>
        </div>
      </div>
    </>
  )
}

export default Blogs
