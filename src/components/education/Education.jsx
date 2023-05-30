import React, { useState, useEffect } from "react";
import "./Education.css";
import useSound from "use-sound";
import education from "../../assets/education.png";
import engineering from "../../assets/engineering.png";
import audio from "../../assets/audio.mp3";

const Education = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { duration }] = useSound(audio);

  const handleClick = () => {
    if (!isPlaying) {
      play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPlaying(false);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [isPlaying, duration]);

  return (
    <div className="education" id="educationme">
      <h4>Education</h4>
      <div className="title_down">
        <hr className="line" />
        <span className="title_after">academics</span>
      </div>

      <div className="education_content">
        <div className="education_left">
          <div className="college">
            <h2>2004 - 2018</h2>
            <h3>
              <span>Class X </span> - Meghmala Roy Education Center
            </h3>
          </div>
          <div className="college">
            <h2>2018 - 2020</h2>
            <h3>
              <span>Class XII </span> - St.Joseph & Mary's School,New Alipore
            </h3>
          </div>
          <div className="college">
            <h2>2020 - Present</h2>
            <h3>
              <span>B.Tech in CSE </span> - University Of Engineering &
              Management Kolkata
            </h3>
          </div>
        </div>
        <div className="education_right">
          <img src={education} alt="educationimg" />
        </div>
      </div>

      <div className="engineering">
        <div className="engineering_details">
          <img src={engineering} alt="" className="engineeringimg" />
          <div className="engineering_right">
            <h2>Why Engineering ?</h2>
            <button onClick={handleClick}>
              <span>Listen</span>
              <i></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
