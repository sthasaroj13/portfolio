import React from 'react';
import html from '../Image/html.png';
import css from '../Image/CSS.png';
import js from '../Image/js.png';
import react from '../Image/react.png';
import next from '../Image/nextjs.png';
import express from '../Image/express1.png'
import mongo from '../Image/mongoDB.png'
import figma from '../Image/figma.png'
import php from '../Image/php.png'
import sql from '../Image/mysql.png'

function Skills() {
  return (
    <div className="max-w-screen-xl max-h-64 mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-[10rem]">
      <h1 className="txt-heading text-cyan-400 ml-4 sm:ml-24 font-bold underline">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <img src={html} alt="HTML" className="w-16 md:w-24 lg:w-32 h-auto" />
        <img src={css} alt="CSS" className=" w-24 md:w-44" />
        <img src={js} alt="JavaScript" className="w-16 md:w-24 lg:w-32 h-auto" />
        <img src={react} alt="React" className="w-16 md:w-24 lg:w-32 h-auto" />
        <img src={next} alt="Next.js" className="w-16 md:w-24 lg:w-32 h-auto" />
        <img src={express} alt="express" className="w-16 md:w-24 lg:w-32 h-auto" />
        <img src={mongo} alt="mongo" className="w-16 md:w-24 lg:w-32 h-auto" />
        <img src={figma} alt="figma" className="w-16 md:w-24 lg:w-32 h-auto" />
        <img src={php} alt="php" className="w-24 md:w-44 lg:w-32 h-auto" />
        <img src={sql} alt="mysql" className="w-16 md:w-24 lg:w-32 h-auto" />
      </div>
    </div>
  );
}

export default Skills;
