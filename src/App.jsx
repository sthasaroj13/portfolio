import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <div className=" bg-black">
        <nav className=" text-xl font-barlow bg-red-600 text-white p-3">
          <div className="max-w-[90rem] mx-auto flex flex-wrap justify-between items-center ">
            <div>
              <h3 className="">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: "pointer" }}
                  className=" hover:text-orange-300 text-3xl"
                >
                  Who Am I?
                </Link>
              </h3>
            </div>
            <div className="flex gap-4 mr-4">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
                className=" hover:text-orange-300 text-2xl"
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
                style={{ cursor: "pointer" }}
                className=" hover:text-orange-300  text-2xl"
              >
                Projects
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
                className=" hover:text-orange-300  text-2xl"
              >
                Skills
              </Link>
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
                className=" hover:text-orange-300  text-2xl"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="scroll-smooth">
          <Element name="home">
            <Home />
          </Element>
          <Element name="project">
            <Project />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="contacts">
            <Contacts />
          </Element>
        </div>
        <footer className=" bg-red-700 p-3">
          <h3 className=" text-white font-barlow text-2xl text-center">
            Created and designed by Saroj Shrestha
          </h3>
        </footer>
      </div>
    </Router>
  );
}

export default App;
