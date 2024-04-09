import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Home from './pages/Home';
import Project from './pages/Project';
import Contacts from './pages/Contacts';


function App() {
  return (
    <Router>
		<div className=" rgba(14, 14, 67, 0.86)" style={{background:'rgba(14, 14, 67, 0.86)'}}>
      <nav className='flex flex-wrap justify-between items-center text-xl bg-purple-500 text-white p-2'>
        <div>
          <h3 className=''>Who Am I?</h3>
        </div>
        <div className='flex gap-4 mr-4'>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
			style={{cursor:'pointer',}}
			className=" hover:text-orange-300"

			>
            Home
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
			style={{cursor:'pointer'}}
			className=" hover:text-orange-300"
			>
            Project
          </Link>
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
			style={{cursor:'pointer'}}
			className=" hover:text-orange-300"
			>
            Contact
          </Link>
        </div>
      </nav>
      <div className='scroll-smooth'>
        <Element name="home">
          <Home />
        </Element>
        <Element name="project">
          <Project />
        </Element>
        <Element name="contacts">
          <Contacts />
        </Element>
      </div>
			  </div>
    </Router>
  );
}

export default App;
