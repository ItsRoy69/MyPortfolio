import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from './components/Navbar';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Internships from './pages/Internships';
import Volunteering from './pages/Volunteering';
import Opensource from './pages/Opensource';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import Workshop from './pages/Workshop';
import Contact from './pages/Contact';
import Footer from './components/Footer';


const Home = () => {
  return (
    <>
      <Router>
        <Navbar />
        <About />
        <Education />
        <Skills />
        <Internships />
        <Volunteering />
        <Opensource />
        <Achievements />
        <Projects />
        <Workshop />
        <Contact />
        <Footer />      
      </Router>
    </>
  )
}

export default Home
