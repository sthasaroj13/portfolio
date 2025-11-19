import React from "react";
import tick from "../Image/game.png";
import Currency from "../Image/currency.png";
import music from "../Image/musicworld.png";
import bookmirta from "../Image/image.png";
import blogify from "../Image/blogify.png";
import hamroNibas from "../Image/hamroNibas.png";
import DermaAI from "../Image/DermaAI12.png";
import Tooltip from "../Components/Tooltips";

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

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            <Tooltip
              content={
                <div>
                  <p className="text-white text-[12px]">
                    DermaAI is a smart skin disease detection system built with
                    React, FastAPI, and MongoDB. Users can upload skin images,
                    which a CNN model analyzes to identify possible conditions.
                    The system saves prediction history and provides quick,
                    user-friendly results with treatment suggestions.
                  </p>
                </div>
              }
            >
              <div className="p-4 border rounded-lg border-gray-700 flex flex-col items-center ">
                <h3 className="text-lg font-semibold mb-2">DermAI</h3>
                <img className="h-52 w-auto" src={DermaAI} alt="DermaAI" />
                <a
                  className="mt-3 bg-red-700 text-white p-2 rounded-lg font-barlow"
                  href="https://github.com/sthasaroj13/Derma_Client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </a>
              </div>
            </Tooltip>

            <Tooltip
              position="top"
              content={
                <div className="flex gap-3 cursor-pointer">
                  <p className="text-white text-[.75rem]">
                    Currency Converter is a lightweight web tool built with
                    vanilla JavaScript that converts currencies using a
                    real-time exchange rate API. It provides fast, accurate
                    conversions with a simple, clean interface for quick daily
                    use.
                  </p>
                </div>
              }
            >
              <div className="p-4 border rounded-lg border-gray-700 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">
                  Currency Convertor
                </h3>
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
            </Tooltip>

            <Tooltip
              position="top"
              content={
                <div className="flex gap-3 cursor-pointer">
                  <p className="text-white text-[.75rem]">
                    MusicWorld is an interactive learning platform built with
                    Next.js, where users can explore and learn different types
                    of music. It offers a smooth, engaging interface with
                    structured content to help users understand musical styles,
                    instruments, and concepts easily.
                  </p>
                </div>
              }
            >
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
            </Tooltip>

            <Tooltip
              position="top"
              content={
                <div className="flex gap-3 cursor-pointer">
                  <p className="text-white text-[.75rem]">
                    BookMitra is a learning and reading platform built with
                    React (TypeScript) and Node.js/Express (MERN stack),
                    offering users access to a wide range of books across
                    different categories. Users can explore, learn, and even
                    download books, all through a clean and user-friendly
                    interface.
                  </p>
                </div>
              }
            >
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
            </Tooltip>
            <Tooltip
              position="top"
              content={
                <div className="flex gap-3 cursor-pointer">
                  <p className="text-white text-[.75rem]">
                    Blogify is a blogging platform built with React and
                    Node.js/Express (MERN stack), where users can write, post,
                    and read blogs from others. It allows categorizing blogs by
                    topic, making content easy to organize and explore. The
                    platform provides a simple, clean interface for sharing
                    ideas and discovering new content.
                  </p>
                </div>
              }
            >
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
            </Tooltip>
            <Tooltip
              position="top"
              content={
                <div className=" flex gap-3 cursor-pointer">
                  <p className="text-white text-[.75rem]">
                    HamroNibas is a modern Rental Management System built with
                    the MERN stack. It streamlines property listings, tenant
                    interactions, and smart recommendations using efficient
                    algorithms. HamroNibas delivers a smooth and intuitive
                    rental experience for both landlords and tenants.
                  </p>
                </div>
              }
            >
              <div className="p-4 border rounded-lg border-gray-700 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">HamroNibas</h3>
                <img
                  className="h-52 w-auto"
                  src={hamroNibas}
                  alt="hamroNibas"
                />
                <a
                  className="mt-3  bg-red-700 text-white p-2 rounded-lg font-barlow"
                  href="https://github.com/sthasaroj13/HamroNibas_Client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </a>
              </div>
            </Tooltip>
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
