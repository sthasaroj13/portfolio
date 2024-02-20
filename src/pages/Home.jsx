import React from 'react'
import myimg from '../Image/saroj.png'


function Home() {
  return (
<>

<div className=' flex mt-10 gap-28'>
					<div className=" ml-20">
						<h1 className=' text-cyan-200  text-2xl ml-36 mt-14 font-bold'>
            Hello
              </h1>
              <h2 className=' text-cyan-200  text-2xl ml-20  font-bold'> I am Saroj Shrestha</h2>
						<p className=' text-white mt-4'  style={{whiteSpace:'normal', maxWidth:'40rem'}}>Welcome to my portfolio! I am a aspiring developer, 
               eager to apply my skills and creativity to help businesses 
               and individuals achieve their digital goals. As a self-taught developer,
                I have honed my skills in web development technologies such as HTML,CSS,
                 JavaScript, PHP, and React, and
               I am constantly pushing myself to learn and explore new tools and techniques.
               <br /> <br />
               I am excited about the opportunities that freelancing offers to grow my skills,
                expand my network, and gain real-world experience.
                <br />  <br />
                Thank you for visiting my portfolio, and I hope to have the opportunity to work 
                with you soon! Let's create something amazing together!
               </p>
					</div>

					<div className=" mt-16">
						<img 
            className=""
            style={{height:'20rem', width:'20rem', borderRadius:'180px', border:'5px solid aquamarine' }}
          
            src={myimg}/>
					</div>
				</div>

</>
  )
}

export default Home
