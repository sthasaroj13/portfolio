import React from "react";
import tick from "../Image/game.png";
import Currency from"../Image/currency.png"

function Project() {
  return (
    
    <div className=" text-white  mt-16" id="project"  style={{backgroundColor:'rgb(22 31 59 / 25%)'}}>
      <h1 className="txt-heading text-cyan-400 ml-24 font-bold  underline">Projects</h1>
      <div className="flex flex-wrap justify-center gap-20 items-center">
        <div className=" ml-24 ">
          <h3 className=" ml-4 ">Tik-Tac-Toe</h3>
          <img style={{height:'13rem'}}
          
          src={tick} />
          <div className=" mt-3 ml-3">
            <a className=" bg-white text-cyan-400 p-1 rounded-xl" href="https://fungame-sarojstha123.vercel.app/" target="_blank">See project</a>


      
           
           
          </div>
          
        
        </div>
        <div>
          <h3 className=" ml-32">Currency Convertor</h3>
          <img 
          style={{height:'13rem'}}
          src={Currency} alt="" />
          <div className=" mt-3 ml-28">
            <a className=" bg-white text-cyan-400 p-1 rounded-xl" href="https://github.com/sthasaroj13/javaScript/blob/main/currency%20convertor/index.html">See project</a>
         
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
