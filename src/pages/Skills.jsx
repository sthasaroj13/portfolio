import React from "react";
import html from "../Image/html.png";
import css from "../Image/CSS.png";
import js from "../Image/js.png";
import react from "../Image/react.png";
import next from "../Image/nextjs.png";
import express from "../Image/express1.png";
import mongo from "../Image/mongoDB.png";
import figma from "../Image/figma.png";
import php from "../Image/php.png";
import sql from "../Image/mysql.png";

function Skills() {
  return (
    <>
      <div className="max-w-[80rem] mx-auto p-4">
        <div className="text-white mt-16 p-5 flex flex-col bg-zinc-900 border border-red-700 rounded-lg">
          <h1 className="txt-heading text-red-700 font-barlow text-3xl md:text-4xl font-bold ">
            Skills
          </h1>
          <div className="w-full h-1 bg-red-700 mt-2 mb-6"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
            <img
              src={html}
              alt="HTML"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={css}
              alt="CSS"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={js}
              alt="JavaScript"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={react}
              alt="React"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={next}
              alt="Next.js"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={express}
              alt="Express"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={mongo}
              alt="MongoDB"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={figma}
              alt="Figma"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={php}
              alt="PHP"
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover aspect-square
              cursor-pointer transition-all duration-3000 hover:scale-110"
            />
            <img
              src={sql}
              alt="MySQL"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover aspect-square cursor-pointer transition-all duration-3000 hover:scale-110 
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
