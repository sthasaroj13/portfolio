import './App.css'


import Home from './pages/Home'
import Project from './pages/Project'
import Contacts from './pages/Contacts'



function App() {

		return (
		<html className='scroll-smooth'>
		
			

				<nav className='flex flex-wrap justify-between items-center text-xl bg-purple-500 text-white p-2'>

					<div>
						<h3 className=''>Who Am I?</h3>
					</div>

					<div  className='flex  gap-4 mr-4'>
						<span>
							<a href="#Home">Home</a>
						</span>
						<span>
							<a href="#project">Project</a>
							{/* <Link to="/#project" >Projects</Link> */}
						</span>
						<span>
							<a href="#Contact">Contact</a>
							{/* <Link to="/contact">Contact Me</Link> */}
						</span>
					</div>

				</nav>
				<Home id="home"/>
              <Project id="project"/>
             <Contacts id="contacts" />
 

				
			
		</html>
		
		);
}

export default App;