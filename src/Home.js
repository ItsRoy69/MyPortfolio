import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from './components/Navbar';
import Banner from './pages/Banner';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Internships from './pages/Internships';
import Freelancing from './pages/Freelancing';
import Volunteering from './pages/Volunteering';
import Opensource from './pages/Opensource';
import Blogs from './pages/Blogs';
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
        <Banner />
        <About />
        <Education />
        <Skills />
        <Internships />
        {/* <Freelancing /> */}
        <Volunteering />
        <Opensource />
        <Blogs />
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
