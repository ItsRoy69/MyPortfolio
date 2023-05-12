import { useState } from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import './App.css'

import Navbar from './constants/navbar/Navbar';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Internships from './components/internships/Internships';
import Volunteering from './components/volunteering/Volunteering';
import Opensource from './components/opensource/Opensource';
import Blogs from './components/blogs/Blogs';
import Achievements from './components/achievements/Achievements';
import Projects from './components/projects/Projects'
import Workshops from './components/workshops/Workshops';
import Contact from './constants/contact/Contact';
import Footer from './constants/footer/Footer';


function App() {

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
        <Workshops />
        <Contact />
        <Footer />      
      </Router>
    </>
  )
}

export default App
