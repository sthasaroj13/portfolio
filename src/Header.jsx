import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <div className=" flex bg-purple-900  p-2  ">
        <div className=" text-white text-xl">Saroj.</div>
        <nav className="flex justify-end items-center">
          <div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset if needed
              duration={500}
              className="text-white ml-4"
            >
              HOME
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset if needed
              duration={500}
              className="text-white ml-4"
            >
              CONTACT
            </Link>

            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset if needed
              duration={500}
              className="text-white ml-4"
            >
              PROJECTS
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
