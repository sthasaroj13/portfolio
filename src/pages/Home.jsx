import React from "react";
import myimg from "../Image/saroj.png";
import "animate.css/animate.min.css"; // Import animate.css

function Home() {
  return (
    <div className="max-w-[80rem] mx-auto p-4">
      <div className="flex flex-wrap justify-center mt-10 bg-zinc-900 border-2  border-red-700 p-4 md:p-8 rounded-lg ">
        <div className="w-full flex justify-center flex-col md:flex-row gap-8 md:gap-[9rem] items-center md:items-start">
          <div className="w-full md:w-auto flex justify-center">
            <img
              className="animate__animated animate__zoomIn rounded-lg w-full max-w-[20rem] object-cover border-2 border-white"
              src={myimg}
              alt="Saroj Shrestha"
            />
          </div>
          <div className="text-center md:text-left">
            <h1
              className="text-white font-barlow text-3xl md:text-4xl font-bold animate__animated animate__fadeIn"
              style={{ animationDuration: "2s" }}
            >
              Hello
            </h1>
            <h2
              className="text-red-600 font-barlow text-3xl md:text-4xl font-bold animate__animated animate__fadeIn"
              style={{ animationDuration: "2s" }}
            >
              I am Saroj Shrestha
            </h2>
            <p
              className="text-white text-lg md:text-xl mt-4 font-barlow max-w-full md:max-w-[40rem]"
              style={{ whiteSpace: "normal" }}
            >
              Welcome to my portfolio! I am an aspiring developer, eager to
              apply my skills and creativity to help businesses and individuals
              achieve their digital goals. As a self-taught developer, I have
              honed my skills in web development technologies such as HTML, CSS,
              JavaScript, PHP, and React, and I am constantly pushing myself to
              learn and explore new tools and techniques.
              <br />
              <br />
              I am excited about the opportunities that freelancing offers to
              grow my skills, expand my network, and gain real-world experience.
              <br />
              <br />
              Thank you for visiting my portfolio, and I hope to have the
              opportunity to work with you soon! Let's create something amazing
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
