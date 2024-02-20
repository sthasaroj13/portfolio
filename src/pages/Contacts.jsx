import React from "react";

function Contacts() {
  return (
    <>
     <h1 className="txt-heading mt-20 text-cyan-400 ml-24 font-bold underline">
          Contact me
        </h1>
      <div className=" mt-1 flex flex-wrap  gap-14 " id="Contact">
       
        <div
          className="inputFrom mt-3 ml-2 flex  flex-wrap justify-around rounded-xl"
          style={{ border: "2px solid cyan", width: "35rem" }}
          >
          <form action="">
            <h3 className=" text-white text-xl font-bold">
              Feel free to contact me
            </h3>
            <label htmlFor="" className=" text-white">
              Name
            </label>{" "}
            <br />
            <input type="text" className="rounded-xl w-72 p-1" /> <br />
            <label htmlFor="" className=" text-white">
              Email
            </label>{" "}
            <br />
            <input type="email" className=" rounded-xl w-72 p-1" /> <br />
            <label htmlFor="" className=" text-white">
              Address
            </label>{" "}
            <br />
            <input type="text" className=" rounded-xl w-72 p-1" /> <br />
            <label htmlFor="" className=" text-white">
              Phone No
            </label>
            <br />
            <input type="number" className=" rounded-xl w-72 p-1 " /> <br />
            <label htmlFor="" className=" text-white">
              Message:
            </label>{" "}
            <br />
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="3"
              placeholder="enter message . . ."
              className=" rounded-xl w-72 p-1"
            ></textarea>{" "}
            <br />
            <button className=" bg-slate-200 text-cyan-600 p-2 rounded-xl mt-2 mb-5">
              Submit
            </button>
          </form>
          </div>
            <div className=" flex flex-wrap justify-center  mt-9 w-96 h-72 rounded-xl" style={{border:'2px solid cyan'}}>
            <div className=" flex flex-col mt-20">
                    <p className=" text-white">Made By: 
                    <span className=" text-white">Saroj Shrestha</span></p>

                    <h3 className=" text-white">Connect to Me via: </h3>
                    <div className="flex gap-4 mt-2">
                        <a href="mailto:sarojshrestha651@gmail.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"></path><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"></path><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"></path><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"></path><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"></path></svg>
                        </a>

         

                        <a href="https://www.facebook.com/saroj.stha.549436" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"></path></svg>
                        </a>

                        <a href="https://github.com/sthasaroj13" target="_blank">
                           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="white" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
      </div>
    </>
  );
}

export default Contacts;
