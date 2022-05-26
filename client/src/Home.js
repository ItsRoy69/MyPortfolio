import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Volunteering from './components/Volunteering';
import Opensource from './components/Opensource';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Footer from './components/Footer';


const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home
