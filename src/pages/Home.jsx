import React from "react";
import myimg from "../Image/saroj1.png";
import "animate.css/animate.min.css"; // Import animate.css

function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-10 gap-8 md:gap-28">
        <div className="text-center md:text-left md:ml-20  mt-12">
          <h1 className="text-cyan-200 text-2xl md:text-3xl font-bold animate__animated animate__fadeIn" style={{animationDuration: '2s'}}>
            Hello
          </h1>
          <h2 className="text-cyan-200 text-2xl md:text-3xl font-bold animate__animated animate__fadeIn" style={{animationDuration: '2s'}}>
            I am Saroj Shrestha
          </h2>
          <p
            className="text-white mt-4"
            style={{ whiteSpace: "normal", maxWidth: "40rem" }}
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

        <div className="">
          <img
            className="rounded-lg shadow-lg md:rounded-full md:shadow-xl transition duration-500 ease-in-out transform hover:scale-110 "
            style={{ maxWidth: "100%", height: "auto", maxHeight: "30rem", width: "20rem" }}
            src={myimg}
            alt="Saroj Shrestha"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
