import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=" flex bg-purple-900  p-2  ">
        <div className=" text-white text-xl">Saroj.</div>
        <nav className="flex justify-end items-center">
          <div>
            <Link to="/home" className="text-white ml-4">
              HOME
            </Link>
            <Link to="/contact" className="text-white ml-4">
              CONTACT
            </Link>
            <Link to="/project" className="text-white ml-4">
              PROJECT
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
