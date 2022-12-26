import React from 'react';
import "../styles/Banner.css";
import { TypeAnimation } from 'react-type-animation';
import bannerimg from '../assets/bannerman.png';

const Banner = () => {
  return (
    <>
      <div className="banner section__padding" id="home">
        <div className="banner-content">
          <h3>Hello, I am</h3>
          <h1>Jyotirmoy Roy</h1>            
          <h4>a{' '}
            <TypeAnimation
              loop={Infinity}
              className="banner-text"
              wrapper="b"
              sequence={[
                'Web Developer', 1000,
                'UI/UX Designer', 1000,
                'Freelancer', 1000,
                'Coder', 1000,
                'Community Manager', 1000,
              ]}  
            />            
            </h4>            
        </div>

        <div className="banner-image">
          <img src={bannerimg} alt="bannerimg" />
        </div>
      </div>
    </>
  )
}

export default Banner
