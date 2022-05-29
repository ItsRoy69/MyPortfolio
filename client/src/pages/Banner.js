import React from 'react';
import "../styles/Banner.css";
import Typical from 'react-typical';

import people from '../assets/bannerman.png';

const Banner = () => {
  return (
    <>
      <div className="banner section__padding" id="home">
        <div className="banner-content">
          <h3>Hello, I am</h3>
          <h1>Jyotirmoy Roy</h1>            
          <h4>a{' '}
            <Typical 
              loop={Infinity}
              className="banner-text"
              wrapper="b"
              steps={[
                'Web Developer', 1000,
                'UI/UX Designer', 1000,
                'Freelancer', 1000,
                'Coder', 1000,

              ]}  
            />            
            </h4>            
        </div>

        <div className="banner-image">
          <img src={people} />
        </div>
      </div>
    </>
  )
}

export default Banner
