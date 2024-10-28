import React from "react";
import tick from "../Image/game.png";
import Currency from "../Image/currency.png";
import music from "../Image/musicworld.png";
import bookmirta from "../Image/image.png";
import blogify from "../Image/blogify.png";

function Project() {
  return (
    <div className="max-w-[80rem] mx-auto p-4">
      <div
        className="text-white mt-16 p-5 flex flex-col bg-zinc-900 border border-red-700 rounded-lg"
        id="project"
      >
        <h1 className="txt-heading text-red-700 font-barlow text-3xl md:text-4xl font-bold ">
          Projects
        </h1>
        <div className="w-full h-1 bg-red-700 mt-2 mb-6"></div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="p-4 border rounded-lg border-gray-700 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Tik-Tac-Toe</h3>
              <img className="h-52 w-auto" src={tick} alt="Tik-Tac-Toe" />
              <a
                className="mt-3 bg-red-700 text-white p-2 rounded-lg font-barlow"
                href="https://fungame-sarojstha123.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            </div>

            <div className="p-4 border rounded-lg border-gray-700 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Currency Convertor</h3>
              <img
                className="h-52 w-auto"
                src={Currency}
                alt="Currency Convertor"
              />
              <a
                className=" mt-3 bg-red-700 text-white p-2 rounded-lg font-barlow"
                href="https://currencyconvertor-sarojsth123.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            </div>

            <div className="p-4 border rounded-lg border-gray-700 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Music-World</h3>
              <img className="h-52 w-auto" src={music} alt="Music-World" />
              <a
                className="mt-3 bg-red-700 text-white p-2 rounded-lg font-barlow"
                href="https://musical-world.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            </div>

            <div className="p-4 border rounded-lg border-gray-700 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">BookMitra</h3>
              <img className="h-52 w-auto" src={bookmirta} alt="BookMitra" />
              <a
                className="mt-3 bg-red-700 text-white p-2 rounded-lg font-barlow"
                href="https://github.com/sthasaroj13/BookMitra"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            </div>

            <div className="p-4 border rounded-lg border-gray-700 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Blogify</h3>
              <img className="h-52 w-auto" src={blogify} alt="Blogify" />
              <a
                className="mt-3  bg-red-700 text-white p-2 rounded-lg font-barlow"
                href="https://github.com/sthasaroj13/Blogify"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-red-700 font-barlow text-xl ">
          <a
            href="https://github.com/sthasaroj13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my Github for more Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
