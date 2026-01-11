import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import ScrollProgress from "./Components/ScrollProgress";
import { Moon, Sun } from "lucide-react";
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Switching to:", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    console.log("Current theme:", theme);
    console.log("HTML classes:", document.documentElement.classList);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <Router>
      <div className=" bg-white dark:bg-black transition-all duration-300">
        <ScrollProgress />
        <nav className=" text-xl font-barlow bg-white dark:bg-red-600 text-white p-3 shadow-lg">
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
                  className=" hover:text-orange-300 text-3xl dark:text-white text-red-600"
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
                className=" hover:text-orange-300 text-2xl dark:text-white text-red-600"
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
                className=" hover:text-orange-300  text-2xl dark:text-white text-red-600"
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
                className=" hover:text-orange-300  text-2xl dark:text-white text-red-600"
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
                className=" hover:text-orange-300  text-2xl dark:text-white text-red-600"
              >
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className="px-2 py-[.1875rem] bg-black text-white dark:bg-white dark:text-black rounded-xl focus:outline-none  "
              >
                {theme === "dark" ? (
                  <>
                    <div className=" flex items-center gap-1">
                      <Sun color="#d9ad36" />
                      <span>light</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" flex items-center gap-1">
                      <Moon color="#f2f2f2" />

                      <span>Dark</span>
                    </div>
                  </>
                )}
              </button>
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
        <footer className="dark:bg-red-700 bg-white p-3 shadow-inner">
          <h3 className=" dark:text-white text-red-600 font-barlow text-2xl text-center">
            Created and designed by Saroj Shrestha
          </h3>
        </footer>
      </div>
    </Router>
  );
}

export default App;
