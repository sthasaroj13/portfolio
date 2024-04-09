import React from "react";
import tick from "../Image/game.png";
import Currency from "../Image/currency.png";
import music from "../Image/musicworld.png";

function Project() {
  return (
    <div className="text-white mt-16 p-5"  id="project" style={{ backgroundColor: 'rgb(22 31 59 / 25%) ' }}>
      <h1 className="txt-heading text-cyan-400 ml-4 sm:ml-24 font-bold underline">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-20 items-center">
        <div className="ml-4 sm:ml-0">
          <h3 className="ml-2 sm:ml-4">Tik-Tac-Toe</h3>
          <img style={{ height: '13rem' }} src={tick} alt="" />
          <div className="mt-3 ml-2 sm:ml-3 flex justify-center">
            <a className="bg-white text-cyan-400 p-1 rounded-xl" href="https://fungame-sarojstha123.vercel.app/" target="_blank" rel="noopener noreferrer">See project</a>
          </div>
        </div>
        <div className="ml-4 sm:ml-0">
          <h3 className="ml-2 sm:ml-4">Currency Convertor</h3>
          <img style={{ height: '13rem' }} src={Currency} alt="" />
          <div className="mt-3 ml-2 sm:ml-3 flex justify-center">
            <a className="bg-white text-cyan-400 p-1 rounded-xl" href="https://currencyconvertor-sarojsth123.vercel.app/" target="_blank" rel="noopener noreferrer">See project</a>
          </div>
        </div>
        <div className="ml-4 sm:ml-0">
          <h3 className="ml-2 sm:ml-4">Music-World</h3>
          <img style={{ height: '13rem' }} src={music} alt="" />
          <div className="mt-3 ml-2 sm:ml-3 flex justify-center">
            <a className="bg-white text-cyan-400 p-1 rounded-xl" href="https://musical-world.vercel.app/" target="_blank" rel="noopener noreferrer">See project</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
