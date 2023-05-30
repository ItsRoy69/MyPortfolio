import React from "react";
import { TypeAnimation } from 'react-type-animation';
import "./Banner.css"
import banner from '../../assets/banner.png'

const Banner = () => {

  return (
    <div className="banner" id="home">
      <div className="banner_left">
        <h2>Hello, I am</h2>
        <h1>Jyotirmoy Roy</h1>
        <h3>a{' '}
            <TypeAnimation
              loop={Infinity}
              className="banner-text"
              wrapper="b"
              repeat={Infinity}
              sequence={[
                'Software Developer', 1000,
                'UI/UX Designer', 1000,
                'Freelancer', 1000,
                'Coder', 1000,
                'Community Manager', 1000,
                'Developer Advocate', 1000,
              ]}  
            />            
          </h3> 
      </div>
      <div className="banner_right">
        <img src={banner} alt="" className="bannerimg" />
      </div>
    </div>
  );
};

export default Banner;
