import React from 'react'
import LandingPage from './component/landingPage/LandingPage'
import NavBar from './component/nav/NavBar'
import About from './component/about/About'
import Start from './component/start/Start'
import bg from '../src/assets/bg.jpg'
import LocomotiveScroll from 'locomotive-scroll'


const App = () => {
 const locomotiveScroll = new LocomotiveScroll();
  const divStyle = {
    backgroundImage: 'https://images.pexels.com/photos/696644/pexels-photo-696644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with the path to your image
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    height: '300px', // Adjust as needed
    // Add any other styles you want for the div
  };
  return (
    <div>
      <div className=''>
      <NavBar/>
  <LandingPage/>
      </div>
    
    
      <About/>
      <Start/>
    </div>
  )
}

export default App
